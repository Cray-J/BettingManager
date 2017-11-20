import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatCardModule, MatGridListModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import 'hammerjs';

import {BetTableModule} from '../bet-table/bet-table.module';
import {DetailsComponent} from './details.component';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  exports: [
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    BetTableModule,
    MatGridListModule
  ],

})
export class DetailsModule {}
