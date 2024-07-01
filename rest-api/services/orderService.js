const axios = require('axios');
const Orders = require('../models/Order');
const MerchantsAPI = require('../models/MerchantsAPI');
const moment = require('moment');
const CustomError = require('../utils/customError');

class OrderService {
    static async takeOrder(orderData) {
        const order = await Orders.findOne({ where: { marketplaceOrderID: orderData.packageID } });
        if (!order) throw new CustomError('Order not found', 404);

        order.orderStatus = 'Shipped';
        order.courierReceived = true;
        order.courierID = orderData.userID;
        order.courierReceivedTime = moment().unix();
        await order.save();

        const merchantAPI = await MerchantsAPI.findOne({ where: { merchantID: order.merchantID } });
        if (!merchantAPI) throw new CustomError('Merchant API details not found', 404);

        const supplierID = merchantAPI.trendyolSupplierID;

        const trendyolResponse = await axios.put(`https://stageapi.trendyol.com/mealgw/suppliers/${supplierID}/packages/${orderData.packageID}/manual-shipped`, {
            actualDate: moment().valueOf()
        }, {
            headers: {
                'x-agentname': process.env.TRENDYOL_AGENT_NAME,
                'x-executor-user': process.env.TRENDYOL_EXECUTOR_USER
            }
        });

        if (trendyolResponse.status !== 200) {
            throw new CustomError('Failed to notify Trendyol', trendyolResponse.status);
        }

        return { message: 'Order status updated and notified successfully' };
    }

    static async deliverOrder(orderData) {
        const order = await Orders.findOne({ where: { marketplaceOrderID: orderData.packageID } });
        if (!order) throw new CustomError('Order not found', 404);

        order.orderStatus = 'Delivered';
        order.deliveryTime = moment().unix();
        order.courierID = orderData.userID;
        await order.save();

        const merchantAPI = await MerchantsAPI.findOne({ where: { merchantID: order.merchantID } });
        if (!merchantAPI) throw new CustomError('Merchant API details not found', 404);

        const supplierID = merchantAPI.trendyolSupplierID;

        const trendyolResponse = await axios.put(`https://stageapi.trendyol.com/mealgw/suppliers/${supplierID}/packages/${orderData.packageID}/manual-delivered`, {
            actualDate: moment().valueOf()
        }, {
            headers: {
                'x-agentname': process.env.TRENDYOL_AGENT_NAME,
                'x-executor-user': process.env.TRENDYOL_EXECUTOR_USER,
                'Authorization': 'Basic ' + Buffer.from(merchantAPI.trendyolAPIKey + ':' + merchantAPI.trendyolAPISecretKey).toString('base64')
            }
        });

        if (trendyolResponse.status !== 200) {
            throw new CustomError('Failed to notify Trendyol', trendyolResponse.status);
        }

        return { message: 'Order delivered and notified successfully' };
    }
}

module.exports = OrderService;
