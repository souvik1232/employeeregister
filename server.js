const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./app/config/config')
const mongoose = require('mongoose');
const route = require('./app/routers/routers');
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use('/api',route);

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome"});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
mongoose.connect(dbConfig.url,{
    useNewUrlParser :true
}).then(()=>{
    console.log("Database connected successfully");
}).catch(err =>{
    console.log("Error",err);
    process.exit();
});