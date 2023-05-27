const Address = require("../models/address.model");
const {
  checkAddressErrors,
  checkValidStateCountry,
} = require("../utils/error-checker");
const { cleanString } = require("../utils/helpers");

exports.createAddress = async (req, res) => {
  const address = this.createNewAddressHelper(req.body, res);
  return res.status(200).json({ message: "OK!", address });
};

exports.getAddresses = async (req, res) => {
  const [addresses, count] = await Promise.all([
    Address.find({}),
    Address.countDocuments({}),
  ]);
  return res.json({ message: "OK!", count, addresses });
};

exports.getAddress = async (req, res) => {
  const id = cleanString(req.params.id);
  const address = await Address.findById(id);
  if (!address) return res.json({ message: "Address not found!", address });
  return res.json({ message: "OK!", address });
};

exports.updateAddress = async (req, res) => {
  const id = cleanString(req.params.id);
  if (!id) return res.json({ message: "Address ID params cannot be emptied!" });
  if (!req.body) return res.json({ message: "OK!" });

  const address = await this.updateAddressHelper(id, req.body, res);
  return res.json({ message: "OK!", address });
};

exports.removeAddress = async (req, res) => {
  const id = cleanString(req.params.id);
  const address = await Address.findByIdAndRemove(id);
  return res.json({ message: `Removed address id: ${address._id}`, address });
};

exports.createNewAddressHelper = async (location, res) => {
  if (!location) return res.json({ message: "Address cannot be emptied!" });
  const addressErrors = await checkAddressErrors(location);
  if (addressErrors.length !== 0)
    return res.json({
      message: "Something went wrong!",
      errors: addressErrors,
    });

  return await Address.create(location);
};

exports.updateAddressHelper = async (id, location, res) => {
  const addressErrors = await checkValidStateCountry(location);

  if (addressErrors.length !== 0)
    return res.json({
      message: "Something went wrong!",
      errors: addressErrors,
    });

  return await Address.findByIdAndUpdate(id, location, { new: true });
};
