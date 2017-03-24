import { Action } from '@ngrx/store';
import { BPEApplication, PipelineType } from './share.model';
import { Pipeline } from './pipeline.model';
import { PipelineSearchForm } from './store';

export const ActionTypes = {
  PipelineSearchActionType: "PIPELINE_SEARCH",
  PipelineLoadActionType: "PIPELINE_LOAD",
  PipelineDeleteActionType: "PIPELINE_DELETE",
  PipelineActiveToggleActionType: "PIPELINE_ACTIVE_TOGGLE",
  PipelineActiveToggleSuccessActionType: "PIPELINE_ACTIVE_TOGGLE_SUCCESS",
  PipelineSearchFormActionType: "PIPELINE_SEARCH_FORM_ACTION",
}

export class PipelineSearchAction implements Action {
  type = ActionTypes.PipelineSearchActionType;
  constructor(public payload: PipelineSearchForm) { }
}

export class PipelineLoadAction implements Action {
  type = ActionTypes.PipelineLoadActionType;
  constructor(public payload: Array<Pipeline>) { }
}

export class PipelineDeleteAction implements Action {
  type = ActionTypes.PipelineDeleteActionType;
  constructor(public payload: Pipeline) { }
}

export class PipelineActiveToggleAction implements Action {
  type = ActionTypes.PipelineActiveToggleActionType;
  constructor(public payload: Pipeline) { }
}

export class PipelineActiveToggleSuccessAction implements Action {
  type = ActionTypes.PipelineActiveToggleSuccessActionType;
  constructor(public payload: Pipeline) { }
}

export class PipelineSearchFormAction implements Action {
  type = ActionTypes.PipelineSearchFormActionType;
  constructor(public payload: PipelineSearchForm) { }
}
