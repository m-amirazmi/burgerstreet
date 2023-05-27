const router = require("express").Router();
const {
  createStall,
  getStalls,
  getStall,
  updateStall,
  removeStall,
} = require("../controllers/stall.controller");

router.post("/", createStall);
router.get("/", getStalls);
router.get("/:id", getStall);
router.put("/:id", updateStall);
router.delete("/:id", removeStall);

module.exports = router;
