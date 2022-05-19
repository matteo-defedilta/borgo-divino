import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddTicketService {

  constructor(private firestore: AngularFirestore) { }

  users: any

  getUsers() {
    return this.firestore.collection('users').get()
  }
}
