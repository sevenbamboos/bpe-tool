import { ActionReducer, Action, Store } from '@ngrx/store';
import { BPEApplication, PipelineType } from './share.model';
import { Pipeline } from './pipeline.model';
import { ActionTypes } from './pipeline.action';
import { PipelineSearchForm, pipelineSearchFormInitValue } from './store';

export function pipelineReducer(state: Array<Pipeline> = [], action: Action): Array<Pipeline> {
	switch (action.type) {
		case ActionTypes.PipelineLoadActionType:
			return [...action.payload];

    case ActionTypes.PipelineDeleteActionType:
      return state.filter(p => p.id !== action.payload.id);

    case ActionTypes.PipelineActiveToggleSuccessActionType: {
			const index = state.findIndex((x:Pipeline) => x.id === action.payload.id);
			if (index !== -1) {
				const newState = [...state.slice(0, index), ...action.payload, ...state.slice(index+1)];
				return newState;
			} else {
				return state;
			}
		}

		default:
			return state;
	}
}

export function pipelineSearchFormReducer(state: PipelineSearchForm = pipelineSearchFormInitValue, action: Action): PipelineSearchForm {
	switch (action.type) {
		case ActionTypes.PipelineSearchFormActionType: 
      return Object.assign({}, state, {bpeApplicationSelected: action.payload.bpeApplicationSelected, pipelineTypeSelected: action.payload.pipelineTypeSelected, inactiveChecked: action.payload.inactiveChecked});

		default:
			return state;
	}
}
