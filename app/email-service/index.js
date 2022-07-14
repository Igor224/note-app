const mailProducer = require('./rabbitMQ-producer');
const mailConsumer = require('./rabbitMQ-consumer');

module.exports = {
    mailProducer,
    mailConsumer
}