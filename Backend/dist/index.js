"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userModel_1 = __importDefault(require("./models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["https://ecoxchange-e451.onrender.com", "http://localhost:5173"],
    credentials: true, // allow cookies to be sent
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/auth", authRoutes_1.default);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.cookies)
    return res.status(200).send({ 'message': "welcome" });
}));
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send({ message: 'All fields are required', data: null });
        }
        const findUser = yield userModel_1.default.findOne({ email });
        if (findUser) {
            return res.status(409).send({ message: 'User already exists', data: null });
        }
        const newUser = yield userModel_1.default.create({ name, email, password });
        res.status(200).send({ message: "User registered successfully", data: newUser });
    }
    catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).send({ message: 'Internal Server Error', data: null });
    }
}));
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ message: 'Email and password are required', data: null });
        }
        const userFound = yield userModel_1.default.findOne({ email }).select('+password');
        if (!userFound) {
            return res.status(404).send({ message: 'User not found', data: null });
        }
        if (userFound.password !== password) {
            return res.status(401).send({ message: 'Invalid password', data: null });
        }
        const token = jsonwebtoken_1.default.sign({ email: userFound.email, id: userFound._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });
        res.cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // HTTPS only in production
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        });
        console.log(req.cookies);
        return res.status(200).send({
            message: 'Login successful',
            data: {
                id: userFound._id,
                name: userFound.name,
                email: userFound.email,
            }
        });
    }
    catch (error) {
        console.error('Error during login:', error);
        return res.status(500).send({ message: 'Internal Server Error', data: null });
    }
}));
app.get('/validate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(408).send({ message: "Token not found", user: null });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'secret');
        const userData = yield userModel_1.default.findById({ _id: decoded.id });
        if (!userData) {
            return res.status(404).send({ message: "User not found", user: null });
        }
        return res.status(200).send({ message: "Token valid", user: decoded });
    }
    catch (error) {
        return res.status(401).send({ message: "Token invalid or expired", user: null });
    }
}));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
