import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,AlertController  } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {  FinalTemplatePage 
 } from '../final-template/final-template';
 import {Http} from '@angular/http';
  import {KioskSecurityPage } from '../kiosk-security/kiosk-security';

/*
  Generated class for the EventTemplates page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-event-templates',
  templateUrl: 'event-templates.html'
})
export class EventTemplatesPage {
templatesInfo:any;
event_name:any;
data:any;
tempname:any;
title:any;
hide=false;
show=true;
userid:any;
disable=false;
showc:any;
  constructor(public http:Http,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public modalCtrl: ModalController) {
  
this.data= [];

this.data.response="";
 this.http = http;
 this.userid=navParams.get('userid');
   this.templatesInfo = navParams.get('templatesInfo'); 
   this.event_name = navParams.get('event_name'); 
   this.showc = navParams.get('show'); 

  }
close() {
    this.viewCtrl.dismiss();
  }
  KioskMode(){
this.disable=true;
this.show=false;
this.hide=true;
 }

   itemSelected(name,id){
 var link="http://mobizite.com/LeadTemplateFieldInformation";
 this.tempname=name;
 var data = {
   id:id
   };
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json();  
        this.title=data.json().creation_date;
         console.log(data);
         console.log(this.title);
let KioskModel = this.modalCtrl.create(FinalTemplatePage,{temp_field:data,template_name:this.tempname,userid:this.userid,temp_id:id,templatesInfo:this.templatesInfo,showclose:this.show});
    KioskModel.present();
           }, error => {
            console.log("Oooops!");
        });

 }
 
  ionViewDidLoad() {
    if(this.showc==false){
      this.show=false;
      this.hide=true;
    }
  console.log(this.templatesInfo);
    console.log('ionViewDidLoad EventTemplatesPage');
  }
exitKiosk(){
  let alert = this.alertCtrl.create({
    title: 'Exit Kiosk Mode',
    message: 'Exit Kiosk Mode?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
     this.navCtrl.push(KioskSecurityPage);
        }
      }
    ]
  });
alert.present();
}
}
