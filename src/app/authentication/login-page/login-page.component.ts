import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth_login: AuthenticationService, private afAuth: AngularFireAuth) { }

  utente: User;

  ngOnInit(): void {
    this.afAuth.authState
    .subscribe(user => {
      if (user) {
        this.auth_login.readUser(user.uid).get().subscribe((doc: any) => {
          this.utente = doc.data();
        });
      }
    })
  }

  callLogin() {
    this.auth_login.doFacebookLogin();
  }

  callLogout() {
    this.auth_login.signOut();
  }

  isLogged() {
    return this.auth_login.isLogged;
  }

}
