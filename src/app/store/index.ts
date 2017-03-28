
import * as pipelines from './pipelines';
//import * as services from './services';

export {
  pipelines,
  //services,
}

export interface AppState {
  pipelines: pipelines.State,
  //services: storeServices.State,
}

export const reducer = {
  pipelines: pipelines.reducer,
};

export const effects = [
  pipelines.Effects,
];

export const services = [
  pipelines.PipelinesService,
];
