import { EffectsModule } from '@ngrx/effects';

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

export const services = [
  pipelines.PipelinesService,
];

export function effects() {
  return [
    EffectsModule.run(pipelines.Effects),
  ];
}
