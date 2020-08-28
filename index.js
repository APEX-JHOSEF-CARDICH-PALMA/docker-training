//Instalaremos express que es un framework que tiene utilidades para crear servidores..

const express = require('express');

const colors = require('colors');

//Creamos el servidor
const server = express();

//configuramos las rutas -->  '/'
server.get('/',function(req,res){
res.send('<h1>Hola mundo con Express y Node.js</h1>');
res.end();
});

//configuración del servidor
server.listen(3000,function(){
    console.log('Servidor con express corriendo en el puerto 3000'.red);
})