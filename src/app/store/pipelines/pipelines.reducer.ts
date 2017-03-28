import { PipelinesList } from '../../core';
import { Actions, ActionTypes, PipelinesQueryForm } from './pipelines.actions';

export interface State extends PipelinesQueryForm {
  pipelineLists: Array<PipelinesList>; 
}

export const initialState: State = {
  connectivityGroup: '',
  includeInActive: false,
  pipelineLists: [],
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    case ActionTypes.QUERY_SUCCESS: {
      // TODO
      return state;
    }

    // TODO more action types

    default:
      return state;

  }
}