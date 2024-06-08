const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: false },
    userName: { type: DataTypes.STRING, unique: true, allowNull: false },
    eMail: { type: DataTypes.STRING, unique: true, allowNull: false },
    userType: { type: DataTypes.STRING, allowNull: false },
    NameSurname: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    profilePhoto: { type: DataTypes.TEXT, allowNull: false },
    relativeNameSurname: { type: DataTypes.STRING, allowNull: false },
    relativePhoneNumber: { type: DataTypes.STRING, allowNull: false },
    registeredMerchant: { type: DataTypes.STRING, allowNull: true },
    lastPasswordChange: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.BIGINT,
        defaultValue: () => Math.floor(Date.now() / 1000)
    }
}, {
    timestamps: false,
    tableName: 'Users',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = User;