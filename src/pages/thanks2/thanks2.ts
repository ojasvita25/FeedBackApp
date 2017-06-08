import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SampleFormPage } from '../sample-form/sample-form'
 import {KioskSecurityPage } from '../kiosk-security/kiosk-security';

/*
  Generated class for the Thanks2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thanks2',
  templateUrl: 'thanks2.html'
})
export class Thanks2Page {

  constructor(public nav: NavController, public navParams: NavParams) {}

  
presenttemplate(){
 
	this.nav.setRoot(SampleFormPage);
}
getTemplate(){
	 this.nav.push(KioskSecurityPage);
	
}

}
