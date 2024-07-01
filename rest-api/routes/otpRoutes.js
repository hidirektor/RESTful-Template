const express = require('express');
const router = express.Router();

const sendMailOTP = require('../controllers/otp/sendMail');
const sendSMSOTP = require('../controllers/otp/sendSMS');
const verifyOTP = require('../controllers/otp/verifyOTP');
const userFetch = require('../middlewares/userFetch');

router.post('/sendMail', userFetch, sendMailOTP);
router.post('/sendSMS', userFetch, sendSMSOTP);
router.post('/verifyOTP', userFetch, verifyOTP);

module.exports = router;
