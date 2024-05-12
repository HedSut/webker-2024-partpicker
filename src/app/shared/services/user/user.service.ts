import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../../models/User';
import { Config } from '../../models/Config';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection = environment.userCollection;
  configCollection = environment.configCollection;

  constructor(private afs: AngularFirestore) { }

  async createUser(user: User) {
    user.id = this.afs.createId();
    return await this.afs.collection<User>(this.userCollection).doc(user.id).set(user);
  }

  getAllUsers() {
    return this.afs.collection<User>(this.userCollection).valueChanges();
  }

  getUserById(userid: string) {
    return this.afs.collection<User>(this.userCollection).doc(userid).valueChanges();
  }

  updateUser(user: User) {
    return this.afs.collection<User>(this.userCollection).doc(user.id).set(user);
  }

  deleteUser(userid: string) {
    return this.afs.collection<User>(this.userCollection).doc(userid).delete();
  }

  createConfig(config: Config, userid: string) {
    config.id = this.afs.createId();
    return this.afs.collection<User>(this.userCollection).doc(userid).
                    collection<Config>(this.configCollection).doc(config.id).set(config);
  }

  getUserConfigs(userid: string) {
    return this.afs.collection<User>(this.userCollection).doc(userid).
                    collection<Config>(this.configCollection).valueChanges();
  }

  getUserConfig(configid: string, userid: string) {
    return this.afs.collection<User>(this.userCollection).doc(userid).
                    collection<Config>(this.configCollection).doc(configid).valueChanges();
  }

  deleteConfig(configid: string, userid: string) {
    return this.afs.collection<User>(this.userCollection).doc(userid).
                    collection<Config>(this.configCollection).doc(configid).delete()
  }
}
