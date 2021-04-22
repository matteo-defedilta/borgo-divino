import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { AuthenticationService } from '../authentication/service/authentication.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth_login: AuthenticationService,
    private afAuth: AngularFireAuth) { }

  utente: User = {} as any;

  ngOnInit(): void {
    this.afAuth.authState
      .subscribe(user => {
        if (user) {
          this.auth_login.readDoc("users", user.uid).get().subscribe((doc: any) => {
            this.utente = doc.data();
          });
        }
      })
  }

  isLogged() {
    return this.auth_login.isLogged;
  }

}
