const express = require('express');
const router = express.Router();
const updateMerchantAPI = require('../controllers/merchant/updateMerchantAPI');
const getMerchantAPI = require('../controllers/merchant/getMerchantAPI');
const authMiddleware = require("../middlewares/authMiddleware");

router.post('/updateMerchantAPI', authMiddleware, updateMerchantAPI);
router.post('/getMerchantAPI', authMiddleware, getMerchantAPI);

module.exports = router;
