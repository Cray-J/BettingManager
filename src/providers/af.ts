import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";

import * as firebase from 'firebase/app';

@Injectable()
export class AF {
  user: Observable<firebase.User>;
  items: AngularFireList<any[]>;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.items = db.list('items');
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
