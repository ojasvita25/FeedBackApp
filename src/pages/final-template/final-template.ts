import { Component ,ChangeDetectionStrategy} from '@angular/core';
import { NavController, ViewController, NavParams , AlertController } from 'ionic-angular';
 import {Http} from '@angular/http';
import { FormBuilder,ReactiveFormsModule,FormControl,FormGroup, Validators } from '@angular/forms';
 import{ThanksPage}  from '../thanks/thanks';
  import {EventTemplatesPage} from '../event-templates/event-templates';
import { DomSanitizer,SafeUrl,SafeResourceUrl} from '@angular/platform-browser';
/*
  Generated class for the FinalTemplate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
   changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-final-template',
  templateUrl: 'final-template.html'
})
export class FinalTemplatePage {
info:any[]=[];
name:any;
data:any;
trustedDashboardUrl : SafeUrl;
data_send:any;
temp_field:any;
template_name:any;
user_id:any;
template_id:any;
title:any;
subtitle:any;
leadTemplateFieldInfo:any;
showsuccess=false;
checked=false;
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
tf:any;
finalForm:FormGroup;
i:any;
checkboxValue=false;
arr:any;
chkbOrradio="radio";
user:any;
field_value:any[]=[];
cbChecked: any[]=[];

emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
urlRegex = '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})';
showclose:any;
field: Array<{field_name: any, field_value: any}>=[];
templatesInfo:any;
  constructor(private sanitizer: DomSanitizer,public viewCtrl: ViewController,public nav: NavController, public navParams: NavParams,public http:Http,public formBuilder: FormBuilder,private alertCtrl: AlertController) {
 

  this.data= [];
  this.field_value=[];
  this.arr=[];
  this.isToggled = false;
  this.data.field_value=[];
  this.data.field_name=[];
  this.data.field_id=[];
  this.data.response="";
  this.http = http;
  this.cbChecked = [];
  this.temp_field = navParams.get('temp_field'); 
  this.template_name = navParams.get('template_name'); 
  this.user_id = navParams.get('userid'); 
  this.template_id = navParams.get('temp_id');
  this.templatesInfo=navParams.get('templatesInfo'); 
  this.showclose=navParams.get('showclose'); 
  this.title=this.temp_field.json().title;
  this.subtitle=this.temp_field.json().subTitle;
  this.leadTemplateFieldInfo=this.temp_field.json().leadTemplateFieldInfo;
  this.tf=this.temp_field.leadTemplateFieldInfo;

  
  }
 public imgurl: SafeResourceUrl;
   public url: SafeResourceUrl;
  photoUrl(){
let url="https://image.freepik.com/free-vector/useful-and-modern-flyer-with-geometric-shapes_1017-4105.jpg";
this.imgurl =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
  console.log(this.imgurl);
  return this.imgurl;
  }
m:any[];
public isToggled: boolean;
single=false;
disablehiddenchkbox:any;
customTrackBy(index: number, obj: any): any {
    return  index;
  }
  logEvent() {
    if(this.isToggled){
    this.single=true;

    }else{
      this.single=false;

    }
  }
  
updateCheckedOptions(i,chBox,id,event) {
// for (let d of this.field_value){
// if(d.indexOf())
// }
    var cbIdx = this.cbChecked[i].indexOf(chBox);
    if(event.target.checked) {
          if(cbIdx < 0 ){   
               this.cbChecked[i].push(chBox);       
               
          }
      } else {
          if(cbIdx >= 0 ){
             this.cbChecked[i].splice(cbIdx,1);
             
          }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

      }
     
      // console.log( this.f[i]);

      this.field_value[i]=this.cbChecked[i];
  
}

updateCheckedOptionssingle(i,chBox,id,event) {
// for (let d of this.field_value){
// if(d.indexOf())
// }
    var cbIdx = this.cbChecked[i].indexOf(chBox);
    if(event.target.checked) {
          if(cbIdx < 0 ){   
               this.cbChecked[i]=chBox;       
               
          }
      } else {
          if(cbIdx >= 0 ){
             this.cbChecked[i]=[];
             
          }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

      }
     
      // console.log( this.f[i]);

      this.field_value[i]=this.cbChecked[i];
  
}
chkbox(chkbox,event,i){
   if(event.target.checked) {
   this.field_value[i]=chkbox;}
    else {
       this.field_value[i]=null;
    }
}
 public ngOnInit() {
  let aFormGroup: FormGroup = new FormGroup({});
for (let c of this.leadTemplateFieldInfo) {

      if( (c.data_type == 'text' || c.data_type == 'number' ||  c.data_type=="Text Area" || c.data_type == 'date') && c.required_flag=='Y'){
      let control: FormControl = new FormControl(c.field_name,Validators.compose([Validators.minLength(c.minimum_size),Validators.required]));
      aFormGroup.addControl(c.field_name, control);
      }
     if( (c.data_type == 'text' || c.data_type == 'number' ||  c.data_type=="Text Area" || c.data_type == 'date') && c.required_flag=='N'){
      let control: FormControl = new FormControl(c.field_name,Validators.compose([Validators.minLength(c.minimum_size)]));
      aFormGroup.addControl(c.field_name, control);}
  //email
      if(c.data_type == 'email' && c.required_flag=='Y'){
      let control: FormControl = new FormControl(c.field_name,Validators.compose([Validators.maxLength(c.maximum_size),Validators.minLength(c.minimum_size),Validators.pattern(this.emailRegex),Validators.required]));
      aFormGroup.addControl(c.field_name, control);
      }
      if(c.required_flag=='N' && c.data_type == 'email'){
      let control: FormControl = new FormControl(c.field_name,Validators.compose([Validators.maxLength(c.maximum_size),Validators.minLength(c.minimum_size),Validators.pattern(this.emailRegex)]));
      aFormGroup.addControl(c.field_name, control);
     }
     //url
      if(c.data_type == 'url' && c.required_flag=='Y'){
      let control: FormControl = new FormControl(c.field_name,Validators.compose([Validators.maxLength(c.maximum_size),Validators.minLength(c.minimum_size),Validators.pattern(this.urlRegex),Validators.required]));
      aFormGroup.addControl(c.field_name, control);
      }
      if(c.required_flag=='N' && c.data_type == 'url'){
      let control: FormControl = new FormControl(c.field_name,Validators.compose([Validators.maxLength(c.maximum_size),Validators.minLength(c.minimum_size),Validators.pattern(this.urlRegex)]));
      aFormGroup.addControl(c.field_name, control);
      }

      if(c.required_flag=='Y' && (c.data_type == 'image' || c.data_type == 'Picklist' || c.data_type=='checkbox'|| c.data_type=='radio')){
      let control: FormControl = new FormControl(c.field_name,Validators.compose([Validators.required]));
      aFormGroup.addControl(c.field_name, control);

      }
      if(c.required_flag=='N' && (c.data_type == 'image' || c.data_type == 'Picklist' || c.data_type=='checkbox' ||  c.data_type=='radio')){
         let control: FormControl = new FormControl(c.field_name);
      aFormGroup.addControl(c.field_name, control);
      }
      
    
this.finalForm = this.formBuilder.group({
      formgp: aFormGroup
    });

}
for(var m=0;m<this.leadTemplateFieldInfo.length;m++){
  this.field_value[m]=null;
}
for(var m=0;m<this.leadTemplateFieldInfo.length;m++){

  this.cbChecked[m]=[];
}
}
save(){
console.log(this.field_value);
var fieldName=[];
var link="http://mobizite.com/LeadCapture";

for ( var i = 0; i < this.leadTemplateFieldInfo.length; i++) {
fieldName[i]=this.leadTemplateFieldInfo[i].field_name;
}
 var data = {
  user_id:this.user_id,
  template_id:this.template_id,
  template_name:this.template_name,
  field_name:fieldName,
  field_value:this.field_value
  };
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json();  
         console.log(data);
          this.info=data.json().success;
          if(this.info){
         this.showsuccess=true;
         let alert = this.alertCtrl.create({
    title: 'Thank You !',
    message: 'Please click on "Next" to give a new feedback.',
    buttons: [
     
      {
        text: 'Next',
        handler: () => {
      this.nav.setRoot(EventTemplatesPage,{templatesInfo:this.templatesInfo,template_name :this.template_name,show:this.showclose });

        }
      }
    ]
  });
alert.present();

 // this.nav.push(ThanksPage,{temp_field:this.temp_field,template_name:this.template_name,user_id:this.user_id,template_id:this.template_id,templatesInfo:this.templatesInfo});
           }
           }, error => {
            console.log("Oooops!");
            
        });
}
 close() {
    this.viewCtrl.dismiss();
  }
}
