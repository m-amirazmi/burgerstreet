const multer = require("multer");

exports.filesizeCheck = (err,req,res,next) => {
    if (err instanceof multer.MulterError) {
        console.log(err.code)
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ message: 'File size limit exceeded'});
        }
      }
      next(err);
}