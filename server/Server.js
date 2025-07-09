import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors'
import connectDB from "./configs/db.js";
import 'dotenv/config';
import userRouter from "./Routes/UserRoutes.js";
import SellerRoutes from "./Routes/SellerRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./Routes/productRoutes.js";
import cartRouter from "./Routes/cartRoutes.js";
import addressRouter from "./Routes/addressRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

const app = express();
const port = process.env.PORT || 4000;



// const allowedOrigins = ['http://localhost:5173',
//                        'https://near-basket.vercel.app' ]


//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors({
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/',(req,res) => res.send("API is working"));
app.use('/api/user', userRouter)
app.use('/api/seller', SellerRoutes)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)

app.listen(port , async() =>{
    console.log(`Server is running on http://localhost:${port}`)
    await connectDB();
    await connectCloudinary();
})
