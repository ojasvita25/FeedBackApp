import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {
 private _db: any;
 private userID :any;
public form:any;
  constructor(public http: Http) {this.form = firebase.database().ref('/');
   this.form = firebase.database().ref('form');
 this.form.on('child_added', this.handleData, this);
  this.userID = new ReplaySubject();
   }
get users(){
	return this.userID;
}
save(user){
	return this.userID.push(user).key;
}
handleData(snap) { 
try { 
this.userID.next(snap.val()); 
}
 catch (error) { 
 console.log('catching', error); }

 }

    }

