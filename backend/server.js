const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

dbConnect();

const currentDir = path.resolve();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["https://nasa-api-jlyv.vercel.app"],
    methods: ["POST","GET"],
    credentials: true,
  })
);


app.get("/", (req,res) => {
  res.json("Hello")
})

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use(express.static(path.join(currentDir, "/frontend/dist")));

app.get('*', (req, res) => {
  res.sendFile(path.join(currentDir, 'frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8088;

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
