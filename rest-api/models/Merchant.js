const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Merchant = sequelize.define('Merchant', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    merchantName: { type: DataTypes.STRING },
    ownerUserName: { type: DataTypes.STRING, unique: true },
    contactNumber: { type: DataTypes.STRING }
}, { timestamps: false });

module.exports = Merchant;
