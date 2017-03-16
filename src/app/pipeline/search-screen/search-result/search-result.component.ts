import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pipeline } from '../../../model/pipeline.model';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: []
})
export class SearchResultComponent {

  @Input('data') pipelines: Pipeline[];
  selectedPipeline: Pipeline;

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

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
