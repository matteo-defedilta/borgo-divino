import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private firestore: AngularFirestore) { }

  async addNewCard(data) {
    await this.firestore
      .collection('cards')
      .add(data)  
      .then(res => {
        console.log("inserimento andato a buon fine");
        console.log(res);
      });
  }
  readCards(){
    this.firestore.collection('cards').get().subscribe(value => {
      value.docs.map(doc => console.log(doc.data()))
    });
  }
}
