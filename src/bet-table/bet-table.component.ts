import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Bet } from '../shared/bet';
import { Outcome } from '../shared/outcome';
import { BetType } from '../shared/bet-type.enum';

@Component({
  selector: 'app-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.css']
})
export class BetTableComponent implements OnInit {
  displayedColumns= ['Number', 'Date', 'Match', 'Placed_bet', 'Odds', 'Stake', 'Outcome', 'Value_Return', 'Details'];
  dataSource: BetsDataSource;
  bet = new Bet();
  public data = betsSource;
  public outcomes = Outcome;
  public bettypes = BetType;

  ngOnInit() {
    for ( const bet of this.data) {
      this.setBet(bet);
    }
    this.dataSource = new BetsDataSource(betsSource);
  }

  setBet(bet: Bet): void {
    const betSize = bet.stake * 10;

    if (bet.outcome === Outcome.win) {
      bet.valueReturn = betSize * bet.odds - betSize;
      console.log('Won: ' + bet.valueReturn);
    } else if (bet.outcome === Outcome.halfwin) {
      bet.valueReturn = ((betSize * bet.odds - betSize) * 0.5);
      console.log('Half won: ' + bet.valueReturn);
    } else if (bet.outcome === Outcome.halfloss) {
      bet.valueReturn = -betSize / 2;
      console.log('Half lost: ' + bet.valueReturn);
    } else if (bet.outcome === Outcome.loss) {
      bet.valueReturn = -betSize;
      console.log('Lost: ' + bet.valueReturn);
    } else if (bet.outcome === Outcome.push || bet.outcome === Outcome._void || bet.outcome === Outcome.awaiting) {
      bet.valueReturn = 0;
    }
  }

  determineBet(bet: Bet, $event): void {
    const betSize = bet.stake * 10;

    if ($event === 'win') {
      bet.valueReturn = betSize * bet.odds - betSize;
       console.log('Won: ' + bet.valueReturn);
    } else if (Outcome[$event] === Outcome.halfwin) {
      bet.valueReturn = ((betSize * bet.odds - betSize) * 0.5);
        console.log('Half won: ' + bet.valueReturn);
    } else if (Outcome[$event] === Outcome.halfloss) {
      bet.valueReturn = -betSize / 2;
        console.log('Half lost: ' + bet.valueReturn);
    } else if (Outcome[$event] === Outcome.loss) {
      bet.valueReturn = -betSize;
         console.log('Lost: ' + bet.valueReturn);
    } else if (Outcome[$event] === Outcome.push || Outcome[$event] === Outcome._void || Outcome[$event] === Outcome.awaiting) {
      bet.valueReturn = 0;
    }
  }
}

