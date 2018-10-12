import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  getEntorpecentesItems(){
  	return this.http.get('items/')
  		.map(res => res.json());
  }

  addEntorpecentesItem(newItem){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('item/', newItem, {headers: headers})
  		.map(res => res.json());
  }

  deleteEntorpecentesItem(id){
  	return this.http.delete('item/'+id)
  		.map(res => res.json());
  }

  updateEntorpecentesItem(newItem){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.put('item/'+newItem._id, newItem, {headers:headers})
  		.map(res => res.json()); 
  }


}
