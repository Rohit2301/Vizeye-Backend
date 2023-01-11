const multer = require("multer");
const path = require("path");

const storageMul = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../upload/"));
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.originalname}-${Date.now()}.${ext}`);
  },
});

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
  storage: storageMul,
  fileFilter: multerFilter,
});

module.exports = multerConfig;
