import {Component, OnInit} from '@angular/core';
import {Bet} from '../shared/bet';
import * as firebase from 'firebase';
import {Outcome} from '../shared/outcome';
import {AF} from '../providers/af';
import {BetType} from '../shared/bet-type.enum';
import {Bookie} from '../shared/bookie.enum';

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
  public outcomes = Outcome;

  constructor(public afService1: AF) {
    this.afService = afService1;
  }

  ngOnInit() {

  }

  onSubmit(bet: Bet) {
    this.writeNewBet(bet);
  }

  settleBet(bet: Bet): void {
    const betSize = bet.stake * 10;
    if (bet.outcome === 'win') {
      bet.valueReturn = betSize * bet.odds - betSize;
    } else if (bet.outcome === 'halfwin') {
      bet.valueReturn = (betSize * bet.odds - betSize) * 0.5;
    } else if (bet.outcome === 'halfloss') {
      bet.valueReturn = -(betSize * 0.5);
    } else if (bet.outcome === 'loss') {
      bet.valueReturn = -betSize;
    } else if ( bet.outcome === 'void' || bet.outcome === 'push') {
      bet.valueReturn = 0;
    }
  }

  writeNewBet(bet: Bet) {
    firebase.database().ref('bets/').push({
      match: bet.match,
      matchdate: bet.matchdate,
      selection: bet.selection,
      bookie: bet.bookie,
      odds: bet.odds,
      stake: bet.stake,
      outcome: bet.outcome,
      league: bet.league,
      result: bet.result,
      live: bet.live,
      red_card: bet.live,
      missed_penalty: bet.missed_penalty,
      valueReturn: bet.valueReturn
    });
  }

}
