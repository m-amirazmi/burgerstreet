const multer = require("multer");

const errCode = {
  LIMIT_FILE_SIZE: "File size limit exceeded",
  LIMIT_UNEXPECTED_FILE: "Max 5 files uploaded at same time",
};

exports.uploadErrorCheck = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: errCode[err.code] });
  }
  next(err);
};
