const nodemailer = require('nodemailer');
const OTPLog = require('../models/OTPLog');
const CustomError = require('../utils/customError');
const generateOtpEmailContent = require('../utils/generateOtpEmailContent');
const moment = require('moment');
const axios = require('axios');
const https = require('https');
const xml2js = require('xml2js');

class OTPService {
    static async sendMail(email, userID) {
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const otpSent = moment().unix();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: process.env.EMAIL_SUBJECT,
            html: generateOtpEmailContent(otpCode),
            attachments: [{
                filename: 'gelkurye.png',
                path: 'https://gelkurye.com/assets/img/mainlogo.png',
                cid: 'GelKurye'
            }]
        };

        await transporter.sendMail(mailOptions);
        await OTPLog.create({ userID, otpType: 'mail', otpCode, otpSent });

        return { otpSent };
    }

    static async sendSMS(phoneNumber, userID) {
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const otpSent = moment().unix();

        const xmlBody = `
            <?xml version="1.0"?>
            <mainbody>
                <header>
                    <usercode>${process.env.NETGSM_USERCODE}</usercode>
                    <password>${process.env.NETGSM_PASSWORD}</password>
                    <msgheader>${process.env.NETGSM_MSGHEADER}</msgheader>
                    <appkey>${process.env.NETGSM_APPKEY}</appkey>
                </header>
                <body>
                    <msg><![CDATA[${otpCode}]]></msg>
                    <no>${phoneNumber}</no>
                </body>
            </mainbody>
        `;

        const agent = new https.Agent({
            rejectUnauthorized: false
        });

        const response = await axios.post('https://api.netgsm.com.tr/sms/send/otp', xmlBody, {
            headers: {
                'Content-Type': 'application/xml'
            },
            httpsAgent: agent
        });

        const result = await xml2js.parseStringPromise(response.data);
        if (result.mainbody && result.mainbody.header[0].status[0] !== '00') {
            throw new CustomError('Error sending SMS', 500);
        }

        await OTPLog.create({ userID, otpType: 'sms', otpCode, otpSent });

        return { otpSent };
    }

    static async verifyOTP(phoneNumber, otpCode, otpSent, userID) {
        const otpEntry = await OTPLog.findOne({ where: { userID, otpSent } });
        if (!otpEntry) throw new CustomError('Invalid OTP or OTP has expired.', 404);

        if (otpEntry.otpCode !== otpCode) throw new CustomError('Invalid OTP code.', 400);

        otpEntry.otpValidate = moment().unix();
        await otpEntry.save();

        return { message: 'OTP verified successfully' };
    }
}

module.exports = OTPService;
