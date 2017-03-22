import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Pipeline } from '../../../model/pipeline.model';
import { PipelineService } from '../../../model/pipeline.service';
import { Logger } from '../../../util/logger.service';
import { AppState } from '../../../model/pipeline.reducer';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: []
})
export class SearchResultComponent {

  selectedPipeline: Pipeline;
  pipelines$: Observable<Array<Pipeline>>;

  constructor(
    private pipelineService: PipelineService,
    private store: Store<AppState>, 
    private router: Router) {
    this.pipelines$ = store.select("pipelines");
  }

  onPipelineEdit() {
    this.router.navigate(['pipeline/detail', this.selectedPipeline.id]);
  }

  onPipelineDelete() {
    this.pipelineService.delete(this.selectedPipeline);
  }

}
