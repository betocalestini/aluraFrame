/* Código simplório, apenas para fornecer o serviço para a aplicação */

var express = require('express'),
   app = express(),
   routes = require('../app/routes'),
   path = require('path'),
   bodyParser = require('body-parser'),
   os = require('os');

app.set('clientPath', path.join(__dirname, '../..', 'client'));
console.log(app.get('clientPath'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.json());

const dados = os.networkInterfaces();
const tudo = JSON.stringify(dados);

const ip = dados.eth0[0].address;

console.log(ip);

routes(app);

module.exports = app;
