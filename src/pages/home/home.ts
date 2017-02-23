import { Component } from '@angular/core';
import {DataService} from '../../providers/data-service';
import { NavController } from 'ionic-angular';
class user{
	public firstname:string;
	public lastname:string;
	constructor() 
	{
	 this.firstname = ''; 
	this.lastname = ''; 
	}}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DataService]
})

export class HomePage {
user: user;
  constructor(public navCtrl: NavController,public data:DataService) {
  this.user=new user();
  }
save() { 
var key = this.data.save(this.user); 
if(key) {
 console.log('saved'); } 
}

}
