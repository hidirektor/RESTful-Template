const GenericReqRes = require('../../../genericReqRes');
const GenericCRUD = require('../../../genericCrud');
const Order = require('../../../../models/Order');
const OrderService = require('../../../services/orderService');

class DeliverOrderController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: Order });
        super(crud);
    }

    async update(req, res) {
        try {
            const result = await OrderService.deliverOrder(req.body);
            res.status(HttpStatusCode.OK).json({ 'status': true, 'result': result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

module.exports = DeliverOrderController;