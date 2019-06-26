require('./config/config');
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const port = process.env.PORT

app.get('/', (req, res) => 


res.json('Hello World!')

);


app.get('/usuario', (req, res) => {
  res.json('GET request to the usuarios');
})


app.post('/usuario/:id', (req, res) => {
  let id = req.params.id;

    res.json({
      id
    });
  })

  
app.post('/usuario', (req, res) => {
  let body = req.body;

if(body.nombre === undefined){
  res.status(400).json({
    ok:false,
    mensaje: 'El nombre es necesario'
  });
}else{

    res.json({
      body
    });
  }



  })





  app.put('/usuario', (req, res) => {
    res.json('put usuarios');
  })


  app.delete('/usuario', (req, res) => {
    res.json('delete usuarios');
  })

app.listen(port, 

 () => console.log(`Example app listening on port port!`))