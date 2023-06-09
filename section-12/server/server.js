const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app=express();
const port = 3000;

app.use(cors());

app.get('/', (req, res)=>{
    res.send('<h1>Welcome to Express Server</h1>')
})


app.post("/enquiry", (req, res)=>{
    console.log(req.body);
    res.status(200);
    res.send({"message":"Data Receieved"})
})


app.listen(port, ()=>{
    console.log(`server listening on port number ${port}`);
})

