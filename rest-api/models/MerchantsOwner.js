const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MerchantsOwner = sequelize.define('MerchantsOwner', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userName: { type: DataTypes.STRING, unique: true },
    phoneNumber: { type: DataTypes.STRING },
    eMail: { type: DataTypes.STRING, unique: true }
}, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = MerchantsOwner;