import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [StaticDataSource]
})
export class ModelModule { }
