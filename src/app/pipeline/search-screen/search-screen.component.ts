import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Logger } from '../../util/logger.service';
import { BPEApplication, PipelineType } from '../../model/share.model';
import { Pipeline } from '../../model/pipeline.model';
import { StaticDataSource as Datasource } from '../../model/static.datasource';
import { PipelineService } from '../../model/pipeline.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: []
})
export class SearchScreenComponent implements OnInit, OnDestroy {

  loading = false;
  pipelines: Pipeline[] = [];
  private subscription: Subscription;
  private applicationSelected: BPEApplication;
  private typeSelected: PipelineType;

  constructor( 
    private pipelineService: PipelineService,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.pipelineService.readPipeline$
      .subscribe(
        data => {
          this.pipelines = data.filter(
            data => {
              Logger.info(JSON.stringify(data));
              return this._addFilterForApplication(this.applicationSelected)(data)
                && this._addFilterForType(this.typeSelected)(data);
            }
          );
          //TODO mock slow connection, delete in production
          setTimeout(()=>this.loading = false, 0);
        },
        error => {
          Logger.error(error);
        }
      );

    this.reload();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  } 

  doAction(event) {
    const {id, eventName} = event;
    if (eventName === 'edit') {
      this.router.navigate(['pipeline/detail', id]);
    } else if (eventName === 'delete') {
      const index = this.pipelines.findIndex(x=>x.id === id);
      if (index < 0) {
        Logger.error(`Can't find pipeline with ID:${id}`);
      } else {
        this.pipelines.splice(index, 1);
      }
    }
  }

  doSearch(event) {
    event = event || {application:null, type:null};
    this.applicationSelected = event.application;
    this.typeSelected = event.type;
    this.reload();

  }

  reload() {
    this.loading = true;
    this.pipelineService.read();
  }

  private _addFilterForApplication = selected => {
    return pipeline => {
      if (selected) {
        return selected === pipeline.application;
      } else {
        return true;
      }
    };
  };

  private _addFilterForType = selected => {
    return pipeline => {
      if (selected) {
        return selected === pipeline.type;
      } else {
        return true;
      }
    };
  };
}
