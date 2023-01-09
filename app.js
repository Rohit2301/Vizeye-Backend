const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const multerConfig = require("./utils/multer");
const userRoutes = require("./routes/userRoute");

const app = express();
// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hlop");
});

// app.post("/", (req, res) => {
//   console.log(req.files);
//   const fileName = req.files.file.name;
//   const file = req.files.file;
//   const uploadPath = __dirname + "/upload/" + fileName;

//   if (req.files == null) {
//     return res.status(400).json({ msg: "no file uploaded" });
//   }

//   file.mv(uploadPath, (err) => {
//     if (err) return res.status(500).send(err);
//   });
//   console.log(req.files);
//   res.json({ fileName: fileName, filePath: uploadPath });
// });

app.use("/user", userRoutes);

module.exports = app;
