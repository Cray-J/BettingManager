import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {Bet} from '../shared/bet';
import {Outcome} from '../shared/outcome';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AF} from '../providers/af';

@Component({
  selector: 'app-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.css']
})
export class BetTableComponent implements OnInit {
  displayedColumns= ['Number', 'Date', 'Match', 'Odds', 'Stake', 'Outcome', 'Value_Return', 'Details'];
  public bets: AngularFireList<Bet>;
  datasource: BetsDataSource;

  // public outcomes = Outcome;
  // public bettypes = BetType;

  constructor(public afService: AF) {
    this.afService = afService;
  }


  ngOnInit() {
  }
}

export class BetsDataSource extends DataSource<any> {
  public dbBets: Observable<any>;
  public afService: AF;

  constructor() {
    super();
    // this.afService = afService;
  }

  connect(): Observable<any[]> {
    console.log('connected!');
    // return Observable.of(bets);
    // console.log(this.dbBets);
    return this.dbBets;
  }

  disconnect() {}
}
