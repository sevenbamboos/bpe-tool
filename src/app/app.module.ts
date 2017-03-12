import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UtilModule } from './util/util.module';
import { ModelModule } from './model/model.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { SearchScreenComponent as PipelineSearchScreen } from './pipeline/search-screen/search-screen.component';
import { DetailScreenComponent as PipelineDetailScreen } from './pipeline/detail-screen/detail-screen.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilModule,
    ModelModule,
    PipelineModule,
    RouterModule.forRoot([
      {
        path: 'pipeline/list',
        component: PipelineSearchScreen 
      },
      {
        path: 'pipeline/detail',
        component: PipelineDetailScreen 
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
