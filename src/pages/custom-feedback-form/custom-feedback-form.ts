import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CustomFeedbackForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-custom-feedback-form',
  templateUrl: 'custom-feedback-form.html'
})
export class CustomFeedbackFormPage {
data=[];
customs=[{
  name:"FirstName",
  type:"1",
  
},{
  name:"LastName",
  type:"1",
  
},
{
 name:"Select",
  type:"2",
 
  options:[
  {option:"1"},
  {option:"2"},
  {option:"3"},
  {option:"4"}
          ]	
},{
  name:"Company",
  type:"1",
   
}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

 

}
