import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CardPageService {

  constructor(private firestore: AngularFirestore) { }

  readCard(id:string): any {
    return this.firestore.collection('cards').doc(id);
  }
}
