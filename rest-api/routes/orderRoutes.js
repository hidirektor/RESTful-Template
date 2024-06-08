const express = require('express');
const router = express.Router();
const controllerFactory = require('../controllers/controllerFactory');

const trendyolTakeOrderController = controllerFactory.creating('order/trendyol/takeOrder');
const trendyolDeliverOrderController = controllerFactory.creating('order/trendyol/deliverOrder');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/trendyol/takeOrder', authMiddleware, (req, res) => trendyolTakeOrderController.update(req, res));
router.post('/trendyol/deliverOrder', authMiddleware, (req, res) => trendyolDeliverOrderController.update(req, res));

module.exports = router;