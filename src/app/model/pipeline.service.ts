import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { BPEApplication } from './share.model';
import { Pipeline } from './pipeline.model';
import { Logger } from '../util/logger.service';
import { StaticDataSource as DataSource } from './static.datasource';
import { AppState, PipelineSearchForm } from './pipeline.reducer';
import * as action from './pipeline.action';

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

  read(searchCriterion?: PipelineSearchForm) {

    const { bpeApplicationSelected, pipelineTypeSelected } = searchCriterion;

    this.store.dispatch(new action.PipelineSearchFormBPEApplicationAction(bpeApplicationSelected));
    this.store.dispatch(new action.PipelineSearchFormPipelineTypeAction(pipelineTypeSelected));
    //this.store.dispatch({ type: BPE_APPLICATION_SELECTED, payload: bpeApplication });

    this.dataSource.getPipelines()
      .catch(error => Observable.throw(error))
      .subscribe(
        data => { 
          const resultAfterFilter = data.filter(
            x => {
              let result = true;

              if (bpeApplicationSelected) {
                result = result && (x.application === bpeApplicationSelected);
              } 
              
              if (pipelineTypeSelected) {
                result = result && (x.type === pipelineTypeSelected);
              }

              return result;
            }  
          ); 

          this.store.dispatch(new action.PipelineLoadAction(resultAfterFilter));
          //this.store.dispatch({type: PIPELINE_LOAD, payload: resultAfterFilter});
        },
        error => this.errorSubject.next(error),
      );
  }

  delete(pipeline: Pipeline) {
    // TODO remote delete request
    this.store.dispatch(new action.PipelineDeleteAction(pipeline));
    //this.store.dispatch({ type: PIPELINE_DELETE, payload: pipeline}); 
  }

  randomError() {
    this.errorSubject.next('Test Error at ' + new Date(Date.now()));
  }
}
