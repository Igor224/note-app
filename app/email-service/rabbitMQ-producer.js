const amqp = require('amqplib').connect(process.env.RABBITMQ);

const queue = process.env.RABBITMQ_QUEUE;

const publishMessage = async (payload) => amqp.then((connection) => connection.createChannel())
  .then((channel) => channel.assertQueue(queue)
    .then(() => channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)))))
  .catch((error) => console.warn(error));

module.exports = publishMessage;