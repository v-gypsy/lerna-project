
const express = require('express');
const bodyParser = require('body-parser');

const rabbitmq = require('amqplib');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const producer = require("./producer");

app.get('/', async (req, res, next) =>{
    try {
        let obj = {
            name: "vamsi",
            age: 24
        }

        let exchange = "sample-queue-exchange";
        let routingKey = "sample";

        producer(exchange, routingKey, obj);
    
        res.send({"status": 1, "msg": "Sample route called..."});

    } catch(error){
        res.send({"status": 0, "msg": "error..."});
    }
})

const port = 3000;
app.listen(port, (error) => {
    if(error){
        console.log(error)
        return;
    }
    console.log(`Server listening on port ${port}`)
});