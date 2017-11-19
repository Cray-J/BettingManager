import {NgModule} from '@angular/core';
import {NewBetComponent} from './new-bet.component';
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
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    NewBetComponent,
  ],
  exports: [
    NewBetComponent
  ],
  imports: [
    MatTableModule,
    MatTabsModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]

})
export class NewBetModule {}
