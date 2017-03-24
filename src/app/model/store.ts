import { ActionReducer, Action, Store } from '@ngrx/store';
import { BPEApplication, PipelineType } from './share.model';
import { Pipeline } from './pipeline.model';
import { ActionTypes } from './pipeline.action';

export interface PipelineSearchForm {
  bpeApplicationSelected: BPEApplication;
  pipelineTypeSelected: PipelineType;
  inactiveChecked: boolean;
}

export const pipelineSearchFormInitValue: PipelineSearchForm = {
  bpeApplicationSelected: 0,
  pipelineTypeSelected: 0,
  inactiveChecked: false,
};

export interface AppState {
  pipelines: Array<Pipeline>;
  pipelineSearchForm: PipelineSearchForm;
}

export const AppSelector = {
  pipelines: (state: AppState) => state.pipelines,
  pipelineSearchForm: (state: AppState) => state.pipelineSearchForm,
}
