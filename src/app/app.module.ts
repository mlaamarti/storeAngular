import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from "firebase";
import { from } from 'rxjs';


const firebaseConfig = {
  apiKey: "AIzaSyBKFjYU7_gtulg0BSw3GxWQsNzyzNSPvws",
  authDomain: "projectan-255cf.firebaseapp.com",
  databaseURL: "https://projectan-255cf.firebaseio.com",
  projectId: "projectan-255cf",
  storageBucket: "projectan-255cf.appspot.com",
  messagingSenderId: "871211104167",
  appId: "1:871211104167:web:962607c65bca2bd6dfe882",
  measurementId: "G-DS3NL0J840"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
