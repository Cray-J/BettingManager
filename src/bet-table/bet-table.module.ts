import { NgModule } from '@angular/core';
import { BetTableComponent } from './bet-table.component';
import { MatOptionModule, MatTableModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
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
