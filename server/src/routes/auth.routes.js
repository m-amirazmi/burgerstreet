const router = require("express").Router()
const { signUp, signIn } = require("../controllers/auth.controller")
const { testUser } = require("../controllers/user.controller")
const { verifyUser, isAdmin } = require("../middlewares/user.middlewares")

router.post("/", verifyUser, isAdmin)
router.post("/signup", signUp)
router.post("/signin", signIn)
router.get("/test-user", verifyUser, isAdmin, testUser)

module.exports = router