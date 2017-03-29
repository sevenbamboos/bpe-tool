import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PipelinesEditComponent, PipelinesSearchComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [PipelinesEditComponent, PipelinesSearchComponent]
})
export class PipelinesModule { }
