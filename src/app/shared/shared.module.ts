import {NgModule} from '@angular/core';
import {KeysPipe} from './keys.pipe';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatOptionModule, MatSelectModule, MatTableModule,
  MatTabsModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatCardModule,
  MatGridListModule
];


@NgModule({
  declarations: [
    KeysPipe
  ],
  exports: [
    KeysPipe,
    FormsModule,
    BrowserModule,
    ...materialModules,
    BrowserAnimationsModule

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ...materialModules,
    BrowserAnimationsModule
  ],
})
export class SharedModule {}
