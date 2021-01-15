//Puerto
//Puerto
process.env.PORT = process.env.PORT || 3000;


//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vecimiento del token
process.env.CADUCIDAD_TOKEN = 60*60*24*30;

//Seed de autenticacion
process.env.SEED = process.env.SEED||'este-es-el-seed-de-desarrollo';

//Base de datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb+srv://silvio:cmuId7N7AXNIPuJ3@cluster0.ez5xt.mongodb.net/cafe';
}
process.env.urlDB = urlDB;

// google client ID

process.env.CLIENT_ID = process.env.CLIENT_ID || '659895821731-3prdru2vocs2ogvemt3iv1u7bgog4kus.apps.googleusercontent.com';


