import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Bet } from '../bet/bet';

@Component({
  selector: 'app-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.css']
})
export class BetTableComponent {
  displayedColumns= ['Number', 'Date', 'Match', 'Placed_bet', 'Odds', 'Stake', 'Outcome', 'League', 'Result', 'Red_Card', 'Missed_Penalty'];
  dataSource = new BetsDataSource();

}

const data: Bet[] = [
  {id: 1, matchdate: '25.10.2017', match: 'Bologna v Lazio', placed_bet: 'BetType.OverTwoHalf', odds: 1.96,
  stake: 2, outcome: 'Outcome.Win', league: 'Serie A', result: '1-2', red_card: false, missed_penalty: true},
  {id: 1, matchdate: '25.10.2017', match: 'Bologna v Lazio', placed_bet: 'BetType.AwayTeamOverTwoAndHalf', odds: 1.96,
  stake: 1, outcome: 'Outcome.Loss', league: 'Serie A', result: '1-2', red_card: false, missed_penalty: true}
];


export class BetsDataSource extends DataSource<any> {
  connect(): Observable<Bet[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
