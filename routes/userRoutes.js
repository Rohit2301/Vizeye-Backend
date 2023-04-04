const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("welcome to vieye user route");
});

router.post("/", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
    });
    await user.save();
    res.status(200).send({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
