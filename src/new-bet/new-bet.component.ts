import { Component, OnInit} from '@angular/core';
import { Bet } from '../bet/bet';

@Component({
  selector: 'app-new-bet',
  templateUrl: './new-bet.component.html',
  styleUrls: ['./new-bet.component.css']
})
export class NewBetComponent implements OnInit {
  bet = new Bet();
  constructor() {}



  ngOnInit() {

  }
  onSubmit() {
    alert('New bet created');
  }


}
