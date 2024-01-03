import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WareHouse } from '../models/ware-house.model';
import {  getFirestore } from 'firebase/firestore';
import { Firestore, collection, addDoc, getDocs, getDoc, collectionData, updateDoc, deleteDoc, doc, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WareHouseService {
    private dbPath = '/warehouse';
    private db: any = getFirestore()
    warehouseRef: any = AngularFirestoreCollection<WareHouse>;

  constructor() {
    this.warehouseRef =  collection(this.db,this.dbPath);
   }

   getAll() {
    return getDocs( query( this.warehouseRef ) )
    

    // return collectionData( this.warehouseRef ) as Observable<WareHouse[]>

  }

  create(warehouse: WareHouse) {
    return addDoc(this.warehouseRef, {...warehouse, created_at: new Date(), updated_at: null })

  }

  update(id: any, data: any) {
    return updateDoc(
        doc( this.db, this.dbPath, id ), 
        { ...data, updated_at: new Date() }
    )
  }

  delete( id: any ): Promise<void> {
    return deleteDoc(  doc( this.db, this.dbPath, id ) )
  }
}
