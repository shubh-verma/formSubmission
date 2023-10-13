const express = require("express");
const app = express();
const port = 5000;
const connectDB = require("./db/dbConnect");
const User = require("./model/user");
const cors = require("cors");

app.use(express.json());

app.use(cors());

//Registration

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    await user.save();
    res.status(200).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: "Registration Failure" });
  }
});

//Login

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid Username or Password" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid Password" });
    }
    res.status(200).json({ message: "login successful" });
  } catch (error) {
    res.status(500).json({ error: "Login Failure" });
  }
});

connectDB();

app.listen(port, () => {
  console.log("listening on port 5000");
});
