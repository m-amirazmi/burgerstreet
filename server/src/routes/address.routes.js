const router = require("express").Router();
const {
  createAddress,
  getAddresses,
  getAddress,
  removeAddress,
  updateAddress,
} = require("../controllers/address.controller");

router.get("/", getAddresses);
router.get("/:id", getAddress);
router.post("/", createAddress);
router.put("/:id", updateAddress);
router.delete("/:id", removeAddress);

module.exports = router;
