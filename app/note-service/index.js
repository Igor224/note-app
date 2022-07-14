require('dotenv').config();
const express = require('express');
const sequelize = require('./db/db');
const cookieParser = require('cookie-parser');
const tasks = require('./router/tasks');
const notFound = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const {getLog} = require('../../packages/logger');

const log = getLog('services:note');

const PORT = process.env.PORT_NOTE || 5001;

app.use(express.static('./public'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorMiddleware);

const app = express();

const start = async () => {
  await sequelize.authenticate()
  .then(() => log.info(`Successfully connected to database '${sequelize.getDatabaseName()}`))
  .catch( e =>         
      log.error({
          e,
          db: sequelize.getDatabaseName()
      }, 'ERROR - Unable to connect to the database')
  );
  await sequelize.sync(); 

  app.listen(PORT, () => log.info(`Server started on PORT = ${PORT}`)); // обработать возможные ошибки
}

start()
