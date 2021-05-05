
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) =>{
    res.send({"status": 1, "msg": "Sample route called..."});
})

const port  = 7000;
app.listen(port, (error)=>{
    if(error) console.log(error)
    console.log(`server started at port ${port}`);
})