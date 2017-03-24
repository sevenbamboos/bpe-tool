import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Pipeline } from '../../model/pipeline.model';
import { Logger } from '../../util/logger.service';
import { AppState, AppSelector } from '../../model/store';
import * as action from '../../model/pipeline.action';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: []
})
export class SearchResultComponent {

  selectedPipeline: Pipeline;
  pipelines$: Observable<Array<Pipeline>>;

  constructor(
    private store: Store<AppState>, 
    private router: Router) {
    this.pipelines$ = store.select(AppSelector.pipelines);
  }

  activeActionValue(pipeline: Pipeline) {
    return pipeline.active ? "Inactivate" : "Activate";
  }

  onPipelineEdit() {
    this.router.navigate(['pipeline/detail', this.selectedPipeline.id]);
  }

  onPipelineDelete() {
    this.store.dispatch(new action.PipelineDeleteAction(this.selectedPipeline));
  }

  onPipelineActiveToggle() {
    this.store.dispatch(new action.PipelineActiveToggleAction(this.selectedPipeline));
  }

}
