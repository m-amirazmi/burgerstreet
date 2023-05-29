const { uploadFiles, upload } = require("../controllers/upload.controller");
const { filesizeCheck } = require("../middlewares/upload.middlewares");

const router = require("express").Router();

router.post("/", upload.array("images"), filesizeCheck, uploadFiles);

module.exports = router;
