import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable, Subject } from 'rxjs';
import { StaticDataSource as DataSource } from './static.datasource';
import { PipelineSearchForm } from './pipeline.reducer';
import * as action from './pipeline.action';

@Injectable()
export class PipelineEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(action.ActionTypes.PipelineSearchActionType)
    .debounceTime(300)
    .map(toPayload)
    .switchMap((searchForm: PipelineSearchForm) => {
      const {bpeApplicationSelected, pipelineTypeSelected} = searchForm;
      return this.dataSource.getPipelines(bpeApplicationSelected, pipelineTypeSelected)
        .map(pipelines => new action.PipelineLoadAction(pipelines));
    });

  constructor(
    private actions$: Actions,
    private dataSource: DataSource
  ) { }

}
