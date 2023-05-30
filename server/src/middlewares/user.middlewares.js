const jwt = require('jsonwebtoken')
const User = require("../models/user.model")
const { TOKEN_KEY, ROLES } = require('../utils/constants')

exports.verifyUser = async (req, res, next) => {
	const token = req.cookies.token
	if (!token) return res.json({ status: false, message: "Unauthenticated!" })

	jwt.verify(token, TOKEN_KEY, async (err, data) => {
		if (err) return res.json({ status: false, message: "Unauthenticated!" })
		else {
			const user = await User.findById(data.id)
			if (!user) return res.json({ status: false, message: "Unauthenticated!" })
			req.user = user
			next()
		}
	})
}

exports.isAdmin = async (req, res, next) => {
	const userRoles = req.user.roles
	let isAdmin = userRoles.find((r) => ROLES[r] === 'admin')

	if (!isAdmin) return res.json({ status: false, message: "Unauthorized!" })
	next()
}