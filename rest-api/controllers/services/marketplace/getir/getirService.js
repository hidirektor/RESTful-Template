const axios = require('axios');
const Users = require('../../../../models/User');
const Merchants = require('../../../../models/Merchants');
const MerchantsAPI = require('../../../../models/MerchantsAPI');
const Orders = require('../../../../models/Order');
const CustomError = require('../../../../utils/customError');

class GetirService {
    static async getirOrders() {
        try {
            const merchants = await Users.findAll({ where: { userType: 'MERCHANT' } });

            for (const merchant of merchants) {
                const merchantDetails = await Merchants.findOne({ where: { userID: merchant.userID } });
                if (!merchantDetails) continue;

                const merchantAPI = await MerchantsAPI.findOne({ where: { merchantID: merchantDetails.merchantID } });
                if (!merchantAPI) continue;

                const getirResponse = await axios.get('https://api.getir.com/v2/orders', {
                    headers: {
                        'Authorization': `Bearer ${merchantAPI.getirYemekMerchantToken}`
                    }
                });

                const orders = getirResponse.data.orders;

                for (const order of orders) {
                    if (order.status !== 'preparing') continue;

                    await Orders.create({
                        merchantID: merchantDetails.merchantID,
                        marketplaceName: 'Getir',
                        marketplaceOrderID: order.id,
                        isPaid: order.isPaid,
                        orderStatus: order.status,
                        customerNameSurname: order.customer.fullName,
                        customerPhoneNumber: order.customer.phone,
                        customerAddress: order.deliveryAddress.address,
                        otpType: 'sms',
                        otpCode: order.otpCode,
                        otpTime: Math.floor(Date.now() / 1000),
                        courierReceived: false
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching and saving Getir orders:', error);
        }
    }
}

module.exports = GetirService;