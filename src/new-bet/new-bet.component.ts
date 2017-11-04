import { Component, OnInit} from '@angular/core';
import { Bet } from '../shared/bet';

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
    alert('New bet created ' + bet.match);
  }





}
