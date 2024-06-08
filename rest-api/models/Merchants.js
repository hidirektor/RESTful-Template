const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Merchants = sequelize.define('Merchants', {
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

module.exports = Merchants;