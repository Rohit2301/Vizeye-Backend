const router = require("express").Router();
const cloudinary = require("../config/cloudinary");
const multerUploader = require("../utils/multer");
const User = require("../models/image");
const streamifier = require("streamifier");

router.get("/", (req, res) => {
  res.send("Welcome to uploadImage section");
});

// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     // Upload image to cloudinary
//     // console.log(req.file);
//     console.log("below err");
//     const result = await cloudinary.uploader.upload(req.file.buffer);

//     // Create new user
//     let user = new User({
//       name: req.body.name,
//       profile_img: result.secure_url,
//       cloudinary_id: result.public_id,
//     });
//     // save user details in mongodb
//     await user.save();

//     res.status(200).send({
//       success: true,
//       file: result.secure_url,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });
router.post("/", multerUploader.single("image"), async (req, res) => {
  let streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          console.log("here");
          reject(error);
        }
      });

      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  async function upload(req) {
    try {
      let result = await streamUpload(req);
      console.log(result);
      res.send({ filePath: result.secure_url, success: true });
    } catch (error) {
      res.send({ error: error, status: 400 });
    }
  }
  upload(req);
});

module.exports = router;
