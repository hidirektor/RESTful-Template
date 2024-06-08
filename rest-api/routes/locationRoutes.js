const express = require('express');
const router = express.Router();
const controllerFactory = require('../controllers/controllerFactory');

const updateLocationController = controllerFactory.creating('location/updateLocation');

const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/updateLocation', authMiddleware, roleMiddleware(['Carrier']), (req, res) => updateLocationController.create({ req, res }));

module.exports = router;