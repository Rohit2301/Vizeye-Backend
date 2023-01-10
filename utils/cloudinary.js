const cloudinary = require("cloudinary").v2;
console.log("below is key");
console.log(`${process.env.CLOUDINARY_API_KEY}`);
console.log("below is key");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
module.exports = cloudinary;