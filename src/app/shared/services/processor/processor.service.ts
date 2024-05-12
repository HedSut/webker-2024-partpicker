import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Processor } from '../../models/Processor';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessorService {
  collectionName = environment.processorCollection;

  constructor(private afs: AngularFirestore) { }

  createProcessor(processor: Processor) {
    processor.id = this.afs.createId();
    return this.afs.collection<Processor>(this.collectionName).doc(processor.id).set(processor);
  }

  getAllProcessor() {
    return this.afs.collection<Processor>(this.collectionName).valueChanges();
  }

  getProcessorById(id: string) {
    return this.afs.collection<Processor>(this.collectionName).doc(id).valueChanges();
  }

  getProcessorByName(name: string) {
    return this.afs.collection<Processor>(this.collectionName, ref => ref.where('name', '==', name)).valueChanges();
  }

  updateProcessor(processor: Processor) {
    return this.afs.collection<Processor>(this.collectionName).doc(processor.id).set(processor);
  }

  deleteProcessor(id: string) {
    return this.afs.collection<Processor>(this.collectionName).doc(id).delete();
  }
}
