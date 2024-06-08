const express = require('express');
const router = express.Router();
const refreshToken = require('../controllers/providers/token/refreshToken');

router.post('/refreshToken', refreshToken);

module.exports = router;