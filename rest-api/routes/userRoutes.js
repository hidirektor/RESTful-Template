const express = require('express');
const router = express.Router();
const controllerFactory = require('../controllers/controllerFactory');

const getProfileController = controllerFactory.creating('user/getProfile');
const updateProfileController = controllerFactory.creating('user/updateProfile');
const getPreferencesController = controllerFactory.creating('user/getPreferences');
const updatePreferencesController = controllerFactory.creating('user/updatePreferences');
const getRatingController = controllerFactory.creating('user/getRating');
const updateRatingController = controllerFactory.creating('user/updateRating');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/getProfile', authMiddleware, (req, res) => getProfileController.findOne({ req, res }));
router.post('/updateProfile', authMiddleware, (req, res) => updateProfileController.update(req, res));
router.post('/getPreferences', authMiddleware, (req, res) => getPreferencesController.findOne({ req, res }));
router.post('/updatePreferences', authMiddleware, (req, res) => updatePreferencesController.update(req, res));
router.post('/getRating', authMiddleware, (req, res) => getRatingController.findOne({ req, res }));
router.post('/updateRating', authMiddleware, (req, res) => updateRatingController.update(req, res));

module.exports = router;