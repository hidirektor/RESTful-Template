const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VerificationBike = sequelize.define('VerificationBike', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userName: { type: DataTypes.STRING },
    plateNumber: { type: DataTypes.STRING },
    plateChangeDate: { type: DataTypes.DATE }
}, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = VerificationBike;