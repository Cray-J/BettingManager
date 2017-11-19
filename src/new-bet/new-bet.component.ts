import { Component, OnInit} from '@angular/core';
import { Bet } from '../shared/bet';
import * as firebase from 'firebase';
import {Outcome} from '../shared/outcome';
import {AF} from '../providers/af';
import {BetType} from '../shared/bet-type.enum';
import {Bookie} from "../shared/bookie.enum";

@Component({
  selector: 'app-new-bet',
  templateUrl: './new-bet.component.html',
  styleUrls: ['./new-bet.component.css']
})
export class NewBetComponent implements OnInit {
  bet = new Bet();
  afService: AF;

  public bettypes = BetType;
  public bookies = Bookie;

  constructor(public afService1: AF) {
    // this.bets = afService1.betsList;
    this.afService = afService1;
  }

  ngOnInit() {

  }
  onSubmit(bet: Bet) {
    this.writeNewBet(bet);
  }

   writeNewBet(bet: Bet) {
    firebase.database().ref('bets/').set({
      // id: bet.id,
      match: bet.match,
      matchdate: bet.matchdate,
      selection: bet.selection,
      bookie: bet.bookie,
      odds: bet.odds,
      stake: bet.stake,
      outcome: Outcome.awaiting,
      league: bet.league,
      result: ' ',
      live: bet.live,
      red_card: bet.live,
      missed_penalty: bet.missed_penalty,
      valueReturn: -1
    });
  }

}
