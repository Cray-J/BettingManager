
import {Component} from '@angular/core';
import {BetTableComponent} from '../bet-table/bet-table.component';
import { Outcome } from '../shared/outcome';
import {AF} from "../providers/af";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  // betTableComponent = new BetTableComponent();
  //
  // getWins(): number {
  //   return this.getOutcomeType(Outcome.win);
  // }
  //
  // getHalfWins(): number {
  //   return this.getOutcomeType(Outcome.halfwin);
  // }
  //
  // getHalfLosses(): number {
  //   return this.getOutcomeType(Outcome.halfloss);
  // }
  //
  // getLosses(): number {
  //   return this.getOutcomeType(Outcome.loss);
  // }
  //
  // getPushes(): number {
  //   return this.getOutcomeType(Outcome.push);
  // }
  //
  // getStaked(): number {
  //   let total = 0;
  //   for (const bet of this.betTableComponent.data) {
  //     total += bet.stake * 10;
  //   }
  //   return total;
  // }
  //
  // getSettledStaked(): number {
  //   let total = 0;
  //   for (const bet of this.betTableComponent.data) {
  //     if (bet.outcome !== Outcome.awaiting) {
  //       total += bet.stake * 10;
  //
  //     }
  //   }
  //   return total;
  // }
  //
  // getAwaiting(): number {
  //   let total = 0;
  //   for (const bet of this.betTableComponent.data) {
  //     if (bet.outcome !== Outcome.awaiting) {
  //       total += bet.stake;
  //     }
  //   }
  //   return total;
  // }
  //
  // getROI(): number {
  //   return (this.getReturned() / (this.getSettledStaked())) * 100;
  // }
  //
  // public getOutcomeType(type: Outcome): number {
  //   let wins = 0;
  //
  //   for (const bet of this.betTableComponent.data) {
  //     if (bet.outcome === type) {
  //       wins += 1;
  //     }
  //   }
  //   return wins;
  // }
  //
  // getReturned(): number {
  //   let total = 0;
  //
  //   for (const bet of this.betTableComponent.data) {
  //     const betSize = bet.stake * 10;
  //
  //     if (bet.outcome === Outcome.win) {
  //       total += betSize * bet.odds;
  //       // console.log('Won: ' + betSize * bet.odds);
  //     } else if (bet.outcome === Outcome.halfwin) {
  //       total += betSize * (bet.odds * 0.5);
  //       // console.log('Half won: ' + ((betSize * bet.odds) - betSize) * 0.5);
  //     } else if (bet.outcome === Outcome.halfloss) {
  //       total -= betSize * ( bet.odds  * 0.5);
  //       // console.log('Half lost: ' + ((betSize * bet.odds) - betSize) * 0.5);
  //     } else if (bet.outcome === Outcome.loss) {
  //       total -= betSize;
  //       // console.log('Lost: ' + betSize);
  //     }
  //   }
  //   return total;
  // }
  //
  // getNumberOfBets(): number {
  //   return this.betTableComponent.data.length;
  // }
}
