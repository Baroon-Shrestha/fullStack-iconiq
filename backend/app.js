require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const loginRoutes = require("./Routes/authRoutes");
const chatRoutes = require("./Routes/chatRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/admin", loginRoutes);
app.use("/admin", chatRoutes); // Chat-related API routes

module.exports = app;
