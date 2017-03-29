import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DialogModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    DialogModule,
  ]
})
export class SharedModule { }
