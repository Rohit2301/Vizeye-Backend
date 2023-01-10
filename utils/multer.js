const multer = require("multer");
const path = require("path");
// destination: (req, file, cb) => {
//     cb(null, __dirname);
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `${new Date().toISOString() + file.originalname}`);
//   },
const storage = multer.diskStorage({});

const multerFilter = (req, file, cb) => {
  let ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    cb(new Error("Unsupported file type!"), false);
    return;
  }
  cb(null, true);
};

// Multer config
const multerConfig = multer({
  storage: storage,
  fileFilter: multerFilter,
});

module.exports = multerConfig;
