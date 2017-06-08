import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BuildForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-build-form',
  templateUrl: 'build-form.html'
})
export class BuildFormPage {
inputs = [{
        name: null,
        type:null,
        options:[{
        option:null
        }]
    }];
constructor(public navCtrl: NavController, public navParams: NavParams) {
	

}
 addInput = function () {
        console.log("new input");
        this.inputs.push({
            name: null,
            type:null,
            options:null
        });
    }
    x:any[]=[];
    addInputOptions = function (x) {
        console.log("new option");
        this.x.push({
            option:null
           });
    }
 removeInput = function (index) {
       this.inputs.splice(index, 1);
    }
}
