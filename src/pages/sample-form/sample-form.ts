import { Component } from '@angular/core';
import { NavController,Platform,NavParams } from 'ionic-angular';
 import{Thanks2Page}  from '../thanks2/thanks2';
import {StatusBar} from 'ionic-native';

/*
  Generated class for the SampleForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample-form',
  templateUrl: 'sample-form.html'
})
export class SampleFormPage {
    public unregisterBackButtonAction: any;
  constructor(public platform: Platform,public nav: NavController, public navParams: NavParams) {

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
        e.preventDefault();
    }  
ionViewDidLoad() { 
   console.log('ionViewDidLoad SampleFormPage');
  
  
  }

save(){
	 this.nav.push(Thanks2Page);
}
}
