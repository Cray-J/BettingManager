import { NgModule } from '@angular/core';
import { BetTableComponent } from './bet-table.component';
import {MatTableModule} from "@angular/material";
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    BetTableComponent
  ],
  exports: [
    BetTableComponent
  ],
  imports: [
    MatTabsModule,
    MatTableModule
  ]
})
export class BetTableModule { }
