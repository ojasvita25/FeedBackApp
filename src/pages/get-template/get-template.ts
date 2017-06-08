import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,AlertController } from 'ionic-angular';
import {  FinalTemplatePage 
 } from '../final-template/final-template';
 import {Http} from '@angular/http';
 import {EventTemplatesPage} from '../event-templates/event-templates';

/*
  Generated class for the GetTemplate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-get-template',
  templateUrl: 'get-template.html'
})
export class GetTemplatePage {
info:any[]=[];
data:any;
title:any;
template_name:any;
temp_field:any;
tempname:any;
templateName:any;
temp_id:any;
userid:any;
searchQuery: string = '';
eventInfo :any;
  constructor( private alertCtrl: AlertController,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public http:Http)  {
  this.data= [];
this.data.response="";
 this.http = http;
  this.eventInfo = navParams.get('eventInfo'); 

 this.template_name = navParams.get('template_name'); 
  this.templateName = navParams.get('template_name'); 

 this.userid = navParams.get('userid'); 

  }
initializeItems(){
 this.template_name= this.templateName; 
}
getItems(ev:any){
	this.initializeItems();

	let val =ev.target.value;
	if(val && val.trim()!=''){
		this.template_name=this.template_name.filter((item)=>{
			return(item.toLowerCase().indexOf(val.toLowerCase())>-1);
		});
	}
}

success:any;
itemSelected(name,list){
	
let EventTemplates = this.modalCtrl.create(EventTemplatesPage,{event_name:name,templatesInfo:list,userid:this.userid});
EventTemplates.present();    

      
}


}
