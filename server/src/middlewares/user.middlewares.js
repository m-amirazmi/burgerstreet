const jwt = require('jsonwebtoken')
const User = require("../models/user.model")
const { TOKEN_KEY } = require('../utils/constants')

exports.verifyUser = async (req, res, next) => {
	const token = req.cookies.token
	if (!token) return res.json({ status: false, message: "Unauthenticated!" })

	jwt.verify(token, TOKEN_KEY, async (err, data) => {
		if (err) return res.json({ status: false, message: "Unauthenticated!" })
		else {
			const user = await User.findById(data.id)
			if (!user) return res.json({ status: false, message: "Unauthenticated!" })
			res.json({ status: true, user: user })
			next()
		}
	})
}