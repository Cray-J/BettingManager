import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Bet } from '../shared/bet';

@Injectable()
export class AF {
  public bets: AngularFireList<Bet>;
  // public email: string;
  public betsList: Observable<any>;
  public betsTest: Bet[];

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    console.log('in service!');
    this.betsList = db.list('bets').valueChanges();
    // this.betsList.subscribe(result => this.betsTest.push(new Bet().fromJson(result)));
    // console.log('BETSLIST SIZE: ' + this.betsTest.length);

  }
  //
  // /**
  //  * Logs in the user
  //  * @returns
  //  */
  // loginWithGoogle() {
  //   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  //
  // /**
  //  * Logs out the current user
  //  */
  // logout() {
  //   this.afAuth.auth.signOut();
  // }

}
