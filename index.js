import express, { json } from "express";
import dotenv from "dotenv";
const app = express();
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";


dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("db connected");
    } catch (error) {
        throw(error);
    }
}


//middleware
app.use(express.json())
app.use("/auth",authRoute);
app.use("/hotel",hotelRoute);
app.use("/room",roomRoute);
app.use("/user",userRoute);

app.listen(3000,()=>{
    connect();
    console.log("backend server running");
})
