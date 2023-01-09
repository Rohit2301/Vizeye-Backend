const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../upload/");
  },
  filename: (req, file, cb) => {
    console.log("here it is");
    const ext = file.mimetype.split("/")[1];
    cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
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
  storage: storage,
  fileFilter: multerFilter,
});

module.exports = multerConfig;
