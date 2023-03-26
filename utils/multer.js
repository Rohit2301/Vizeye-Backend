const multer = require("multer");
const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../upload/"));
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `${file.originalname}-${Date.now()}.${ext}`);
//   },
// });

const storage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  let ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".webp") {
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
