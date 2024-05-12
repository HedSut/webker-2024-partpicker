import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Memory } from '../../models/Memory';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  collectionName = environment.memoryCollection;

  constructor(private afs: AngularFirestore) { }

  createMemory(memory: Memory) {
    memory.id = this.afs.createId();
    return this.afs.collection<Memory>(this.collectionName).doc(memory.id).set(memory);
  }

  getAllMemories() {
    return this.afs.collection<Memory>(this.collectionName).valueChanges();
  }

  getMemoryById(id: string) {
    return this.afs.collection<Memory>(this.collectionName).doc(id).valueChanges();
  }

  getMemoryByName(name: string) {
    return this.afs.collection<Memory>(this.collectionName, ref => ref.where('name', '==', name)).valueChanges();
  }

  updateMemory(memory: Memory) {
    return this.afs.collection<Memory>(this.collectionName).doc(memory.id).set(memory);
  }

  deleteMemory(id: string) {
    return this.afs.collection<Memory>(this.collectionName).doc(id).delete();
  }
}
