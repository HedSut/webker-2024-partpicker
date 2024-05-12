import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Memory } from '../../models/Memory';
import { environment } from '../../../../environments/environment';
import { Motherboard } from '../../models/Motherboard';
import { Processor } from '../../models/Processor';
import { Videocard } from '../../models/Videocard';
import { Powersupply } from '../../models/Powersupply';

@Injectable({
  providedIn: 'root'
})
export class PagerService {
  memoryPages: Array<string> = [];
  motherboardPages: Array<string> = [];
  powersupplyPages: Array<string> = [];
  processorPages: Array<string> = [];
  videocardPages: Array<string> = [];

  constructor(private afs: AngularFirestore) { }

  getFirstPage(collectionName: string) {
    return this.afs.collection(collectionName, ref => ref.orderBy("id").limit(20)).valueChanges();
  }

  getMemoryPage(page: number) {
    return this.afs.collection<Memory>(environment.memoryCollection, ref => ref.orderBy("id").startAfter(this.memoryPages[page - 1] ?? 0).limit(20)).valueChanges();
  }

  getMotherboardPage(page: number) {
    return this.afs.collection<Motherboard>(environment.motherboardCollection, ref => ref.orderBy("id").startAfter(this.motherboardPages[page - 1] ?? 0).limit(20)).valueChanges();
  }

  getProcessorPage(page: number) {
    return this.afs.collection<Processor>(environment.processorCollection, ref => ref.orderBy("id").startAfter(this.processorPages[page - 1] ?? 0).limit(20)).valueChanges();
  }

  getVideocardPage(page: number) {
    return this.afs.collection<Videocard>(environment.videocardCollection, ref => ref.orderBy("id").startAfter(this.videocardPages[page - 1] ?? 0).limit(20)).valueChanges();
  }

  getPowersupplyPage(page: number) {
    return this.afs.collection<Powersupply>(environment.powersupplyCollection, ref => ref.orderBy("id").startAfter(this.powersupplyPages[page - 1] ?? 0).limit(20)).valueChanges();
  }


  addPage(collectionName: string, pagestartid: string) {
    if (collectionName == environment.memoryCollection) {
      if (this.memoryPages.includes(pagestartid)) { return; }
      this.memoryPages.push(pagestartid);
    } 
    else if (collectionName == environment.motherboardCollection) {
      if (this.motherboardPages.includes(pagestartid)) { return; }
      this.motherboardPages.push(pagestartid);
    } 
    else if (collectionName == environment.processorCollection) {
      if (this.processorPages.includes(pagestartid)) { return; }
      this.processorPages.push(pagestartid);
    } 
    else if (collectionName == environment.videocardCollection) {
      if (this.videocardPages.includes(pagestartid)) { return; }
      this.videocardPages.push(pagestartid);
    } 
    else if (collectionName == environment.powersupplyCollection) {
      if (this.powersupplyPages.includes(pagestartid)) { return; }
      this.powersupplyPages.push(pagestartid);
    }
  }
}
