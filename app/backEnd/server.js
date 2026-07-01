const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let dotenv = require("dotenv");
const connectDB = require("./db");
const path = require("path");

const toDoRoutes = require("./toDoRoute");

const app = express();
dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/todo", toDoRoutes);

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "about.html"));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
