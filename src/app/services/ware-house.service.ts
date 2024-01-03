import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WareHouse } from '../models/ware-house.model';


@Injectable({
  providedIn: 'root'
})
export class WareHouseService {
    private dbPath = '/warehouse';
    warehouseRef: AngularFirestoreCollection<WareHouse>;

  constructor(private db: AngularFirestore) {
    this.warehouseRef = db.collection(this.dbPath);
   }

   getAll(): AngularFirestoreCollection<WareHouse> {
    return this.warehouseRef;
  }

  create(warehouse: WareHouse): any {
    return this.warehouseRef.add({ ...warehouse });
  }

  update(id: string, data: any): Promise<void> {
    return this.warehouseRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.warehouseRef.doc(id).delete();
  }
}
