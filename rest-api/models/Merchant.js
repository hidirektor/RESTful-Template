const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     Merchant:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the merchant
 *         userID:
 *           type: string
 *           description: The ID of the user
 *         merchantID:
 *           type: string
 *           description: The ID of the merchant
 *         merchantName:
 *           type: string
 *           description: The name of the merchant
 *         merchantAddress:
 *           type: string
 *           description: The address of the merchant
 *         contactNumber:
 *           type: string
 *           description: The contact number of the merchant
 */

const Merchant = sequelize.define('Merchants', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: false },
    merchantID: { type: DataTypes.STRING, unique: true, allowNull: false },
    merchantName: { type: DataTypes.STRING, allowNull: true },
    merchantAddress: { type: DataTypes.STRING, allowNull: true },
    contactNumber: { type: DataTypes.STRING, allowNull: true }
}, {
    timestamps: false,
    tableName: 'Merchants',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = Merchant;
