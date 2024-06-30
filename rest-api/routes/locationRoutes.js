const express = require('express');
const router = express.Router();
const updateLocationController = require('../controllers/user/location/updateLocationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/updateLocation', authMiddleware(['Carrier']), updateLocationController.updateLocation);

module.exports = router;
