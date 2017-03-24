import { Action } from '@ngrx/store';
import { BPEApplication, PipelineType } from './share.model';
import { Pipeline } from './pipeline.model';

export const ActionTypes = {
  PipelineLoadActionType: "PIPELINE_LOAD",
  PipelineDeleteActionType: "PIPELINE_DELETE",
  PipelineSearchFormBPEApplicationActionType: "PIPELINE_SEARCH_FORM_BPE_APPLICATION",
  PipelineSearchFormPipelineTypeActionType: "PIPELINE_SEARCH_FORM_PIPELINE_TYPE",
}

export class PipelineLoadAction implements Action {
  type = ActionTypes.PipelineLoadActionType;
  constructor(public payload: Array<Pipeline>) { }
}

export class PipelineDeleteAction implements Action {
  type = ActionTypes.PipelineDeleteActionType;
  constructor(public payload: Pipeline) { }
}

export class PipelineSearchFormBPEApplicationAction implements Action {
  type = ActionTypes.PipelineSearchFormBPEApplicationActionType;
  constructor(public payload: BPEApplication) { }
}

export class PipelineSearchFormPipelineTypeAction implements Action {
  type = ActionTypes.PipelineSearchFormPipelineTypeActionType;
  constructor(public payload: PipelineType) { }
}
