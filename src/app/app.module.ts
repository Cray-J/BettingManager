import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import 'hammerjs';

import {AppComponent} from './app.component';
import {DetailsModule} from '../details/details.module';
import {BetTableModule} from '../bet-table/bet-table.module';
import {MyFormComponent} from '../my-form/my-form.component';
import {NewBetComponent} from '../new-bet/new-bet.component';
import {RunningBetsModule} from './running-bets/running-bets.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    NewBetComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    DetailsModule,
    BetTableModule,
    RunningBetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
