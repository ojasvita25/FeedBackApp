import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

/*
  Generated class for the Resetpassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html'
})
export class ResetpasswordPage {
email:any;
data:any;
  constructor(public nav: NavController, public navParams: NavParams,public http:Http) {

this.data= [];
this.data.response="";
 this.http = http;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }
  send(){
  	var link="http://mobizite.com/ForgotPasswordInformation";
  var data = {
   email: this.email
   };
        
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json(); 
         console.log(data);
  });
}
}
