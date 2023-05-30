const jwt = require("jsonwebtoken")
const { TOKEN_KEY } = require("./constants")

exports.createSecretToken = (id) => jwt.sign({ id }, TOKEN_KEY, { expiresIn: 3 * 24 * 60 * 60 })