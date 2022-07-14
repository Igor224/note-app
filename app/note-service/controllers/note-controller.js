const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/api-errors');

//сделать одной функцией, + транзакции
const getAllTasks = asyncWrapper(async (req, res) => {
const tasks = await Task.findAll({ /* foreginKey userId*/})
  res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(/* */)
  res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findByPk(taskID)
  if (!task) {
    return next(error)//обработать!
  }

  res.status(200).json({ task })
})
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findByPk(taskID)
  .then(() => Task.destroy({ where: {id: taskID}}))
  if (!task) {
    return next(error)//обработать!
  }
  res.status(200).json({ task })
})
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params

const task = await Task.Update({/*вытащить*/},{where: {id: taskID}})

  if (!task) {
    return next(error)//обработать!
  }

  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
