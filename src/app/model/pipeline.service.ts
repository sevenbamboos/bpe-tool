import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Pipeline } from './pipeline.model';
import { StaticDataSource as DataSource } from './static.datasource';

@Injectable()
export class PipelineService {

  readPipeline$: Observable<Pipeline[]>; 
  readPipelineSubject: Subject<Pipeline[]>;

  constructor(
    private dataSource: DataSource
  ) { 
    this.readPipelineSubject = new Subject();
  }

  read() {
    this.dataSource.getPipelines()
      .subscribe(x => {
      });
  }

}
