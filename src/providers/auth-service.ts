import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  email: string;
 
  constructor(email: string) {
    this.email = email;
  }
}

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
 currentUser: User;

 public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // a request to your backend to make a real check!

        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('saimon@devdactic.com');
        observer.next(access);
        observer.complete();
      });
    }
  }
 

}
