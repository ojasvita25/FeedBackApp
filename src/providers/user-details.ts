import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserDetails provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserDetails {
email:any;
userInfo:any;
password:any;


  constructor(public http: Http) {
  this.email="blah";
  this.userInfo=[];
  this.password='';
    console.log('Hello UserDetails Provider');
  }

setUserDetails(email,userInfo,password){
	this.email=email;
	 this.userInfo=userInfo;
  this.password=password;
  console.log("email",this.email);
}
getUserDetails(){
	return this.email ;
}
getUserPassword(){
	return this.password ;
}
}
