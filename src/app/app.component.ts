import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import {DataService} from '../providers/data-service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxdo1mJJmalLNJD1heVrHTYT0PBttX5CU",
    authDomain: "feedback-2d820.firebaseapp.com",
    databaseURL: "https://feedback-2d820.firebaseio.com",
    storageBucket: "feedback-2d820.appspot.com",
    messagingSenderId: "497505754553"
   };
  firebase.initializeApp(config);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
