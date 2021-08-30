const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDb = require("./configDB/db.js");
const userRouter = require("./routes/userRoutes.js");

const app = express();
connectDb();

app.use(express.json());

app.use("/api", userRouter);

app.listen(PORT || 5000);
