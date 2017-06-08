import { Component } from '@angular/core';
import { NavController,ToastController,AlertController, NavParams ,Platform} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import{ResetpasswordPage}  from '../resetpassword/resetpassword';
import { DashboardPage
 } from '../dashboard/dashboard';
 import {Http} from '@angular/http';

 import { UserDetails} from '../../providers/user-details';
/*
  Generated class for the KioskSecurity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-kiosk-security',
  templateUrl: 'kiosk-security.html'
})
export class KioskSecurityPage {
myForm:FormGroup;
email:any;
pass:any;
data:any;
    public unregisterBackButtonAction: any;

  constructor(private userdetails: UserDetails,private alertCtrl: AlertController,public http:Http,public toastCtrl:ToastController,public platform: Platform,public nav: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
   this.data= [];
this.data.response="";
 this.http = http;
 this.email=this.userdetails.getUserDetails();
   this.myForm = formBuilder.group({
       
        password: ['',Validators.compose([Validators.required])]
    });
  }
    ionViewDidEnter() {
        this.initializeBackButtonCustomHandler();
    }

    ionViewWillLeave() {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    }
    public initializeBackButtonCustomHandler(): void {
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction((e) => {
            this.customHandleBackButton(e);
        }, 10);
    }  
     private customHandleBackButton(e): void {
       let toast = this.toastCtrl.create({
      message: "Press Again to Confirm Exit",
      duration: 3000
    });
    toast.present(); 
    }  
    info:any;
    activation:any;
    error:any;
    userinfo:any;
submit(){
	 var link="http://mobizite.com/UserInformation";
  var data = {
   email: this.email,
   password:this.pass
   };
        
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json(); 
         this.info=data.json().success;
        this.activation=data.json().activation;
        this.error=data.json().error;
         this.userinfo=data.json().userInfo[0];
         console.log(data)
         console.log(this.info);
         console.log(this.userinfo);
         if(this.info==true && this.activation==true){
         this.nav.push(DashboardPage,{email:this.email,userinfo:this.userinfo,password:this.pass});
  
}
         
         else
         {
        
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
	this.nav.push(DashboardPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad KioskSecurityPage');
  }
  
passwordtrouble(){
this.nav.push(ResetpasswordPage);
}
}
