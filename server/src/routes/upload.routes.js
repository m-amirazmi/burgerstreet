const { uploadFiles, upload } = require("../controllers/upload.controller");

const router = require("express").Router();

router.post("/", upload.array("images"), uploadFiles);

module.exports = router;
