const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

exports.register = async (req, res) => {
    const { NameSurname, userName, phoneNumber, eMail, userType, password, profilePhoto, relativeNameSurname, relativePhoneNumber, registeredMerchant } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ NameSurname, userName, phoneNumber, eMail, userType, password: hashedPassword, profilePhoto, relativeNameSurname, relativePhoneNumber, registeredMerchant });

        const token = jwt.sign({ id: user.id, userType: user.userType }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};