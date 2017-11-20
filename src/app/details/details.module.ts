import {NgModule} from '@angular/core';
import 'hammerjs';

import {BetTableModule} from '../bet-table/bet-table.module';
import {DetailsComponent} from './details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  exports: [
    DetailsComponent
  ],
  imports: [
    SharedModule,
    BetTableModule
  ],

})
export class DetailsModule {}
