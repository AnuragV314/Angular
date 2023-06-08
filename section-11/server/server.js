const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200/");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express.js</h1>');
})

app.post('/enquiry', (req, res) => {
    console.log(req.body);
    res.status(200);
    res.send({"message":"Data Recived"});
})

app.listen(PORT, () => {
    console.log(`Server Listening on PORT number ${PORT}`);
})

