Se crea un servidor web con http,
escuchando un puerto especifico, para el caso 8080.


para ejecutarlo con app-old: (cualquier url la recibe)
http://localhost:8080/

para ejecutarlo con express: (solo los que se definan)
http://localhost:3000

(server.js es el archivo principal donde se levanta un servidor web con express, app-old.js es como se levanta con http (con libreria http dentro de node))


Para ejecutarlo:
```nodemon server.js```

Todo lo que esta dentro de scripts en package.json a excepcion del start corren con npm run..
npm start
npm run nodemon
npm run start