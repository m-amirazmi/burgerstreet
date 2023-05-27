const { getHello, createHello, removeHello } = require("../controllers/hello.controller");

const router = require("express").Router();

router.get("/hello", getHello);
router.post("/hello", createHello);
router.delete("/hello/:id", removeHello)

module.exports = router;
