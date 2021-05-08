
const rabbitmq = require("amqplib");
const connectionurl = "amqp://kproduction:kiviroot@localhost:5672";

async function setup(){
    try {
        console.log("setting up rabbitm queues.....")
        let connection = await rabbitmq.connect(connectionurl);
        let channel = await connection.createChannel()

        // creating exchange for queue, as rabbitmq publish msgs to queue via exchanges.
        await channel.assertExchange("sample-queue-exchange", "direct", {durable: true});
        await channel.assertExchange("sample-queue-2-exchange", "direct", {durable: true});

        // creating queues.
        await channel.assertQueue("sample-queue", {durable: true});
        await channel.assertQueue("sample-queue-2", {durable: true});

        // binding queues with exchanges so that exchange has idea to which queue msg should be published.
        await channel.bindQueue("sample-queue", "sample-queue-exchange", "sample");
        await channel.bindQueue("sample-queue-2", "sample-queue-2-exchange", "sample-2");

        console.log("setup complete...")
    } catch(error) {
        throw new Error(error);
    }
}

setup();