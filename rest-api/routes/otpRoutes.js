const express = require('express');
const router = express.Router();
const controllerFactory = require('../controllers/controllerFactory');

const sendMailOTPController = controllerFactory.creating('otp/sendMail');
const sendSMSOTPController = controllerFactory.creating('otp/sendSMS');
const verifyOTPController = controllerFactory.creating('otp/verifyOTP');

const userFetch = require('../utils/userUtil');

router.post('/sendMail', userFetch, (req, res) => sendMailOTPController.create({ req, res }));
router.post('/sendSMS', userFetch, (req, res) => sendSMSOTPController.create({ req, res }));
router.post('/verifyOTP', userFetch, (req, res) => verifyOTPController.create({ req, res }));

module.exports = router;