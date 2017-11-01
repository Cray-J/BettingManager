import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BetModule } from '../bet/bet.module';
import { MyFormComponent } from '../my-form/my-form.component';
import { BetTableModule } from '../bet-table/bet-table.module';
import { NewBetComponent } from '../new-bet/new-bet.component';
import {DetailsModule} from "../details/details.module";

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
    BetModule,
    BetTableModule,
    MatRadioModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    DetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
