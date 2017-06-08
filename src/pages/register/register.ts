import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import {LoginPage
 } from '../login-page/login-page';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
registerForm:FormGroup;
emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
data:any;
email:any;
pass:any;
firstname:any;
lastname:any;
error:any;
success:any;
companyName:any;
mobileNumber:any;
disable=false;
  constructor(public nav: NavController, private alertCtrl: AlertController,public navParams: NavParams,public formBuilder: FormBuilder,public http:Http) {
this.data= [];
this.data.response="";
 this.http = http;
this.registerForm = formBuilder.group({
		firstname: ['',Validators.compose([Validators.required])],
		lastname:['',Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.pattern(this.emailRegex), Validators.required])],
        password: ['',Validators.compose([Validators.required])],
    	companyName:['',Validators.compose([Validators.required])],
    	mobileNumber:['',Validators.compose([Validators.required])]
    });

  }
firstTime:any;
saveDetails(){

  var link="http://mobizite.com/UserSignupInformation";
  var data = {
  first_name:this.firstname,
  last_name:this.lastname,
   email: this.email,
   password:this.pass,
   company_name:this.companyName,
   mobile_number:this.mobileNumber
   };
        
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json(); 
         this.success=data.json().success;
         this.error=data.json().message;
         console.log(data)
        if(this.success){
        	this.firstTime=true;
   let alert = this.alertCtrl.create({
    title: 'Welcome !!',
    message: this.error,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: () => {
           this.nav.setRoot(LoginPage,{firstTime:this.firstTime,userName:this.firstname});

        }
      }
    ]
  });
  alert.present();
        }else{
    let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: this.error,
    buttons: ['Dismiss']
  });
  alert.present();
        }
        }, error => {
            console.log("Oooops!");
            
        });
  }

}
