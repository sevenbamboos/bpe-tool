import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects'
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer, effects, services } from '.';

@NgModule({

  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    ...effects(),
  ],

  exports: [
    StoreModule,
    RouterStoreModule,
    StoreDevtoolsModule,
    EffectsModule
  ],

  providers: [
    ...services,
  ]

})
export class AppStoreModule {

  constructor( @Optional() @SkipSelf() parentModule: AppStoreModule) {
    if (parentModule) {
      throw new Error('AppStoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}