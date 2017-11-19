import {NgModule} from '@angular/core';
import {RunningBetsComponent} from './running-bets.component';
import {MatInputModule, MatTableModule} from '@angular/material';
import {BetTableModule} from '../../bet-table/bet-table.module';

@NgModule({
  declarations: [
    RunningBetsComponent
  ],
  exports: [
    RunningBetsComponent
  ],
  imports: [
    MatTableModule,
    MatInputModule,
    BetTableModule
  ]
})
export class RunningBetsModule {}
