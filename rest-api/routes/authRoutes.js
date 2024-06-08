const express = require('express');
const router = express.Router();
const controllerFactory = require('../controllers/controllerFactory');

const registerController = controllerFactory.creating('auth/register');
const loginController = controllerFactory.creating('auth/login');
const logoutController = controllerFactory.creating('auth/logout');
const changePassController = controllerFactory.creating('auth/changePass');
const resetPassController = controllerFactory.creating('auth/resetPass');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', (req, res) => registerController.create({ req, res }));
router.post('/login', (req, res) => loginController.create({ req, res }));
router.post('/logout', (req, res) => logoutController.create({ req, res }));
router.post('/changePass', authMiddleware, (req, res) => changePassController.update(req, res));
router.post('/resetPass', (req, res) => resetPassController.create({ req, res }));

module.exports = router;