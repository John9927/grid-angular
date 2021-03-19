import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firestore: AngularFirestore) {
}

  getTitle() {
   return this.firestore.collection('person').get();
  }
}
