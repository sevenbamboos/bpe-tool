import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PipelineService } from '../../model/pipeline.service'; 

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: []
})
export class ErrorMessageComponent implements OnInit, OnDestroy {

  error;
  private subscription: Subscription;

  constructor(private pipelineService: PipelineService) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscription = this.pipelineService.error$
      .subscribe(
        data => this.error = data
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  randomError() {
    this.pipelineService.randomError();
  }
}
