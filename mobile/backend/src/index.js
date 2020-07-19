
/* MÉTODOS HTTP
Get: buscar informação bak-end
Post: criar uma informação no bak-end
Put: alterar uma informação no bak-end
Delete: deletar uma informação bak-end
*/

/* TIPOS DE PARÂMETROS
Query params: parâmetros nomeados enviados na rota após "?" (filtro)
Toute params: Parâmetros utilizados para identificar recursos
Request body: corpo da requisição utilizado para criar ou alterar recursos
*/

/*
npm start: start nodemon
*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3333);