const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ActionLog = sequelize.define('ActionLog', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: true },
    logType: { type: DataTypes.STRING, allowNull: false },
    plateNumber: { type: DataTypes.STRING, allowNull: true },
    logTime: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: () => Math.floor(Date.now() / 1000)
    }
}, {
    timestamps: false,
    tableName: 'ActionLog',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = ActionLog;