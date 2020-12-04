import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private firestore: AngularFirestore) { }

  addNewCard(data) {
    this.firestore
      .collection('cards')
      .add(data)
      .then(res => {
        console.log("inserimento andato a buon fine");
        console.log(res);
      });
  }

  readCards(): Observable<any> {
    return this.firestore.collection('cards').snapshotChanges();
  }

  deleteCards(data) {
    return this.firestore.collection('cards')
    .doc(data)
    .delete();
  }
}
