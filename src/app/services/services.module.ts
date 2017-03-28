import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesSearchComponent, ServicesEditComponent } from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServicesSearchComponent, ServicesEditComponent]
})
export class ServicesModule { }
