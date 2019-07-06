require('./config/config');
const express = require('express')

const mongoose = require('mongoose');

const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const port = process.env.PORT

// configuracion global de rutas.
app.use(require('./routes/index'));



  mongoose.connect('mongodb://localhost:27017/cafe',(err,res)=>{
    if(err) throw err;

    console.log('Base de datos Online');
  });


app.listen(port, 

 () => console.log(`Example app listening on port port!`))