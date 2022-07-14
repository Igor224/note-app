const pino = require('pino');

// const config = require('config');
// const loggerOptions = config.get('logger.options');

const loggerOptions = {
    name: 'user-service',
    prettyPrint: false,
    level: 'info',
    timestamp: pino.stdTimeFunctions.isoTime
}

const getLog = (name) => pino({ ...loggerOptions,  name});

module.exports = {
    getLog
}
