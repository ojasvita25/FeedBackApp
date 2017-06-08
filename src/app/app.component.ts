import { Component ,ViewChild} from '@angular/core';
import { Nav,Platform ,MenuController} from 'ionic-angular';
import { Splashscreen } from 'ionic-native';
import { StatusBar, Deeplinks } from 'ionic-native';
import { LoginPage } from '../pages/login-page/login-page';
import { HomePage } from '../pages/home/home';
import { BuildFormPage } from '../pages/build-form/build-form';
import { CustomFeedbackFormPage } from '../pages/custom-feedback-form/custom-feedback-form';
import { GetTemplatePage} from '../pages/get-template/get-template';
import { DashboardPage} from '../pages/dashboard/dashboard';
import {  FinalTemplatePage } from '../pages/final-template/final-template';
import { MainPage } from '../pages/main/main';
import { AccountPage} from '../pages/account/account';
import { FeedbackPage } from '../pages/feedback/feedback';
import {ResetpasswordPage}  from '../pages/resetpassword/resetpassword';
import {IntroPage}  from '../pages/intro/intro';
import{NativeStorage,Facebook} from 'ionic-native';
 import {KioskSecurityPage } from '../pages/kiosk-security/kiosk-security';
import {SampleFormPage } from '../pages/sample-form/sample-form'

@Component({
  templateUrl: 'app.html',

})
export class MyApp {
@ViewChild(Nav) navChild: Nav;
rootPage:any = MainPage;
email:any;
pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menu: MenuController) {
  this.initializeApp();
 
  this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'About', component: DashboardPage},
      { title: 'Help', component: DashboardPage },
      { title: 'Feedback', component: FeedbackPage},
       { title: 'Settings', component: AccountPage}
    ];
   
  }

param:any;
initializeApp() {
 

 this.platform.ready().then(() => {
//
 
  
      //Deeplinks
    Deeplinks.routeWithNavController(this.navChild,{
'/main':  MainPage,
'/login': LoginPage
    }).subscribe((match)=>{
      console.log('successfully routed',match);
    },(nomatch)=>{
      console.log('unmatched Route',nomatch);
    });
      StatusBar.styleDefault();
      Splashscreen.hide();
      
    });

 // let env = this;
 //      NativeStorage.getItem('user')
 //      .then( function (data) {
 //        // user is previously logged and we have his data
 //        // we will let him access the app
 //        env.navChild.push(DashboardPage);},
 //        function(error){
 //          env.navChild.push(MainPage);
 //           Splashscreen.hide();
 //        });

    }

    openPage(page) {
     
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.navChild.push(page.component);
  }
}
