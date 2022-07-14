const amqp = require('amqplib').connect(process.env.RABBITMQ);
const mailService = require('./email-sender');

const queue = process.env.RABBITMQ_QUEUE;
console.log('QUEE: ', queue);

const consumeMessage = async () => {
  amqp.then((connection) => connection.createChannel()).then((channel) => channel.assertQueue(queue).then(() => {
    return channel.consume(queue, (msg) => {
      if (msg !== null) {
        const { email, activationLink } = JSON.parse(msg.content.toString());
        console.log(`EMAIL: ${email} ACTIVATIONli: ${activationLink}`);
        mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
        .then(() => { channel.ack(msg); });
      }
    });
  })).catch((error) => console.warn(error));
};

module.exports = consumeMessage;