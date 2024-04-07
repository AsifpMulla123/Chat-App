import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";

import chatRouter from "./routes/chat.js";
import userRouter from "./routes/user.js";

dotenv.config({
    path: "./.env"
});
connectDB(process.env.MONGO_URI);

const app = express();
// middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/chat", chatRouter);

app.get("/", (req, res) => {
    res.send("Hello Home Route");
});

app.use(errorMiddleware);
app.listen(3000, () => {
    console.log("server is running at port 3000");
});