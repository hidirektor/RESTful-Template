const nodemailer = require('nodemailer');
const Verification = require('../models/Verification');
require('dotenv').config();

exports.sendOtp = async (req, res) => {
    const { userName, otpType } = req.body;

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const otpTime = new Date();

    try {
        await Verification.create({ userName, otpType, otpCode, otpTime });

        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        let mailOptions = {
            from: process.env.SMTP_USER,
            to: userName,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otpCode}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending OTP', error });
    }
};
