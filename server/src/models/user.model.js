const { Schema, model } = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = new Schema({
	email: {
		type: String,
		required: [true, 'Your email address is required'],
		unique: true
	},
	first_name: {
		type: String,
		required: [true, 'Your first name is required'],
	},
	last_name: {
		type: String,
		required: [true, 'Your last name is required'],
	},
	password: {
		type: String,
		required: [true, 'Your password is required']
	},
	roles: {
		type: [String],
		required: true,
		default: "BS00"
	}
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
})

userSchema.pre("save", async function () {
	this.password = await bcrypt.hash(this.password, 12)
})

module.exports = model("User", userSchema)