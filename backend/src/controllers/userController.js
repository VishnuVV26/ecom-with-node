const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const registerUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    try {
        const exitingUser = await User.findOne({ email });
        if (exitingUser) {
            return res.status(400).json({ message: "User Already Exists" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password and Confirm Password Not Match" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword })
        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1hr' })

        res.status(201).json({ message: "User Registered", token });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const loginUser = await User.findOne({ email });
        if (!loginUser) {
            return res.status(400).json({ message: "Ivalid credentials" })
        }
        const isMatch = await bcrypt.compare(password, loginUser.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" })
        const token = jwt.sign({ userId: loginUser._id }, process.env.JWT_SECRET, { expiresIn: '1hr' })
        res.status(201).json({ message: "Login SuccessFully", token });
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}
module.exports = { registerUser, loginUser }