import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { DetailScreenComponent } from './detail-screen/detail-screen.component';
import { SearchFormComponent } from './search-screen/search-form.component';
import { SearchResultComponent } from './search-screen/search-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchScreenComponent, DetailScreenComponent, SearchFormComponent, SearchResultComponent],
  exports: [SearchScreenComponent, DetailScreenComponent]
})
export class PipelineModule { }

