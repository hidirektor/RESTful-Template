const OrderService = require('../../../services/orderService');
const { handleError } = require('../../../utils/errorUtil');

/**
 * @swagger
 * /order/trendyol/deliverOrder:
 *   post:
 *     summary: Deliver Trendyol order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               packageID:
 *                 type: string
 *               userID:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order delivered successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { packageID, userID } = req.body;

    try {
        const result = await OrderService.deliverOrder({ packageID, userID });
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
