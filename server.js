const express = require('express');
//se declara una variable
const app = express();
const hbs = require('hbs');
require('./hbs/helper');

//Se puede colocar una carpeta public y dejar contenido estatico,
//sin embargo esto deshabilitara lo que esta abajo de "app.get...",
//dado que siempre estaria llendo por la carpeta publica.
app.use(express.static(__dirname + '/public'));
//rutas:
//https://localhost:3000 (mostrara el index html)
//https://localhost:3000/home.html (mostrara el home html)

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



//Este codigo es otra forma de mostrar contenido no estatico:
//se hace get cuando el path sea / (todas las peticiones pasaran por aca)
//Al incluir HBS ya podemos comenzar a usar rutas de la siguiente forma:
app.get('/', (req, res) => {
    //res.send('Hola Mundo');

    /*let salida = {
        nombre: 'Walter',
        edad: 28,
        url: req.url
    }*/

    //res.send(salida);
    //llamamos home.hbs, y para pasar variables se crea un objeto con las variables y valores que se quieran pasar.
    res.render('home', {
        nombre: "walter alonso"
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en puerto 3000');
})