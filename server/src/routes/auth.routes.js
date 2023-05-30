const router = require("express").Router()
const { signUp, signIn } = require("../controllers/auth.controller")
const { verifyUser } = require("../middlewares/user.middlewares")

router.post("/", verifyUser)
router.post("/signup", signUp)
router.post("/signin", signIn)

module.exports = router