import { Component } from '@angular/core';
 import {Http} from '@angular/http';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
CountryCode = '';
firstname='';
lastname='';
data:any;
data2:any;

  constructor(public navCtrl: NavController,public http:Http) {
 this.data= [];
  }

submit(){

	 var link="http://www.iithiring.com/ajaxtest/CountryInformation";
	 var data={
  countryCode: this.CountryCode,
  firstname:this.firstname,
  lastname:this.lastname
   };
console.log(data);
   this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json();
         console.log(data);
        }, error => {
            console.log("Oooops!");
            
        });

}
}
