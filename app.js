//importando modulos
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/routes');

//conectando ao mongodb
const dbpath = "mongodb://usertest:drakon12345@ds131323.mlab.com:31323/bdteste";

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

const PORT = process.env.PORT || 8080;

//adicionando Middleware - cors
app.use(cors());

//adicionando Middleware - bodyparser
app.use(bodyparser.json());

app.use('/', route);

app.use(express.static(path.join(__dirname,'public')));

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/',(req, res)=>{
	res.send('testando');
})

app.listen(PORT, ()=>{
  console.log('Servidor iniciado na porta:' + PORT);
});
