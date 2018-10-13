import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { DataService } from '../data.service';
import * as $ from "jquery";

@Component({
  selector: 'app-drakon',
  templateUrl: './drakon.component.html',
  styleUrls: ['./drakon.component.css'],
  providers: [DataService]
})
export class DrakonComponent implements OnInit {
	entorpecentesLista: Item[]=[];
	selectedItem: Item;
	toggleForm: boolean = false;

  constructor(private dataService: DataService) { }

// Ao iniciar a página, executa esse método retornando a lista de itens
	getItems(){
		this.dataService.getEntorpecentesItems()
		.subscribe( items => {
			this.entorpecentesLista = items;
			console.log('data from dataservice: ' + this.entorpecentesLista[0].userName); 
		})
	}

// Ao clicar no botão adicionar, executa o método

addItem(form){
	let newItem: Item = {
		userName: form.value.userName,
		procedimento: form.value.procedimento,
		n_proced: form.value.n_proced,
		data_entrada: form.value.data_entrada,
		investigado: form.value.investigado,
		substancia: form.value.substancia,
		quant: form.value.quant,
		und: form.value.und,
		laudo: form.value.laudo,
		vara: form.value.vara,
		n_processo: form.value.n_processo,
		lacre: form.value.lacre,
		data_autorizacao: form.value.data_autorizacao,
		caixa: form.value.caixa,
		oficio: form.value.oficio,
		delegacia: form.value.delegacia
	}
	this.dataService.addEntorpecentesItem(newItem)
		.subscribe(item =>{
			console.log(item);
			//Ao terminar a inserção, adiciona o elemento na exibição
			this.getItems();
		})
}

deleteItem(id){
	this.dataService.deleteEntorpecentesItem(id)
		.subscribe( data => {
			console.log(data);
			if(data.n == 1){
				for( var i=0; i< this.entorpecentesLista.length; i++){
					if(id == this.entorpecentesLista[i]._id){
						this.entorpecentesLista.splice(i, 1);
					}
				}
			}
		})
}

editItem(form){
	let newItem: Item = {
		_id: this.selectedItem._id,
		userName: form.value.userName,
		procedimento: form.value.procedimento,
		n_proced: form.value.n_proced,
		data_entrada: form.value.data_entrada,
		investigado: form.value.investigado,
		substancia: form.value.substancia,
		quant: form.value.quant,
		und: form.value.und,
		laudo: form.value.laudo,
		vara: form.value.vara,
		n_processo: form.value.n_processo,
		lacre: form.value.lacre,
		data_autorizacao: form.value.data_autorizacao,
		caixa: form.value.caixa,
		oficio: form.value.oficio,
		delegacia: form.value.delegacia
	}
	this.dataService.updateEntorpecentesItem(newItem)
		.subscribe( result =>{
			console.log('Alterando valores do item antigo:'+result);
			this.getItems();
		})
		this.toggleForm = !this.toggleForm;
}

showEditForm(item){
  	this.selectedItem = item;
  	this.toggleForm = !this.toggleForm;
  }

  ngOnInit() {
  	this.getItems();
  }

}
