const { getHello, createHello } = require("../controllers/hello.controller");

const router = require("express").Router();

router.get("/hello", getHello);
router.post("/hello", createHello);

module.exports = router;
