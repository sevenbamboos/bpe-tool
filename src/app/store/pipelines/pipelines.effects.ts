import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { go } from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import * as rx from 'rxjs';

import * as actions from './pipelines.actions';
import { PipelinesService } from './pipelines.service';

@Injectable()
export class Effects {

  //@Effect() load$: rx.Observable<Action>;
  //@Effect() delete$: rx.Observable<Action>;
  @Effect() query$: rx.Observable<Action>;
  //@Effect() save$: rx.Observable<Action>;

  constructor(
    private actions$: Actions,
    private service: PipelinesService
  ) {

    this.query$ = actions$
      .ofType(actions.ActionTypes.QUERY)
      .map((action: actions.PipelinesQueryAction) => action.payload)
      .switchMap((payload: actions.PipelinesQueryForm) => 
        service.query(payload.connectivityGroup, payload.includeInActive)
          .map((results) => new actions.PipelinesQuerySuccessAction(results))
          .catch((error) => rx.Observable.of(new actions.PipelinesQueryFailureAction(error)))
      );
  }
}