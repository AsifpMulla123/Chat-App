import express from "express";

import userRouter from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
dotenv.config({
    path: "./.env"
});
connectDB(process.env.MONGO_URI);

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("Hello Home Route");
});

app.use(errorMiddleware);
app.listen(3000, () => {
    console.log("server is running at port 3000");
});