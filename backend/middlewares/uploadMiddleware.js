const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
module.exports = upload;
