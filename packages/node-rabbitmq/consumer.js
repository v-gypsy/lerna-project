
const rabbitmqConn = require("./rabbitmqConn");

function consumemessages(ch, queue) {
    return new Promise(async (resolve, reject)=>{
        ch.prefetch(1);
        ch.consume(queue, async(msg)=>{
            let msgBody = msg.content.toString();
            let data = JSON.parse(msgBody);
            console.log(data);
            setTimeout(function() {
                resolve(data);
                ch.ack(msg);
            }, 3000)
        });
    });  
}

(async function(){
    let ch = await rabbitmqConn();
    consumemessages(ch, "sample-queue");
})();