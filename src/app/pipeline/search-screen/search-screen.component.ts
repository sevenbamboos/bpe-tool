import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Logger } from '../../util/logger.service';
import { BPEApplication, PipelineType } from '../../model/share.model';
import { Pipeline } from '../../model/pipeline.model';
import { StaticDataSource as Datasource } from '../../model/static.datasource';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css']
})
export class SearchScreenComponent implements OnInit {

  loading = false;
  originalPipelines: Pipeline[] = [];
  pipelines: Pipeline[] = [];

  constructor( private ds: Datasource, private logger: Logger, private router: Router) { }

  ngOnInit() {
    this.reload();
  }

  doAction(event) {
    const {id, eventName} = event;
    if (eventName === 'edit') {
      this.router.navigate(['pipeline/detail', id]);
    } else if (eventName === 'delete') {
      const index = this.pipelines.findIndex(x=>x.id === id);
      if (index < 0) {
        this.logger.alertError(`Can't find pipeline with ID:${id}`);
      } else {
        this.pipelines.splice(index, 1);
      }
    }
  }

  doSearch(event) {
    event = event || {application:null, type:null};
    const {application, type, reload} = event;

    if (reload) {
      this.reload();
    } else {
      this.pipelines = this.originalPipelines.filter(x=>{
        return this._addFilterForApplication(application)(x)
          && this._addFilterForType(type)(x);
      });
    }
  }

  reload() {
    this.loading = true;
    this.ds.getPipelines().subscribe(
      data => {
        this.originalPipelines = data;
        this.doSearch(null);
        
        //TODO mock slow connection, delete in production
        setTimeout(()=>this.loading = false, 3000);

      },
      error => {
        this.logger.alertError(error);
      }
    );
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
