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
  filteredUserlist = [];
  newTicket: any;

  ngOnInit(): void {
    this.AuthenticationService.getUsers().subscribe(users => {
      users.docs.forEach(sd => {
        this.userlist.push(sd.data())
      });
    });
  }

  filterUsers() {
    let selectedUser:any = document.querySelector(".inputSearch");
    console.log();
    this.filteredUserlist = this.userlist.filter(user =>  user.name.toLowerCase().includes(selectedUser.value.toLowerCase())) 
    
  }

  addTickets(params, tickets) {

    this.firestore.collection('users').get().subscribe(users => {

      users.docs.forEach(sd => {
        let matchedUser = sd.data()['name'];

        if (matchedUser == params.name) {
          this.firestore.collection('users').doc(sd.id).update({ ticket: parseInt(tickets) + parseInt(sd.data()['ticket']) });
          this.userlist.filter(word => word.name == matchedUser)[0].ticket = parseInt(tickets) + parseInt(sd.data()['ticket'])
        }

        // this.userlist.push(sd.data())
      });
    })
  }
  removeTickets(params, tickets) {
    this.firestore.collection('users').get().subscribe(users => {

      users.docs.forEach(sd => {
        let matchedUser = sd.data()['name'];

        if (matchedUser == params.name) {

          this.firestore.collection('users').doc(sd.id).update({ ticket: (parseInt(sd.data()['ticket']) - parseInt(tickets)) });
          this.userlist.filter(word => word.name == matchedUser)[0].ticket = (parseInt(sd.data()['ticket']) - parseInt(tickets))
        }
      });
    })

  }

}
