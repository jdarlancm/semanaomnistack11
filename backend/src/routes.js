const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;


/**
 * Métodos HTTP
 * 
 * GET: Buscar e listar
 * POST: Criar uma informação
 * PUT: Alterar
 * DELETE: Deletar
 */

/** 
 * Tipos de parâmetros
 * 
 * Query: Parametros: nomeados enviados na rota após o simbolo de ? (Filtros, paginação,...) 
 * Route: Parâmetros: utilizados para identificar recursos enviados depois da barra
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsfot SQL Server
  * NoSQL: MongoDB, couchDB
  * 
  */
 //query param
    //const params =  request.query;
    //console.log(params);

    //route param
    //const params =  request.params;
    //console.log(params);
