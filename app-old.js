//montar un webserver con http

const http = require('http'); //ya viene en node


//aca creamos un servidor web, escuchando un puerto
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Walter',
            edad: 28,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando 8080');