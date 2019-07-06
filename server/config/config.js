
//puerto
process.env.PORT =process.env.PORT || 3000;

//Venciento del token

//60 SEGUNDOS
//60 MITUNOS
//24 HORAS
// 30 DIAS

process.env.CADUCIDAD_TOKEN = 60 * 60 *24* 30;


//SEED DE AUTENTICACION

process.env.SEED = 'esto-es-prueba';