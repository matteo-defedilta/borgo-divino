import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  constructor(
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore
  ) { }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
          console.log("logged");
          console.log(res);
          this.storeUser(res.user);
          localStorage.setItem('user', JSON.stringify(res));

        }, err => {
          console.log(err);
          reject(err);
          localStorage.setItem('user', null);
        })
    })
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      console.log("log out");
      localStorage.setItem('user', null);
    })
  }

  storeUser(user) {
    const usersRef = this.firestore.collection('users').doc(user.id)
    usersRef.get()
      .subscribe((docSnapshot) => {
        if (docSnapshot.exists) {
          this.firestore.collection("users").doc(user.uid).set({
            name: user.displayName,
            ticket: 0,
            admin: false
          })
        }
      });



  }

  readUser(userId) {
    return this.firestore.collection('users').doc(userId)
  }

  get isLogged(): boolean {
    return !!JSON.parse(localStorage.getItem('user'));
  }

}
