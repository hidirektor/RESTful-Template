const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the order
 *         merchantID:
 *           type: string
 *           description: The ID of the merchant
 *         marketplaceName:
 *           type: string
 *           description: The name of the marketplace
 *         marketplaceOrderID:
 *           type: string
 *           description: The ID of the marketplace order
 *         isPaid:
 *           type: boolean
 *           description: Whether the order is paid
 *         orderStatus:
 *           type: string
 *           description: The status of the order
 *         totalPrice:
 *           type: integer
 *           description: The total price of the order
 *         customerNameSurname:
 *           type: string
 *           description: The name and surname of the customer
 *         customerPhoneNumber:
 *           type: string
 *           description: The phone number of the customer
 *         customerAddress:
 *           type: string
 *           description: The address of the customer
 *         customerLatitude:
 *           type: number
 *           format: double
 *           description: The latitude of the customer
 *         customerLongitude:
 *           type: number
 *           format: double
 *           description: The longitude of the customer
 *         courierReceived:
 *           type: boolean
 *           description: Whether the courier received the order
 *         courierID:
 *           type: string
 *           description: The ID of the courier
 *         courierReceivedTime:
 *           type: integer
 *           description: The time the courier received the order
 *         otpType:
 *           type: string
 *           description: The type of OTP
 *         otpCode:
 *           type: string
 *           description: The OTP code
 *         otpSentTime:
 *           type: integer
 *           description: The time the OTP was sent
 *         deliveryTime:
 *           type: integer
 *           description: The time the delivery was completed
 */

const Order = sequelize.define('Orders', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    merchantID: { type: DataTypes.STRING, unique: true, allowNull: false },
    marketplaceName: { type: DataTypes.STRING, allowNull: false },
    marketplaceOrderID: { type: DataTypes.STRING, allowNull: false },
    isPaid: { type: DataTypes.BOOLEAN, allowNull: false },
    orderStatus: { type: DataTypes.STRING, allowNull: false },
    totalPrice: { type: DataTypes.INTEGER, allowNull: false },
    customerNameSurname: { type: DataTypes.STRING, allowNull: false },
    customerPhoneNumber: { type: DataTypes.STRING, allowNull: false },
    customerAddress: { type: DataTypes.STRING, allowNull: false },
    customerLatitude: { type: DataTypes.DOUBLE, allowNull: false },
    customerLongitude: { type: DataTypes.DOUBLE, allowNull: false },
    courierReceived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    courierID: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    courierReceivedTime: {
        type: DataTypes.BIGINT,
        defaultValue: null
    },
    otpType: { type: DataTypes.STRING, allowNull: false },
    otpCode: { type: DataTypes.STRING, allowNull: true },
    otpSentTime: {
        type: DataTypes.BIGINT,
        defaultValue: null
    },
    deliveryTime: {
        type: DataTypes.BIGINT,
        defaultValue: null
    }
}, {
    timestamps: false,
    tableName: 'Orders',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = Order;
