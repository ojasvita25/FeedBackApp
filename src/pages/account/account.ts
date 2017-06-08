import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {App} from 'ionic-angular';
import { MainPage } from '../main/main';
import { LoginPage
 } from '../login-page/login-page';
  import { UserDetails} from '../../providers/user-details';

/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
private email:any;
private show=false;
name="show";
private password:any;
  constructor(private userdetails: UserDetails,public navCtrl: NavController, public navParams: NavParams,private app:App) {

  this.email=this.userdetails.getUserDetails();
   this.password =this.userdetails.getUserPassword();
  }

showpass(){
if(this.name=="show"){
	this.show=true;
	this.name="hide";
}
else{
    this.name="show";
	this.show=false;
	
}}

logOut(){
	this.app.getRootNav().setRoot(MainPage);
}
}
