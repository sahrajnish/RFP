import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import { DB_NAME } from "./constanst.js";

dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

connectDB(`${process.env.MONGODB_URI}/${DB_NAME}`);

app.use("/api", userRouter);

app.listen(port, () => console.log(`Server running on ${port}`))