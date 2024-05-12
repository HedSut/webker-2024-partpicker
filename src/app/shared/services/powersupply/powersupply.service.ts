import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Powersupply } from '../../models/Powersupply';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PowersupplyService {
  collectionName = environment.powersupplyCollection;

  constructor(private afs: AngularFirestore) { }

  createPowersupply(powersupply: Powersupply) {
    powersupply.id = this.afs.createId();
    return this.afs.collection<Powersupply>(this.collectionName).doc(powersupply.id).set(powersupply);
  }

  getAllPowersupplies() {
    return this.afs.collection<Powersupply>(this.collectionName).valueChanges();
  }

  getPowersupplyById(id: string) {
    return this.afs.collection<Powersupply>(this.collectionName).doc(id).valueChanges();
  }

  getPowersupplyByName(name: string) {
    return this.afs.collection<Powersupply>(this.collectionName, ref => ref.where('name', '==', name)).valueChanges();
  }

  updatePowersupply(powersupply: Powersupply) {
    return this.afs.collection<Powersupply>(this.collectionName).doc(powersupply.id).set(powersupply);
  }

  deletePowersupply(id: string) {
    return this.afs.collection<Powersupply>(this.collectionName).doc(id).delete();
  }
}
