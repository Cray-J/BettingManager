import { Component, OnInit} from '@angular/core';
import { Bet } from '../shared/bet';
import { betsSource } from '../bet-table/bet-table.component';

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
  onSubmit(bet: Bet) {
    betsSource.push(bet);
    alert('New bet created ' + bet.match + '. Total bets are now: ' + betsSource.length);
  }





}
