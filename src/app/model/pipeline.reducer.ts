import { ActionReducer, Action, Store } from '@ngrx/store';
import { BPEApplication, PipelineType } from './share.model';
import { Pipeline } from './pipeline.model';
import { ActionTypes } from './pipeline.action';

export interface PipelineSearchForm {
  bpeApplicationSelected: BPEApplication;
  pipelineTypeSelected: PipelineType;
}

const pipelineSearchFormInitValue: PipelineSearchForm = {
  bpeApplicationSelected: 0,
  pipelineTypeSelected: 0,
};

export interface AppState {
  pipelines: Array<Pipeline>;
  pipelineSearchForm: PipelineSearchForm;
}

export const AppSelector = {
  pipelines: (state: AppState) => state.pipelines,
  pipelineSearchForm: (state: AppState) => state.pipelineSearchForm,
}

export function pipelineReducer(state: Array<Pipeline> = [], action: Action): Array<Pipeline> {
	switch (action.type) {
		case ActionTypes.PipelineLoadActionType:
			return [...action.payload];

    case ActionTypes.PipelineDeleteActionType:
      return state.filter(p => p.id !== action.payload.id);

		default:
			return state;
	}
}

export function pipelineSearchFormReducer(state: PipelineSearchForm = pipelineSearchFormInitValue, action: Action): PipelineSearchForm {
	switch (action.type) {
		case ActionTypes.PipelineSearchFormActionType: 
      return Object.assign({}, state, {bpeApplicationSelected: action.payload.bpeApplicationSelected, pipelineTypeSelected: action.payload.pipelineTypeSelected});

		default:
			return state;
	}
}
