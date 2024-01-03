import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {  getFirestore } from 'firebase/firestore';
import { Firestore, collection, addDoc, getDocs, getDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',

})
export class UserService {
    private db: any = getFirestore()
    private dbPath = 'user';
    userColRef: any = AngularFirestoreCollection<User>;

  constructor( private fireStore: Firestore ) {
    this.userColRef = collection(this.db,this.dbPath);
   }

  getAll() {
    return collectionData( this.userColRef ) as Observable<User[]>

  }

  create(user: User): any {
    console.log("🚀 ~ file: user.service.ts:28 ~ UserService ~ create ~ ======== create")
    return addDoc(this.userColRef, user)
    // return this.userColRef.add({ ...user });
  }

  update(id: string, data: any): Promise<void> {
    return this.userColRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.userColRef.doc(id).delete();
  }
}
