const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Users = require('./Users');

const UserPreferences = sequelize.define('UserPreferences', {
    id: { type: DataTypes.INTEGER, primaryKey: true, index: true },
    userName: { type: DataTypes.STRING, unique: true, allowNull: false },
    nightMode: { type: DataTypes.BOOLEAN },
    selectedLanguage: { type: DataTypes.BOOLEAN },
    firstBreakTime: { type: DataTypes.DATE },
    secondBreakTime: { type: DataTypes.DATE }
}, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = UserPreferences;