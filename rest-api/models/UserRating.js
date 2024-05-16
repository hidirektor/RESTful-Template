const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserRating = sequelize.define('UserRating', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userName: { type: DataTypes.STRING, unique: true },
    userRating: { type: DataTypes.DOUBLE }
}, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = UserRating;