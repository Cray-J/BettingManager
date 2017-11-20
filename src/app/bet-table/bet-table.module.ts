import {NgModule} from '@angular/core';
import {BetTableComponent} from './bet-table.component';

import 'hammerjs';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    BetTableComponent
  ],
  exports: [
    BetTableComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class BetTableModule { }
