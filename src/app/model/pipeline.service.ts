import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { BPEApplication } from './share.model';
import { Pipeline } from './pipeline.model';
import { Logger } from '../util/logger.service';
import { StaticDataSource as DataSource } from './static.datasource';
import { AppState, PIPELINE_LOAD, PIPELINE_DELETE, BPE_APPLICATION_SELECTED } from './pipeline.reducer';

@Injectable()
export class PipelineService {

  error$: Observable<any>;
  private errorSubject: Subject<any>;

  constructor(
    private dataSource: DataSource,
    private store: Store<AppState>
  ) { 
    this.errorSubject = new Subject();
    this.error$ = this.errorSubject.asObservable();
  }

  read(bpeApplication?: BPEApplication) {
    this.store.dispatch({ type: BPE_APPLICATION_SELECTED, payload: bpeApplication });
    this.dataSource.getPipelines()
      .catch(error => Observable.throw(error))
      .subscribe(
        data => { 
          const resultAfterFilter = data.filter(
            x => {
              if (bpeApplication) {
                return x.application === bpeApplication;
              } else {
                return true;
              }
            }  
          ); 

          this.store.dispatch({type: PIPELINE_LOAD, payload: resultAfterFilter});
        },
        error => this.errorSubject.next(error),
      );
  }

  delete(pipeline: Pipeline) {
    // TODO remote delete request
    this.store.dispatch({ type: PIPELINE_DELETE, payload: pipeline}); 
  }

  randomError() {
    this.errorSubject.next('Test Error at ' + new Date(Date.now()));
  }
}
