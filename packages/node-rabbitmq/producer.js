
const rabbitmqconn = require("./rabbitmqConn");


async function producemessagetoqueue(exchange, routingKey, data) {
    try {
        let ch = await rabbitmqconn();
        ch.publish(exchange, routingKey, Buffer.from(JSON.stringify(data)));
        return;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = producemessagetoqueue;