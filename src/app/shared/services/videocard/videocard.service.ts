import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Videocard } from '../../models/Videocard';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VideocardService {
  collectionName: string;

  constructor(private afs: AngularFirestore) {
    this.collectionName = environment.videocardCollection;
   }

  createVideocard(videocard: Videocard) {
    videocard.id = this.afs.createId();
    return this.afs.collection<Videocard>(this.collectionName).doc(videocard.id).set(videocard);
  }

  getAllVideocards() {
    return this.afs.collection<Videocard>(this.collectionName).valueChanges();
  }

  getVideocardById(id: string) {
    return this.afs.collection<Videocard>(this.collectionName).doc(id).valueChanges();
  }

  getVideocardByName(name: string) {
    return this.afs.collection<Videocard>(this.collectionName, ref => ref.where('name', '==', name)).valueChanges();
  }

  async updateVideocard(videocard: Videocard) {
    return await this.afs.collection<Videocard>(this.collectionName).doc(videocard.id).set(videocard);
  }

  deleteVideocard(id: string) {
    return this.afs.collection<Videocard>(this.collectionName).doc(id).delete();
  }
}
