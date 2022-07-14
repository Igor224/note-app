const sequelize = require('../db/db');
const DataTypes = require('sequelize');
const User = require('./user-model')

const Token = sequelize.define('Token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, allowNull: false},
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
}, { timestamps: false });

User.hasOne(Token, {foreignKey: 'user_id'});
Token.belongsTo(User, {foreignKey: 'user_id'});

module.exports = Token;