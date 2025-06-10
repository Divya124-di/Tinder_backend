const express = require("express");
const app = express();
const User = require("./models/user"); 
app.use(express.json());
require("./config/database");
require("dotenv").config();

app.use(express.json()); // to parse JSON request bodies

app.get("/user", (req, res) => {
  res.send("Hello, World!");
});

app.post("/signup", async (req, res) => {
    console.log("Request body:", req.body); 
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(7777, () => {
  console.log("Server is running on http://localhost:7777");
});
