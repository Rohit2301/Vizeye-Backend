const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

// app.get("/", (req, res) => {
//   console.log("get request");
//   res.send("hlop");
// });

app.post("/", (req, res) => {
  const fileName = req.files.file.name;
  const file = req.files.file;
  const uploadPath = __dirname + "/upload/" + fileName;

  if (req.files == null) {
    return res.status(400).json({ msg: "no file uploaded" });
  }

  file.mv(uploadPath, (err) => {
    if (err) return res.status(500).send(err);
  });
  console.log(req.files);
  res.json({ fileName: fileName, filePath: uploadPath });
});

app.listen(PORT, () => console.log(`app running on ${PORT}`));

module.exports = app;
