import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AuthService } from './../providers/auth-service';
import { UserDetails} from './../providers/user-details';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { StatusBar, Deeplinks } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login-page/login-page';
import { CustomFeedbackFormPage } from '../pages/custom-feedback-form/custom-feedback-form';
import { BuildFormPage } from '../pages/build-form/build-form';
import { MainPage } from '../pages/main/main';
import { GetTemplatePage
 } from '../pages/get-template/get-template';
import { DashboardPage
 } from '../pages/dashboard/dashboard';
import {  FinalTemplatePage 
 } from '../pages/final-template/final-template';
 import { AccountPage
 } from '../pages/account/account';
 import { RegisterPage
 } from '../pages/register/register';
 import { FeedbackPage 
 } from '../pages/feedback/feedback';
 import{ResetpasswordPage}  from '../pages/resetpassword/resetpassword';
 import{ThanksPage}  from '../pages/thanks/thanks';
 import{IntroPage}  from '../pages/intro/intro';
import{NativeStorage,Facebook} from 'ionic-native';
import {SampleFormPage } from '../pages/sample-form/sample-form'
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';
 import {KioskSecurityPage } from '../pages/kiosk-security/kiosk-security';
import {EventTemplatesPage} from '../pages/event-templates/event-templates';
import { SocialSharing } from '@ionic-native/social-sharing';
 import{Thanks2Page}  from '../pages/thanks2/thanks2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CustomFeedbackFormPage,
    BuildFormPage ,
    GetTemplatePage,
    DashboardPage,
    FinalTemplatePage ,
    MainPage,
    AccountPage,
    RegisterPage,
     FeedbackPage,
     ResetpasswordPage,
     ThanksPage,
     IntroPage,
     SampleFormPage ,
     KioskSecurityPage ,
     EventTemplatesPage,
     Thanks2Page

  ],
  imports: [
   BrowserModule,
  IonicModule.forRoot(MyApp),
  Ionic2RatingModule, // ionic2-rating module 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CustomFeedbackFormPage ,
    BuildFormPage,
    GetTemplatePage,
    DashboardPage,
    FinalTemplatePage ,
    MainPage,
    AccountPage,
    RegisterPage,
    FeedbackPage ,
    ResetpasswordPage,
    ThanksPage,
    IntroPage,
    SampleFormPage ,
    KioskSecurityPage,
    EventTemplatesPage ,
    Thanks2Page
  ],
  providers: [UserDetails,AuthService,Storage,Deeplinks,SocialSharing,NativeStorage,Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
