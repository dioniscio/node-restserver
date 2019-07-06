const express = require('express');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const Usuario = require('../model/usuario');
const app = express();



app.use(bodyParser.json())

app.post('/login',(req,res)=>{

    let body = req.body;

    /*
    Usuario.findOne({email:body.email},(err,usuarioDB)=>{

        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }

        res.json({
            ok:true,
            usuarioDB
        })

    })

    */
    
    let toke= jwt.sign({
        usuario: body.email
    }, process.env.SEED,{ expiresIn: process.env.CADUCIDAD_TOKEN})



   res.json({
    ok:true,
    email:body.email,
    password : body.password,
    toke
})
  
});










module.exports=app;
