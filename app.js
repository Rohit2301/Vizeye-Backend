const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("hlop");
});

// db connection
// const connect = async () => {
//   await run();
// };
// connect();

// app.post("/", (req, res) => {
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
