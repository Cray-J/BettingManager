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
import {AngularFireModule} from 'angularfire2';
import {AF} from '../providers/af';
import {HomePageComponent} from './home-page/home-page.component';
import 'hammerjs';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireAuth} from "angularfire2/auth";

import {AppComponent} from './app.component';
import {DetailsModule} from '../details/details.module';
import {BetTableModule} from '../bet-table/bet-table.module';
import {MyFormComponent} from '../my-form/my-form.component';
import {NewBetComponent} from '../new-bet/new-bet.component';
import {RunningBetsModule} from './running-bets/running-bets.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {AngularFireDatabase} from "angularfire2/database";

export const firebaseConfig = {
  apiKey: 'AIzaSyDy-Br5WtJFCHRzj3maVQF6UO7ltgbMBPM',
  authDomain: 'bettingmanager-3161.firebaseapp.com',
  databaseURL: 'https://bettingmanager-3161.firebaseio.com',
  storageBucket: 'bettingmanager-3161.appspot.com',
  messagingSenderId: '175148907457'
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    NewBetComponent,
    LoginPageComponent,
    HomePageComponent
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
    RunningBetsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AF,
              AngularFireAuth,
              AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
