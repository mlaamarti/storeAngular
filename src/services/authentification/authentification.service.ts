import { Injectable } from '@angular/core';
import { IUser } from 'src/modals/iuser';
import * as firebase from "firebase";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  onLogin(loginUser: IUser) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(loginUser.email, loginUser.password);
  }

  onRegister(loginUser: IUser) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(loginUser.email, loginUser.password);
  }

  isAuthenticated(): Promise<string> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user.uid);
          resolve(user.uid);
        } else {
          reject("Utilisateur non identifié");
        }
      });
    });
  }

}
