import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../authentication/service/authentication.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor(private authService: AuthenticationService, private afAuth: AngularFireAuth) { }

  ticket: number;

  ngOnInit(): void {
    this.afAuth.authState
      .subscribe(user => {
        if (user) {
          this.authService.readDoc("users", user.uid).get().subscribe((doc: any) => {
            this.ticket = doc.data().ticket;
          });
        }
      })
  }

}
