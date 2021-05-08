
const express = require('express');
const bodyParser = require('body-parser');

const rabbitmq = require('amqplib');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const producer = require("./producer");

app.get('/producemsg', async (req, res, next) =>{
    try {
        let obj = {
            name: "vamsi",
            age: 24
        }

        let exchange = "sample-queue-exchange";
        let routingKey = "sample";

        setInterval(function(){
            producer(exchange, routingKey, obj);
        }, 500);
    
        res.send({"status": 1, "msg": "msg sent to queue..."});

    } catch(error){
        console.log(error);
        res.send({"status": 0, "msg": "error..."});
    }
});

const port = 8000;
app.listen(port, (error) => {
    if(error){
        console.log(error)
        return;
    }
    console.log(`Server listening on port ${port}`)
});