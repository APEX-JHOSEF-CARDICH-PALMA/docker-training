//Instalaremos express que es un framework que tiene utilidades para crear servidores..

const express = require('express');

const colors = require('colors');

//Creamos el servidor
const app = express();

//configuramos las rutas -->  '/'
app.get('/',function(req,res){
res.send('<h1>Hello World!! this is My Express API in a Docker Container. BTW, Said is HOT !</h1>');
res.end();
});

//configuración del servidor
app.listen(3000,function(){
    console.log('Servidor con express corriendo en el puerto 3000'.red);
})