const User = require('../models/usermodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const logincontroller = async (req, res) => {
    try {
        const { rollno, dob } = req.body;

        // Find user in database
        const user = await User.findOne({ rollno });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        // Verify password
        if (dob!=user.dob) return res.status(401).json({ message: 'Invalid credentials' });

        // Generate JWT token
        const token = jwt.sign({ id: user._id, rollno: user.rollno }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.json({ token });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

const verifycontroller = async (req, res) => {

    res.json({  rollno: req.user });

}

module.exports = { logincontroller, verifycontroller };