import {Component, OnInit} from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import {AF} from '../../providers/af';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public newMessage: string;
  public messages:  AngularFireList<any>;

  constructor(public afService: AF) {
    // this.messages = this.afService.messages;
  }

  ngOnInit() {}

  sendMessage() {
    this.newMessage = '';
  }

  isYou(email) {
    if (email === this.afService.email) {
      return true;
    } else {
      return false;
    }
  }

  isMe(email) {
    if (email === this.afService.email) {
      return false;
    } else {
      return true;
    }
  }
}
