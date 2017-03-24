import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable, Subject } from 'rxjs';
import { StaticDataSource as DataSource } from './static.datasource';
import { PipelineSearchForm } from './store';
import { Pipeline } from './pipeline.model';
import * as action from './pipeline.action';

@Injectable()
export class PipelineEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(action.ActionTypes.PipelineSearchActionType)
    .debounceTime(300)
    .map(toPayload)
    .switchMap((searchForm: PipelineSearchForm) => {
      const {bpeApplicationSelected, pipelineTypeSelected, inactiveChecked} = searchForm;
      return this.dataSource.getPipelines(bpeApplicationSelected, pipelineTypeSelected, inactiveChecked)
        .map(pipelines => new action.PipelineLoadAction(pipelines));
    });

  @Effect()
  toggleActive$: Observable<Action> = this.actions$
    .ofType(action.ActionTypes.PipelineActiveToggleActionType)
    .debounceTime(300)
    .map(toPayload)
    .switchMap((pipeline: Pipeline) => {
      return this.dataSource.toggleActive(pipeline)
        .map((x: Pipeline) => new action.PipelineActiveToggleSuccessAction(x));
    });

  constructor(
    private actions$: Actions,
    private dataSource: DataSource
  ) { }

}
