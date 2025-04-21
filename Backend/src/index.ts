// server.ts
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
    origin: ["https://ecoxchange-e451.onrender.com", "http://localhost:5173"], // replace with your frontend URL!
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

// Basic route to test server is working
app.get('/', async (req: Request, res: Response): Promise<any> => {
  return res.status(200).send({ message: "Welcome to Backend" });
});

// User Registration
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
    return res.status(200).send({ message: "User registered successfully", data: newUser });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).send({ message: 'Internal Server Error', data: null });
  }
});

// User Login
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
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000,
    });

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

// Token Validation Route
app.get('/validate', async (req: Request, res: Response): Promise<any> => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(408).send({ message: "Token not found", user: null });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as jwt.JwtPayload;
    const userData = await userModel.findById(decoded.id);
    if (!userData) {
      return res.status(404).send({ message: "User not found", user: null });
    }
    return res.status(200).send({ message: "Token valid", user: decoded });
  } catch (error) {
    return res.status(401).send({ message: "Token invalid or expired", user: null });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
