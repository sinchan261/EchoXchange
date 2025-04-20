import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import { Request, Response } from 'express';
import userModel from "./models/userModel";
dotenv.config();
connectDB();
import jwt from 'jsonwebtoken';

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.post('/register',async(req:Request, res:Response):Promise<any>=>{
    console.log(req.body)
    const name=req.body.name;
    const email=req.body.email
    const password=req.body.password
    const token=jwt.sign({name,email},'secret',{expiresIn:'1h'})
    const data=await userModel.create({
        name,
        email,
        password,token
    })
    console.log(data)
    return res.send({Token:token})
})
app.post('/login', async (req: Request, res: Response):Promise<any> => {
    const { email, password } = req.body;

    try {
        // Find user in database
        const user = await userModel.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials! Please register.' });
        }

        // If user exists, send stored token back
        return res.json({
            message: 'Login successful!',
            token: user.token
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
