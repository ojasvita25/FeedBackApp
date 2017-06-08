import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {LoginPage
 } from '../login-page/login-page';
 import { RegisterPage
 } from '../register/register';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IntroPage } from '../intro/intro';
import {SampleFormPage } from '../sample-form/sample-form';
/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
value:any[]; 
selected=false;
fieldvalue:any[];
  constructor(private sharingVar: SocialSharing,public modalCtrl: ModalController,public nav: NavController, public navParams: NavParams,public storage: Storage) {
// ionicSideMenuDelegate.canDragContent(false);


this.value = [
{
subOption:"1.1 option A",
},
{
subOption:"1.2 option B",
},
{
subOption:"1.3 option C",
},
{
subOption:"1.4 option D",
}
];
  }
  field_value:any;

whatsappShare(){
    this.sharingVar.shareViaWhatsApp("Message via WhatsApp feedapp://main" /* url */)
      .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }
   twitterShare(){
    this.sharingVar.shareViaTwitter("Message via Twitter",null /*Image*/,"feedapp://main")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }
 
  facebookShare(){
    this.sharingVar.shareViaFacebook("Message via Twitter",null /*Image*/,"feedapp://main")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }
 
  otherShare(){
    this.sharingVar.share("Genral Share Sheet",null/*Subject*/,null/*File*/,"feedapp://main")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
 
  }

lastChecked = null;
uncheck(event){
	console.log("click");
	console.log(event.target.value);
if(event.target.value==this.lastChecked){
	this.field_value = null;
	this.lastChecked = null;
}else{
	this.lastChecked =event.target.value;
}
}
	
ionViewDidLoad() {
  this.storage.get('intro-done').then(done => {
    if (!done) {
      this.storage.set('intro-done', true);
      this.nav.setRoot(IntroPage);
    }
  });
}
  openmodal(){
 let profileModal = this.modalCtrl.create(SampleFormPage);
   profileModal.present();
  }
login(){
	 this.nav.push(LoginPage);
}
register(){
	 this.nav.push(RegisterPage);
}
}
