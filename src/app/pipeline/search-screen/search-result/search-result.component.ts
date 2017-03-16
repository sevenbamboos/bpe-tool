import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pipeline } from '../../../model/pipeline.model';
import { PipelineService } from '../../../model/pipeline.service';
import { Logger } from '../../../util/logger.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: []
})
export class SearchResultComponent {

  selectedPipeline: Pipeline;
  @Input() pipelines: Pipeline[];

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor(private pipelineService: PipelineService) {
  }

  onPipelineEdit() {
    this.sendOutEvent(this.selectedPipeline.id, 'edit');
  }

  onPipelineDelete() {
    this.sendOutEvent(this.selectedPipeline.id, 'delete');
  }

  private sendOutEvent(id: number, eventName: string) {
    this.onSelect.emit({id, eventName});
  }
}
