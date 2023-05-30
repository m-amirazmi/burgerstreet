const User = require("../models/user.model")
const { createSecretToken } = require("../utils/secrets")
const bcrypt = require('bcrypt')

exports.signUp = async (req, res) => {
	const { email } = req.body
	const existingUser = await User.findOne({ email })
	if (existingUser) return res.json({ message: "User already exists!" })

	const user = await User.create(req.body)
	const token = createSecretToken(user._id)

	res.cookie("token", token, { withCredentials: true, httpOnly: false })
	return res.status(201).json({ message: "User signed in successfully", success: true, user })
}

exports.signIn = async (req, res) => {
	const { email, password } = req.body
	if (!email || !password) return res.json({ message: "All fields are required" })

	const user = await User.findOne({ email })
	if (!user) return res.json({ message: "Incorrect password or email" })

	const auth = await bcrypt.compare(password, user.password)
	if (!auth) return res.json({ message: "Incorrect password or email" })

	const token = createSecretToken(user._id)
	res.cookie("token", token, { withCredentials: true, httpOnly: false })
	return res.status(201).json({ message: "User signed in successfully", success: true, user })
}