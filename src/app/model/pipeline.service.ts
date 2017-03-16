import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pipeline } from './pipeline.model';
import { Logger } from '../util/logger.service';
import { StaticDataSource as DataSource } from './static.datasource';

@Injectable()
export class PipelineService {

  readPipeline$: Observable<Pipeline[]>; 
  private readPipelineSubject: Subject<Pipeline[]>;

  error$: Observable<any>;
  private errorSubject: Subject<any>;

  constructor(
    private dataSource: DataSource
  ) { 
    this.readPipelineSubject = new Subject();
    this.readPipeline$ = this.readPipelineSubject.asObservable();

    this.errorSubject = new Subject();
    this.error$ = this.errorSubject.asObservable();
  }

  read() {
    this.dataSource.getPipelines()
      .subscribe(
        data => { 
          this.readPipelineSubject.next(data);
        },
        error => this.errorSubject.next(error)
      );
  }

  randomError() {
    this.errorSubject.next('Test Error at ' + new Date(Date.now()));
  }
}
