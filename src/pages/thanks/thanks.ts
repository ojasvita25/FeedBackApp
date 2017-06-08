import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  FinalTemplatePage 
 } from '../final-template/final-template';
 import { GetTemplatePage
 } from '../get-template/get-template';
 import {SampleFormPage } from '../sample-form/sample-form'
 import {KioskSecurityPage } from '../kiosk-security/kiosk-security';
 import {Http} from '@angular/http';
  import {EventTemplatesPage} from '../event-templates/event-templates';

/*
  Generated class for the Thanks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html'
})
export class ThanksPage {
data:any;
temp_field :any;
disable=false;
user_id :any;
template_id :any;
template_name:any;
templatesInfo:any;
  constructor(public http:Http,public nav: NavController, public navParams: NavParams) {

this.data= [];
this.data.response="";
 this.http = http;

this.temp_field = navParams.get('temp_field'); 
  this.template_name = navParams.get('template_name'); 
  this.user_id = navParams.get('user_id'); 
  this.template_id = navParams.get('template_id'); 
  
this.templatesInfo=navParams.get('templatesInfo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThanksPage');
  }
  success:any;
presenttemplate(){
	var link="http://mobizite.com/LeadTemplateFieldInformation";
 
 var data = {
   id:this.template_id 
   };
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json();  
       
        this.success=data.json().success;
         console.log(data);
         
         if(this.success){
	this.nav.setRoot(FinalTemplatePage,{temp_field:this.temp_field,template_name:this.template_name,userid:this.user_id,temp_id:this.template_id});
}

}, error => {
            console.log("Oooops!");
            
        });
}
getnewTemplate(){
	 this.nav.setRoot(EventTemplatesPage,{templatesInfo:this.templatesInfo});
}
getTemplate(){
	 this.nav.push(KioskSecurityPage);
	
}
}
