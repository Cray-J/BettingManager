import {NgModule} from '@angular/core';
import {NewBetComponent} from './new-bet.component';
import 'hammerjs';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    NewBetComponent,
  ],
  exports: [
    NewBetComponent
  ],
  imports: [
    SharedModule
  ]

})
export class NewBetModule {}