export const betsSource: Bet[] = [
  {
    id: 1,
    matchdate: '29.10.2017',
    match: 'Monterrey v Club America',
    placed_bet: BetType.Over_2_75,
    odds: 2.125,
    stake: 1,
    outcome: Outcome.loss,
    league: 'Mexico',
    result: '2-0',
    red_card: true,
    missed_penalty: false,
    valueReturn: 0
  },
  {
    id: 2,
    matchdate: '29.10.2017',
    match: 'Monterrey v Club America',
    placed_bet: BetType.BTTS,
    odds: 2.2,
    stake: 1,
    outcome: Outcome.loss,
    league: 'Mexico',
    result: '2-0',
    red_card: true,
    missed_penalty: false,
    valueReturn: 0
  },
  {
    id: 3,
    matchdate: '29.10.2017',
    match: 'Atletico Paranaense v Chapecoense',
    placed_bet: BetType.Over_1,
    odds: 2.15,
    stake: 1,
    outcome: Outcome.loss,
    league: 'Brazil',
    result: '0-0',
    red_card: false,
    missed_penalty: false,
    valueReturn: 0
  },
  {
    id: 4,
    matchdate: '29.10.2017',
    match: 'Benevento v Lazio',
    placed_bet: BetType.AWAY_OVER_2_5,
    odds: 2,
    stake: 2,
    outcome: Outcome.win,
    league: 'Italy',
    result: '1-5',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 5,
    matchdate: '29.10.2017',
    match: 'Getafe v Real Sociedad',
    placed_bet: BetType.Over_2_25,
    odds: 1.95,
    stake: 2,
    outcome: Outcome.win,
    league: 'Spain',
    result: '2-1',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 6,
    matchdate: '29.10.2017',
    match: 'Sønderjyske v Hobro',
    placed_bet: BetType.Over_2_5,
    odds: 1.8,
    stake: 1,
    outcome: Outcome.loss,
    league: 'Denmark',
    result: '1-1',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 7,
    matchdate: '29.10.2017',
    match: 'Sandnes Ulf v Kongsvinger',
    placed_bet: BetType.Over_2_75,
    odds: 2,
    stake: 1,
    outcome: Outcome.halfwin,
    league: 'Norway',
    result: '0-3',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 8,
    matchdate: '29.10.2017',
    match: 'Konyaspor v Osmanlispor FK',
    placed_bet: BetType.Over_1,
    odds: 3.45,
    stake: 1,
    outcome: Outcome.push,
    league: 'Turkey',
    result: '1.0',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 9,
    matchdate: '29.10.2017',
    match: 'Karabukspor v Sivasspor',
    placed_bet: BetType.Over_1,
    odds: 3.45,
    stake: 1,
    outcome: Outcome.push,
    league: 'Turkey',
    result: '0-1',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 10,
    matchdate: '29.10.2017',
    match: 'Lyngby v Midtjylland',
    placed_bet: BetType.Over_3,
    odds: 1.975,
    stake: 1,
    outcome: Outcome.win,
    league: 'Denmark',
    result: '2-2',
    red_card: true,
    missed_penalty: false
  },
  {
    id: 11,
    matchdate: '29.10.2017',
    match: 'Sparta Rotterdam v FC Groningen',
    placed_bet: BetType.Over_2_75,
    odds: 1.925,
    stake: 1,
    outcome: Outcome.halfwin,
    league: 'Netherlands',
    result: '2-1',
    red_card: true,
    missed_penalty: false
  },
  {
    id: 12,
    matchdate: '29.10.2017',
    match: 'Udinese v Atalanta',
    placed_bet: BetType.BTTS,
    odds: 1.7,
    stake: 1,
    outcome: Outcome.win,
    league: 'Italy',
    result: '2-1',
    red_card: false,
    missed_penalty: true
  },
  {
    id: 13,
    matchdate: '29.10.2017',
    match: 'Napoli v Sassuolo',
    placed_bet: BetType.BTTS,
    odds: 1.95,
    stake: 1,
    outcome: Outcome.win,
    league: 'Italy',
    result: '3-1',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 14,
    matchdate: '29.10.2017',
    match: 'Udinese v Atalanta',
    placed_bet: BetType.Over_2,
    odds: 2.04,
    stake: 1,
    outcome: Outcome.win,
    league: 'Italy',
    result: '2-1',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 15,
    matchdate: '29.10.2017',
    match: 'Heerenveen v AZ',
    placed_bet: BetType.Over_3,
    odds: 1.825,
    stake: 1,
    outcome: Outcome.push,
    league: 'Netherlands',
    result: '1-2',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 16,
    matchdate: '29.10.2017',
    match: 'Girona v Real Madrid',
    placed_bet: BetType.BTTS,
    odds: 1.8,
    stake: 1,
    outcome: Outcome.win,
    league: 'Spain',
    result: '2-1',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 17,
    matchdate: '29.10.2017',
    match: 'Leicester v Everton',
    placed_bet: BetType.BTTS,
    odds: 1.75,
    stake: 1,
    outcome: Outcome.loss,
    league: 'England',
    result: '2-0',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 18,
    matchdate: '29.10.2017',
    match: 'Braga v Chaves',
    placed_bet: BetType.Over_2,
    odds: 2.1,
    stake: 1,
    outcome: Outcome.loss,
    league: 'Portugal',
    result: '1-0',
    red_card: false,
    missed_penalty: false
  },
  {
    id: 19,
    matchdate: '29.10.2017',
    match: 'Standard Liege v Waasland-Beveren',
    placed_bet: BetType.Over_2_75,
    odds: 2,
    stake: 1,
    outcome: Outcome.win,
    league: 'Belgium',
    result: '3-1',
    red_card: false,
    missed_penalty: true
  },
  {
    id: 20,
    matchdate: '29.10.2017',
    match: 'Tenerife v Osasuna',
    placed_bet: BetType.BTTS,
    odds: 2.25,
    stake: 1,
    outcome: Outcome.loss,
    league: 'Spain',
    result: '0-0',
    red_card: false,
    missed_penalty: true
  },
  {
    id: 21,
    matchdate: '29.10.2017',
    match: 'Malaga v Celta Vigo',
    placed_bet: BetType.Over_2_5,
    odds: 1.95,
    stake: 1,
    outcome: Outcome.win,
    league: 'Spain',
    result: '2-1',
    red_card: false,
    missed_penalty: false
  }
];



export class BetsDataSource extends DataSource<Bet> {

  constructor(private bets: Bet[]) {
    super();
  }

  connect(): Observable<Bet[]> {
    return Observable.of(this.bets);
  }

  disconnect() {}
}
