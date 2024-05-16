const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Merchants = sequelize.define('Merchants', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    merchantName: { type: DataTypes.STRING },
    ownerUserName: { type: DataTypes.STRING, unique: true },
    contactNumber: { type: DataTypes.STRING }
}, {
    timestamps: false,
    tableName: 'Merchants',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = Merchants;