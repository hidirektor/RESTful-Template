const express = require('express');
const router = express.Router();
const updateLocation = require('../controllers/location/updateLocation');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/updateLocation', authMiddleware, roleMiddleware(['Carrier']), updateLocation);

module.exports = router;
