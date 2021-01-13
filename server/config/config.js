//Puerto
//Puerto
process.env.PORT = process.env.PORT || 3000;


//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//Base de datos

let urlDB;

//if (process.env.NODE_ENV === 'dev') {
//    urlDB = 'mongodb://localhost:27017/cafe';
//}else{
    urlDB = 'mongodb+srv://silvio:cmuId7N7AXNIPuJ3@cluster0.ez5xt.mongodb.net/cafe';
//}
process.env.urlDB = urlDB;


