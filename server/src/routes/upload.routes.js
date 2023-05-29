const { uploadFiles, upload } = require("../controllers/upload.controller");
const { uploadErrorCheck } = require("../middlewares/upload.middlewares");

const router = require("express").Router();

router.post("/", upload.array("images", 5), uploadErrorCheck, uploadFiles);

module.exports = router;
