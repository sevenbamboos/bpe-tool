import { ActionReducer, Action, Store } from '@ngrx/store';
import { BPEApplication } from './share.model';
import { Pipeline } from './pipeline.model';

export interface AppState {
  pipelines: Array<Pipeline>;
  bpeApplicationSelected: BPEApplication;
}

export const PIPELINE_LOAD = 'PIPELINE_LOAD';
export const PIPELINE_DELETE = 'PIPELINE_DELETE';

export function pipelineReducer(state: Array<Pipeline> = [], action: Action): Array<Pipeline> {
	switch (action.type) {
		case PIPELINE_LOAD:
			return [...action.payload];

    case PIPELINE_DELETE:
      return state.filter(p => p.id !== action.payload.id);

		default:
			return state;
	}
}

export const BPE_APPLICATION_SELECTED = "BPE_APPLICATION_SELECTED";

export function bpeApplicationSelectedReducer(state: BPEApplication = 0, action: Action): BPEApplication {
	switch (action.type) {
		case BPE_APPLICATION_SELECTED:
			return action.payload;

		default:
			return state;
	}
}
