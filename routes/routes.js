const express = require('express');
var router = express.Router();

const entorpecente = require('../models/entorpecentes');

//acessando a rota
router.get('/user',(req, res, next)=>{
	res.send('Acessando a rota');
})

//buscando elementos no bd
router.get('/items',(req, res, next)=>{
	entorpecente.find(function(err,items){
		if(err){
			res.json(err);
		}
		else{
			res.json(items);
		}
	});
})

//inserindo novo item
router.post('/item', (req, res, next)=>{
	let novoEntorpecente = new entorpecente({
		userName: req.body.userName,
		procedimento: req.body.procedimento,
		n_proced: req.body.n_proced,
		data_entrada: req.body.data_entrada,
		investigado: req.body.investigado,
		substancia: req.body.substancia,
		quant: req.body.quant,
		und: req.body.und,
		laudo: req.body.laudo,
		vara: req.body.vara,
		n_processo: req.body.n_processo,
		lacre: req.body.lacre,
		data_autorizacao: req.body.data_autorizacao,
		caixa: req.body.caixa,
		oficio: req.body.oficio,
		delegacia: req.body.delegacia
	});
	novoEntorpecente.save((err,item)=>{
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Item foi adicionado com sucesso'});
		}
	});
});

//atualizando item
router.put('/item/:id', (req, res, next)=>{
	entorpecente.findOneAndUpdate({_id: req.params.id},{
		$set:{
			userName: req.body.userName,
			procedimento: req.body.procedimento,
			n_proced: req.body.n_proced,
			data_entrada: req.body.data_entrada,
			investigado: req.body.investigado,
			substancia: req.body.substancia,
			quant: req.body.quant,
			und: req.body.und,
			laudo: req.body.laudo,
			vara: req.body.vara,
			n_processo: req.body.n_processo,
			lacre: req.body.lacre,
			data_autorizacao: req.body.data_autorizacao,
			caixa: req.body.caixa,
			oficio: req.body.oficio,
			delegacia: req.body.delegacia
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	})
});

//deletando item
router.delete('/item/:id', (req, res, next)=>{
	entorpecente.deleteOne({_id: req.params.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	});
});

module.exports = router;