import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {Bet} from '../shared/bet';
import {Outcome} from '../shared/outcome';
import {BetType} from '../shared/bet-type.enum';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.css']
})
export class BetTableComponent implements OnInit {
  displayedColumns= ['Number', 'Date', 'Match', 'Placed_bet', 'Odds', 'Stake', 'Outcome', 'Value_Return', 'Details'];
  public bets: AngularFireList<Bet>;
  public dbBets: Observable<Bet[]>;

  datasource: BetsDataSource;

  public outcomes = Outcome;
  public bettypes = BetType;

  constructor(afDb: AngularFireDatabase) {
    this.dbBets = afDb.list('bets').valueChanges();
  }


  ngOnInit() {
  }

  setBet(bet: Bet): void {
    const betSize = bet.stake * 10;

    if (bet.outcome === Outcome.win) {
      bet.valueReturn = betSize * bet.odds - betSize;
      // console.log('Won: ' + bet.valueReturn);
    } else if (bet.outcome === Outcome.halfwin) {
      bet.valueReturn = ((betSize * bet.odds - betSize) * 0.5);
      // console.log('Half won: ' + bet.valueReturn);
    } else if (bet.outcome === Outcome.halfloss) {
      bet.valueReturn = -betSize / 2;
      // console.log('Half lost: ' + bet.valueReturn);
    } else if (bet.outcome === Outcome.loss) {
      bet.valueReturn = -betSize;
      // console.log('Lost: ' + bet.valueReturn);
    } else if (bet.outcome === Outcome.push || bet.outcome === Outcome._void || bet.outcome === Outcome.awaiting) {
      bet.valueReturn = 0;
    }
  }

  determineBet(bet: Bet, $event): void {
    const betSize = bet.stake * 10;

    if ($event === 'win') {
      bet.valueReturn = betSize * bet.odds - betSize;
       // console.log('Won: ' + bet.valueReturn);
    } else if (Outcome[$event] === Outcome.halfwin) {
      bet.valueReturn = ((betSize * bet.odds - betSize) * 0.5);
        // console.log('Half won: ' + bet.valueReturn);
    } else if (Outcome[$event] === Outcome.halfloss) {
      bet.valueReturn = -betSize / 2;
        // console.log('Half lost: ' + bet.valueReturn);
    } else if (Outcome[$event] === Outcome.loss) {
      bet.valueReturn = -betSize;
         // console.log('Lost: ' + bet.valueReturn);
    } else if (Outcome[$event] === Outcome.push || Outcome[$event] === Outcome._void || Outcome[$event] === Outcome.awaiting) {
      bet.valueReturn = 0;
    }
  }
}

export class BetsDataSource extends DataSource<Bet> {

  constructor(private bets: Bet[]) {
    super();
  }

  connect(): Observable<Bet[]> {
    return Observable.of(this.bets);
  }

  disconnect() {}
}
