//importando modulos
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

const route = require('./routes/routes');

//conectando ao mongodb
const dbpath = "mongodb://localhost:27017/bdteste";

const mongo = mongoose.connect(dbpath, {useNewUrlParser: true });
mongo.then(() => {
  console.log('connected');
}).catch((err) => {
  console.log('err', err);
});

//ao conectar
mongoose.connection.on('connect',()=>{
  console.log('MongoDB conectado na porta 27017');
});

//Error
mongoose.connection.on('error',(err)=>{
  console.log(err);
});

const PORT = 3000;

//adicionando Middleware - cors
app.use(cors());

//adicionando Middleware - bodyparser
app.use(bodyparser.json());

app.use('/', route);

app.get('/',(req, res)=>{
	res.send('testando');
})

app.listen(PORT, ()=>{
  console.log('Servidor iniciado na porta:' + PORT);
});
