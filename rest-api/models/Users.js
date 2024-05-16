const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, index: true },
    NameSurname: { type: DataTypes.STRING },
    userName: { type: DataTypes.STRING, unique: true, allowNull: false },
    phoneNumber: { type: DataTypes.STRING },
    eMail: { type: DataTypes.STRING, unique: true },
    userType: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    profilePhoto: { type: DataTypes.STRING },
    relativeNameSurname: { type: DataTypes.STRING },
    relativePhoneNumber: { type: DataTypes.STRING },
    registeredMerchant: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    timestamps: false,
    tableName: 'Users',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = Users;