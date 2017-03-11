import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { DetailScreenComponent } from './detail-screen/detail-screen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchScreenComponent, DetailScreenComponent],
  exports: [SearchScreenComponent, DetailScreenComponent]
})
export class PipelineModule { }

