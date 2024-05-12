import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Motherboard } from '../../models/Motherboard';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotherboardService {
  collectionName = environment.motherboardCollection;

  constructor(private afs: AngularFirestore) { }

  createMotherboard(motherboard: Motherboard) {
    motherboard.id = this.afs.createId();
    return this.afs.collection<Motherboard>(this.collectionName).doc(motherboard.id).set(motherboard);
  }

  getAllMotherboards() {
    return this.afs.collection<Motherboard>(this.collectionName).valueChanges();
  }

  getMotherboardById(id: string) {
    return this.afs.collection<Motherboard>(this.collectionName).doc(id).valueChanges();
  }

  getMotherboardByName(name: string) {
    return this.afs.collection<Motherboard>(this.collectionName, ref => ref.where('name', '==', name)).valueChanges();
  }

  getMotherboardSubset(manufacturer: string, socket: string) {
    return this.afs.collection<Motherboard>(this.collectionName, ref => ref.where('name', '>=', manufacturer).where('name', '<=', manufacturer).where('socket', '==', socket).orderBy('name')).valueChanges();
  }

  updateMotherboard(motherboard: Motherboard) {
    return this.afs.collection<Motherboard>(this.collectionName).doc(motherboard.id).set(motherboard);
  }

  deleteMotherboard(id: string) {
    return this.afs.collection<Motherboard>(this.collectionName).doc(id).delete();
  }
}
