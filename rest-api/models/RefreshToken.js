const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RefreshToken = sequelize.define('RefreshToken', {
    token: { type: DataTypes.STRING, primaryKey: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: false }
}, {
    timestamps: false,
    tableName: 'RefreshTokens',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = RefreshToken;