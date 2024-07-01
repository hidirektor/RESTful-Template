const express = require('express');
const router = express.Router();

const trendyolTakeOrder = require('../controllers/order/trendyol/takeOrder');
const trendyolDeliverOrder = require('../controllers/order/trendyol/deliverOrder');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/trendyol/takeOrder', authMiddleware, trendyolTakeOrder);
router.post('/trendyol/deliverOrder', authMiddleware, trendyolDeliverOrder);

module.exports = router;
