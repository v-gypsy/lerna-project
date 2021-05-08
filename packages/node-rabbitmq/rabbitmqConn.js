
const rabbitmq = require('amqplib');
const connectionurl = "amqp://kproduction:kiviroot@localhost:5672";


async function createConnectAndChannel() {
    try {
        let connection = await rabbitmq.connect(connectionurl);
        let channel = await connection.createChannel();
        return channel;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = createConnectAndChannel;