const mongoose = require('mongoose')    
const express = require('express')
const bodyParser = require('body-parser')
const notesRoutes = require('./routes/notesRoutes');
const errorHandler = require('./middleware/errorHandler');

mongoose.connect('mongodb+srv://SmartSachN:Sachin%40006@smart.axxs18y.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const db= mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error:'));
db.once('open',()=>{
    console.log(`connecte to mongodb on : SmartSachN mongodb server`);
})

const app = express();
const PORT  = 3000;

app.use(bodyParser.json());

app.use('/notes', notesRoutes);

app.use(errorHandler.handleErrors);


app.listen(PORT,()=>{
    console.log(`running on port : ${PORT}`);
})
