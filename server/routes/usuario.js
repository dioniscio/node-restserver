const express = require('express');
const bcrypt = require('bcrypt');
const _ =  require('underscore');
const Usuario = require('../model/usuario');
const {verificarToken}=require('../middlewares/autenticacion')
const app = express();



app.get('/', (req, res) => 


res.json('Hello World!')

);


app.get('/usuarios', (req, res) => {
  
  Usuario.find({ estado: false }, 'nombre email role estado google img')
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Usuario.count({ estado: true }, (err, conteo) => {

                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                });

            });


        });

          

          
});



  
app.post('/usuario', (req, res) => {
  let body = req.body;
   
  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password,10),
    role: body.role
  });


usuario.save((err,usuarioDB)=>{

    if(err){
        return res.status(400).json({
            ok: false,
            err
        });
    
    }


    res.json({
        ok:true,
        usuario:usuarioDB
    })
})


  });


  
  app.put('/usuario/:id',(req, res)=>{

    let id = req.params.id;
    let body = _.pick(req.body,['nombre','email','img','role','estado']);
     
    res.json(id);

    Usuario.findByIdAndUpdate(id,body,(err,usuarioDB)=>{


    })


    })







  app.delete('/usuario', (req, res) => {
    res.json('delete usuarios');
  })



  app.get('/token', verificarToken,(req, res) => {
  
    return res.json({
      usuario : req.usuario
    })


   res.json({
     hola:'hola como estan'
   });
  
            
  });













  module.exports=app;