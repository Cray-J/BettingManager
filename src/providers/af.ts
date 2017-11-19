import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Bet } from '../shared/bet';

@Injectable()
export class AF {
  public bets: AngularFireList<Bet>;
  public email: string;
  public betsList: Observable<any>;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.betsList = db.list('bets').valueChanges();
    console.log(db.list('bets'));
    console.log(db.list('bet').valueChanges());

  }

  /**
   * Logs in the user
   * @returns
   */
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Logs out the current user
   */
  logout() {
    this.afAuth.auth.signOut();
  }

}
