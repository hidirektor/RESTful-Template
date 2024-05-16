const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    NameSurname: { type: DataTypes.STRING },
    userName: { type: DataTypes.STRING, unique: true },
    phoneNumber: { type: DataTypes.STRING },
    eMail: { type: DataTypes.STRING, unique: true },
    userType: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    profilePhoto: { type: DataTypes.STRING },
    relativeNameSurname: { type: DataTypes.STRING },
    relativePhoneNumber: { type: DataTypes.STRING },
    registeredMerchant: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: false });

module.exports = User;