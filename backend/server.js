const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 5000;
const connectDb = require("./configDB/db.js");
const userRouter = require("./routes/userRoutes.js");

const app = express();
connectDb();

app.use(express.json());
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.use("/api", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../frontend/build", "index.html"));
});

app.listen(PORT || 5000);
