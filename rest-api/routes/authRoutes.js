const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const resetPasswordController = require('../controllers/resetPasswordController');
const sendOtpController = require('../controllers/sendOtpController');
const getProfileInfoController = require('../controllers/getProfileInfoController');
const updateProfileController = require('../controllers/updateProfileController');

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/logout', authMiddleware(), logoutController.logout);
router.post('/resetPass', resetPasswordController.resetPassword);
router.post('/sendOTP', sendOtpController.sendOtp);
router.get('/getProfileInfo/:userName', authMiddleware(), getProfileInfoController.getProfileInfo);
router.put('/updateProfile/:userName', authMiddleware(), updateProfileController.updateProfile);

module.exports = router;
