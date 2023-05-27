const Stall = require("../models/stall.model");
const Address = require("../models/address.model");
const { checkNewStallErrors } = require("../utils/error-checker");
const { cleanString } = require("../utils/helpers");
const {
  createNewAddressHelper,
  updateAddressHelper,
} = require("./address.controller");

exports.createStall = async (req, res) => {
  const { location } = req.body;
  const address = await createNewAddressHelper(location, res);

  req.body.location = address._id;

  const stallErrors = await checkNewStallErrors(req.body);
  if (stallErrors.length !== 0)
    return res.json({
      message: "Something went wrong!",
      errors: stallErrors,
    });

  const stall = await Stall.create(req.body);
  return res.json({ message: "OK!", stall });
};

exports.getStalls = async (req, res) => {
  const [stalls, count] = await Promise.all([
    Stall.find({}).populate("location"),
    Stall.countDocuments({}),
  ]);
  return res.json({ message: "OK!", count, stalls });
};

exports.getStall = async (req, res) => {
  const id = cleanString(req.params.id);
  const stall = await Stall.findById(id).populate("location");
  if (!stall) return res.json({ message: "Stall not found!", stall });
  return res.json({ message: "OK!", stall });
};

exports.updateStall = async (req, res) => {
  const id = cleanString(req.params.id);
  const stall = await Stall.findById(id);

  if (req.body.location) {
    const location = await updateAddressHelper(
      stall.location,
      req.body.location,
      res
    );
    req.body.location = location._id;
  }
  Object.assign(stall, req.body);

  const updatedStall = await stall.save();
  res.json({ message: "OK!", stall: updatedStall });
};

exports.removeStall = async (req, res) => {
  const id = cleanString(req.params.id);
  const stall = await Stall.findByIdAndRemove(id);
  await Address.findByIdAndRemove(stall.location);
  return res.json({ message: `Removed stall id: ${stall._id}`, stall });
};
