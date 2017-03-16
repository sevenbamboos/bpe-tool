import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pipeline } from './pipeline.model';
import { Logger } from '../util/logger.service';
import { StaticDataSource as DataSource } from './static.datasource';

@Injectable()
export class PipelineService {

  readPipeline$: Observable<Pipeline[]>; 
  readPipelineSubject: Subject<Pipeline[]>;

  constructor(
    private dataSource: DataSource
  ) { 
    this.readPipelineSubject = new Subject();
    this.readPipeline$ = this.readPipelineSubject.asObservable();
  }

  read() {
    this.dataSource.getPipelines().subscribe(
      data => { 
        this.readPipelineSubject.next(data);
      }
    );
  }

}
