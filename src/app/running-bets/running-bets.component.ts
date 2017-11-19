import {Component} from '@angular/core';
// import {BetsDataSource} from "../../bet-table/bet-table.component";

@Component({
  selector: 'app-running-bets',
  templateUrl: './running-bets.component.html',
  styleUrls: ['./running-bets.component.scss']
})
export class RunningBetsComponent {
  displayedColumns= ['Number', 'Date', 'Match'];
  // bets: BetsDataSource;

}
