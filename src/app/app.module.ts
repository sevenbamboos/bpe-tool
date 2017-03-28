import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { AppStoreModule } from "./store/store.module";
import { CoreModule } from "./core/core.module";

import { PipelinesModule } from "./pipelines/pipelines.module";
import { ServicesModule } from "./services/services.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    CoreModule,
    AppStoreModule,
    AppRoutingModule,
    PipelinesModule,
    ServicesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
