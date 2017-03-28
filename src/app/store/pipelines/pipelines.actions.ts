import { Action } from '@ngrx/store';
import * as rx from 'rxjs';

import { type } from '../util';
import { PipelinesList } from '../../core';

export class ActionTypes {
  static readonly LOAD = type('Pipelines Load');
  static readonly LOAD_SUCCESS = type('Pipelines Load Success');
  static readonly LOAD_FAILURE = type('Pipelines Load Failure');

  static readonly QUERY = type('Pipelines Query');
  static readonly QUERY_SUCCESS = type('Pipelines Query Success');
  static readonly QUERY_FAILURE = type('Pipelines Query Failure');

  static readonly DELETE = type('Pipelines Delete');
  static readonly DELETE_SUCCESS = type('Pipelines Delete Success');
  static readonly DELETE_FAILURE = type('Pipelines Delete Failure');

  static readonly DUPLICATE = type('Pipelines Duplicate');
  static readonly DUPLICATE_CONFIRM = type('Pipelines Duplicate Confirm');
  static readonly DUPLICATE_CANCEL = type('Pipelines Duplicate Cancel');

  static readonly START = type('Pipelines Start');
  static readonly START_SUCCESS = type('Pipelines Start Success');
  static readonly START_Failure = type('Pipelines Start Failure');

  static readonly STOP = type('Pipelines Stop');
  static readonly STOP_SUCCESS = type('Pipelines Stop Success');
  static readonly STOP_Failure = type('Pipelines Stop Failure');

  static readonly CREATE = type('Pipelines Create');
  static readonly CREATE_CONFIRM = type('Pipelines Create Confirm');
  static readonly CREATE_CANCEL = type('Pipelines Create Cancel');

  static readonly SAVE = type('Pipelines Save');
  static readonly SAVE_SUCCESS = type('Pipelines Save Success');
  static readonly SAVE_FAILURE = type('Pipelines Save Failure');

}

export interface PipelinesQueryForm {
  connectivityGroup: string;
  includeInActive: boolean;
}

export class PipelinesQueryAction implements Action {
  readonly type = ActionTypes.QUERY;
  constructor(public payload: PipelinesQueryForm) {}
}

export class PipelinesQuerySuccessAction implements Action {
  readonly type = ActionTypes.QUERY_SUCCESS;
  constructor(public payload: Array<PipelinesList>) {}
}

export class PipelinesQueryFailureAction implements Action {
  readonly type = ActionTypes.QUERY_FAILURE;
  constructor(public payload: any) {}
}

// TODO more actions

export type Actions
  = PipelinesQueryAction 
  | PipelinesQuerySuccessAction
  | PipelinesQueryFailureAction;

  // TODO more actions