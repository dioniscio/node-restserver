const jwt = require('jsonwebtoken');
///===============================
// verificar token

//===============================

let verificarToken=(req, res,next)=>{

let token = req.get('token'); // esto es para obtener el token

jwt.verify(token,process.env.SEED,(err,decoded)=>{

if(err){
    return res.status(401).json({
        ok:false,
        err:err
    })
}

req.usuario = decoded.usuario;

next();
});

/*
res.json({

    token:token

});
*/

};



module.exports={
    verificarToken
}