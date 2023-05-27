const { COUNTRIES, STATES } = require("./constants");

exports.checkAddressErrors = async (data) => {
  const errorArray = [];
  if (!data.street_1) errorArray.push("Street 1 cannot be emptied!");
  if (!data.postcode) errorArray.push("Postcode cannot be emptied!");
  if (!data.city) errorArray.push("City cannot be emptied!");
  if (!data.state) errorArray.push("State cannot be emptied!");
  if (!data.country) errorArray.push("Country cannot be emptied!");

  return [...errorArray, ...(await this.checkValidStateCountry(data))];
};

exports.checkValidStateCountry = async (data) => {
  const errorArray = [];
  if (!data.country && data.state)
    errorArray.push("Must pass the country to update the state!");
  if (data.country && !COUNTRIES.includes(data.country)) {
    errorArray.push("Country must be legit!");
  }
  if (
    COUNTRIES.includes(data.country) &&
    data.state &&
    !STATES[data.country].includes(data.state)
  ) {
    errorArray.push("State must be legit!");
  }
  return errorArray;
};

exports.checkNewStallErrors = async (data) => {
  const errorArray = [];
  if (!data.name) errorArray.push("Stall name cannot be emptied!");
  if (!data.location) errorArray.push("Stall location cannot be emptied!");

  return errorArray;
};
