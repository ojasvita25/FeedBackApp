import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import { DashboardPage
 } from '../dashboard/dashboard';
 import{ResetpasswordPage}  from '../resetpassword/resetpassword';
import { ToastController } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
 import { UserDetails} from '../../providers/user-details';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
   
})
export class LoginPage {
  private FB_APP_ID: number = 1696695290342498;
info:any;
data:any;
error:any;
activation:any;
userinfo:any;
firstTime:any;
userName:any;
showerror=false;
private email:any;
private pass:any;
myForm:FormGroup;
emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

constructor(private userdetails: UserDetails,public toastCtrl: ToastController,public loadingCtrl: LoadingController,public nav: NavController, public navParams: NavParams,public http:Http,public formBuilder: FormBuilder,private alertCtrl: AlertController) {
this.data= [];
this.data.response="";
 this.http = http;
  this.userName = navParams.get('userName'); 
 this.firstTime = navParams.get('firstTime'); 
  this.myForm = formBuilder.group({
        email: ['', Validators.compose([Validators.pattern(this.emailRegex), Validators.required])],
        password: ['',Validators.compose([Validators.required])]
    });
   Facebook.browserInit(this.FB_APP_ID, "v2.8");
}
ionViewDidLoad() {
  if(this.firstTime){
    let toast = this.toastCtrl.create({
      message: 'Welcome !!' + this.userName + ' Please enter your correct credentials to continue.',
      duration: 5000,
       position: 'top'
    });
    toast.present();
}
}

passwordtrouble(){
this.nav.push(ResetpasswordPage);
}
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
          this.userdetails.setUserDetails(this.email,this.userinfo,this.pass);
console.log(this.email);
         this.nav.push(DashboardPage,{email:this.email,userinfo:this.userinfo,password:this.pass});
  //       let loading = this.loadingCtrl.create({
  //   content: `
  //     <ion-spinner name="crescent"></ion-spinner>`,
  //   duration: 1000
  // });

  // loading.onDidDismiss(() => {
  //   console.log('Dismissed loading');
  // });

  // loading.present();
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
  }

 
dofblogin(){
  let permissions = new Array<string>();
    let nav = this.nav;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];


    Facebook.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      Facebook.api("/me?fields=name,gender", params)
      .then(function(user) {
        //now we have the users info, let's save it in the NativeStorage
        NativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          email:user.email
         
        })
        .then(function(){
          nav.push(DashboardPage,{email:this.email});
        }, function (error) {
          console.log(error);
        })
      })
    }, function(error){
      console.log(error);
    });
  }



 
}
