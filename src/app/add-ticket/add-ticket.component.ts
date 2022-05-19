import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/service/authentication.service';
import { AddTicketService } from './add-ticket.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService, private firestore: AngularFirestore) { }

  userlist = [];
  newTicket: any;

  ngOnInit(): void {
    this.AuthenticationService.getUsers().subscribe(users => {
      users.docs.forEach(sd => {
        this.userlist.push(sd.data())
      });
    });
  }

  addTickets(params,tickets) {
    this.firestore.collection('users').get().subscribe(users => {

      users.docs.forEach(sd => {
        let matchedUser= sd.data()['name'];
        
        if (matchedUser == params.name) {
          
          this.firestore.collection('users').doc(sd.id).update({ ticket: parseInt(tickets)+parseInt(sd.data()['ticket'])});
          
        }
      });
    })
  }

}
