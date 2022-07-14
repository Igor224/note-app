const sequelize = require('../db/db');
const DataTypes = require('sequelize');

const Task = sequelize.define('Task', {
  id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  completed: {type: DataTypes.BOOLEAN, defaultValue: false},
  user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: User, 
          key: 'id'
      }
  },
}, { timestamps: false });

module.exports = Task;
//напсать импорты для NoteDb.Task UserDb.User и сделать все записи транзакциями