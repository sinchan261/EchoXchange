// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db";
// import authRoutes from "./routes/authRoutes";
// import { Request, Response } from 'express';
// import userModel from "./models/userModel";
// dotenv.config();
// connectDB();
// import jwt from 'jsonwebtoken';

// const app = express();

// app.use(
//     cors({
//       origin: ["https://ecoxchange-e451.onrender.com", "http://localhost:5173"],
//       credentials: true,
//     })
//   );
  
// app.use(express.json());

// app.use("/api/auth", authRoutes);



// app.post('/register',async(req:Request, res:Response):Promise<any>=>{
//   try{
// const{name,email,password}=req.body

// if (!name || !email || !password) {
//   return res.status(400).send({ message: 'All fields are required', data: null });
// }
//     const findvalue:any= await userModel.findOne({email})
     

//     if(findvalue){
//         return res.status(409).send({'message':'user already exist',data:null})
//     }
     

 
//     const newUser=await userModel.create({
//         name,
//         password,
//         email
        
//     })
//     res.status(200).send({message:"User registered successfully",data:newUser})

//   }catch(error){

//     return res.status(500).send({ message: 'Internal Server Error', data: null });
//   }
  
// })




// app.post('/login', async (req: Request, res: Response): Promise<any> => {
//   try {
//     const { email, password } = req.body;

  
//     if (!email || !password) {
//       return res.status(400).send({ message: 'Email and password are required', data: null });
//     }


//     const userFound = await userModel.findOne({ email }).select('+password');  // Make sure password is selected!
//  console.log(userFound)
//     if (!userFound) {
//       return res.status(404).send({ message: 'User not found', data: null });
//     }

//     if (userFound.password !== password) {
//       return res.status(401).send({ message: 'Invalid password', data: null });
//     }
//     const token=jwt.sign({email,password},'secret',{'expiresIn':'24h'})
    
//     return res.status(200).send({
//       message: 'Login successful',
//       data: {
//         id: userFound._id,
//         name: userFound.name,
//         email: userFound.email,
//         token
//       }
//     });

//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(500).send({ message: 'Internal Server Error', data: null });
//   }
// });



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import userModel from "./models/userModel";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: ["https://ecoxchange-e451.onrender.com", "http://localhost:5173"],
    credentials: true, // allow cookies to be sent
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.get('/',async(req:Request,res:Response):Promise<any>=>{
  // console.log(req.cookies)
  return res.status(200).send({'message':"welcome"})
})
app.post('/register', async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send({ message: 'All fields are required', data: null });
    }

    const findUser = await userModel.findOne({ email });

    if (findUser) {
      return res.status(409).send({ message: 'User already exists', data: null });
    }

    const newUser = await userModel.create({ name, email, password });
    res.status(200).send({ message: "User registered successfully", data: newUser });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).send({ message: 'Internal Server Error', data: null });
  }
});


app.post('/login', async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: 'Email and password are required', data: null });
    }

    const userFound = await userModel.findOne({ email }).select('+password');
    if (!userFound) {
      return res.status(404).send({ message: 'User not found', data: null });
    }

    if (userFound.password !== password) {
      return res.status(401).send({ message: 'Invalid password', data: null });
    }

    const token = jwt.sign(
      { email: userFound.email, id: userFound._id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '24h' }
    );
  
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // HTTPS only in production
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });
    console.log(req.cookies)
    return res.status(200).send({
      message: 'Login successful',
      data: {
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
      }
    });

  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).send({ message: 'Internal Server Error', data: null });
  }
});


app.get('/validate',async (req: Request, res: Response): Promise<any> => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(408).send({ message: "Token not found" ,user:null});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret')as jwt.JwtPayload;
    const userData = await userModel.findById({ _id: decoded.id });
    if (!userData) {
      return res.status(404).send({ message: "User not found", user: null });
    }
    return res.status(200).send({ message: "Token valid", user: decoded });
  } catch (error) {
    return res.status(401).send({ message: "Token invalid or expired" ,user:null});
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
