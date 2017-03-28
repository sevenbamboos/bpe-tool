import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelinesEditComponent, PipelinesSearchComponent } from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PipelinesEditComponent, PipelinesSearchComponent]
})
export class PipelinesModule { }
