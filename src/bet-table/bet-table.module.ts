import {NgModule} from '@angular/core';
import {betsSource, BetTableComponent} from './bet-table.component';
import {
  MatButtonModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';

import {BrowserModule} from '@angular/platform-browser';
import 'hammerjs';
import {FormsModule} from '@angular/forms';
import {KeysPipe} from './keys.pipe';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    BetTableComponent,
    KeysPipe
  ],
  exports: [
    BetTableComponent
  ],
  imports: [
    MatTabsModule,
    MatTableModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]
})
export class BetTableModule { }
