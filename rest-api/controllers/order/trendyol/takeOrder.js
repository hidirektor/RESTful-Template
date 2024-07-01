const OrderService = require('../../../services/orderService');
const { handleError } = require('../../../utils/errorUtil');

module.exports = async (req, res) => {
    const { packageID, userID } = req.body;

    try {
        const result = await OrderService.takeOrder({ packageID, userID });
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
