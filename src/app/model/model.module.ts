import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';
import { PipelineService } from './pipeline.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [StaticDataSource, PipelineService]
})
export class ModelModule { }
