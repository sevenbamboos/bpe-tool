import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logger, LOGLEVEL } from './logger.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: Logger, useValue: new Logger(LOGLEVEL.INFO)}
  ]
})
export class UtilModule { }
