const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const registerController = require('../controllers/auth/registerController');
const loginController = require('../controllers/auth/loginController');
const logoutController = require('../controllers/auth/logoutController');
const resetPasswordController = require('../controllers/reset/resetPasswordController');
const sendOtpController = require('../controllers/reset/sendOtpController');
const getProfileInfoController = require('../controllers/user/getProfileInfoController');
const updateProfileController = require('../controllers/user/updateProfileController');

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/logout', authMiddleware(), logoutController.logout);
router.post('/resetPass', resetPasswordController.resetPassword);
router.post('/sendOTP', sendOtpController.sendOtp);
router.get('/getProfileInfo/:userName', authMiddleware(), getProfileInfoController.getProfileInfo);
router.put('/updateProfile/:userName', authMiddleware(), updateProfileController.updateProfile);

module.exports = router;
