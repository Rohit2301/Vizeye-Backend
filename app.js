const express = require("express");
// const fileUpload = require("express-fileupload");
const cors = require("cors");
const uploadImageRoute = require("./routes/uploadImage");
const apiKeys = require("./routes/apiKeys");
// const userRoutes = require("./routes/userRoutes");

const app = express();
// config

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Welcome to vizeye backend");
});

app.use("/apiKeys", apiKeys);

app.use("/uploadImage", uploadImageRoute);
// app.use("/user", userRoutes);

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

module.exports = app;
