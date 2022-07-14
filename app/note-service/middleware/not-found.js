const notFound = (req, res) => res.status(404).send('Route does not exist')
// поместить в модуль ошибки
module.exports = notFound
