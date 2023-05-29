const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const originalExtension = file.originalname.split(".").pop();
    const folder = `uploads/${req.body.type}`;
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

    const filename = `${req.body.id}_${Date.now()}.${originalExtension}`;
    const filepath = `${req.body.type}/${filename}`;
    cb(null, filepath);
  },
});

exports.upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 0.5 },
});

exports.uploadFiles = (req, res) => {
  const filePaths = req.files.map(
    (file) => req.protocol + "://" + req.host + ":5000/" + file.path
  );
  res.json({ message: "Successfully uploaded!", urls: filePaths });
};
