import { Component } from '@angular/core';
import { NavController, NavParams,MenuController } from 'ionic-angular';
import {Http} from '@angular/http';
import { GetTemplatePage
 } from '../get-template/get-template';
 import {App} from 'ionic-angular';
import { MainPage } from '../main/main';
import { BuildFormPage } from '../build-form/build-form';
import { AccountPage
 } from '../account/account';
 import { LoginPage } from '../login-page/login-page';
 import { FeedbackPage 
 } from '../feedback/feedback';
 import { Storage } from '@ionic/storage';
import { IntroPage } from '../intro/intro';
import {  FinalTemplatePage 
 } from '../final-template/final-template';
 import { UserDetails} from '../../providers/user-details';
 import {EventTemplatesPage} from '../event-templates/event-templates';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
data:any;
email:any;
private password:any;
userinfo:any;
userid:any;
active_title:any;
new_response:any;
total_response:any;
creation_date:any;
template_name:any;
num:any;
param:any;
tempname:any;
item:any;
  constructor(private userdetails: UserDetails,public menu:MenuController,public nav: NavController, public navParams: NavParams,public http:Http,private app:App,public storage: Storage) {
  this.data= [];
this.data.response="";
 this.http = http;
 this.email = navParams.get('email'); 
  this.password = navParams.get('password'); 
 this.userinfo = navParams.get('userinfo');  
  this.email=this.userdetails.getUserDetails();
   
  }
eventInfo:any;
id:any;
active_templateList:any;
ionViewDidLoad() {
  
  var link="http://mobizite.com/EventInformation";
   var data = {
   email: this.email
   };
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json(); 
         this.eventInfo=data.json().eventInfo;
         console.log(this.eventInfo);

       // console.log(this.template_name.length);
       for(var i=0;i< this.eventInfo.length;i++){
       if( this.eventInfo[i].active_flag=="Y"){
       this.active_title= this.eventInfo[i].name;
       this.active_templateList=this.eventInfo[i].leadTemplateList;
     this.id=this.eventInfo[i].id;
      //   this.total_response=this.template_name[i].total_responses;
     //this.creation_date=this.eventInfo[i].creation_date;
    this.num=i;
    this.item=this.eventInfo[i].id;
        }
       }
           }, error => {
            console.log("Oooops!");
            
        });
        
}
 
goToTemplate(){
this.nav.push(GetTemplatePage,{eventInfo:this.eventInfo});
}
goToCustomForm(){
	this.nav.push(BuildFormPage);}
goToActiveEvent(){
  this.nav.push(EventTemplatesPage,{event_name:this.active_title,templatesInfo: this.active_templateList,userid:this.id});
 
}
logOut(){
  this.app.getRootNav().setRoot(MainPage);
}
settings(){
    this.nav.push(AccountPage,{email:this.email,password:this.password});
}

// goToActiveTemplate(){
//   var link="http://mobizite.com/EventInformation";
//  this.tempname=this.template_name[this.num].name;
//   var data = {
//    id:this.item
//    };
//         this.http.post(link, data)
//         .subscribe(data => {
//          this.data.response = data.json();  
//          console.log(data);
//          this.nav.push(FinalTemplatePage,{temp_field:data,template_name:this.tempname,userid:this.userid,temp_id:this.item});
//            }, error => {
//             console.log("Oooops!");
//         });

//  }

feedback(){
    this.nav.push(FeedbackPage);

}
}
 