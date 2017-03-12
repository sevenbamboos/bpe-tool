import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Logger } from '../../util/logger.service';
import { BPEApplication, PipelineType, BPEApplicationList, PipelineTypeList } from '../../model/share.model';
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

  //TODO put complicated part into sub-component
  applications = BPEApplicationList.map(li => {
    if (li === null) {
      return { name: null, value: ''};
    }
    return {
      name: li,
      value: BPEApplication[li]
    };
  });

  types = PipelineTypeList.map(li => {
    if (li === null) {
      return { name: null, value: ''};
    }
    return {
      name: li,
      value: PipelineType[li]
    };
  });

  searchForm: FormGroup;

  appChangeLog: string[] = [];

  constructor(
    private ds: Datasource, 
    private logger: Logger,
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
    this.handleFormChange(); 
  }

  ngOnInit() {
    this.logger.debug('search screen init');
    this.reload();
  }

  //TODO how to do filter based on Observable so that I can remove the unnecessary original copy?
  search() {
    this.pipelines = this.originalPipelines.filter(x=>{
      return this._filterApplication(x) && this._filterType(x);
    });
  }

  reload() {
    this.loading = true;
    let pipelines$ = this.ds.getPipelines();
    this.ds.getPipelines().subscribe(data => {
      this.originalPipelines = data;
      this.search();
    });
    pipelines$.finally(() => this.loading = false);
  }

  private createForm() {
    this.searchForm = this.formBuilder.group({
      applicationSelect: '',
      typeSelect: '',
    });
  }

  private handleFormChange() {
    this.getApplicationControl().valueChanges.forEach(
      (value: string) => this.search()
    );
    this.getTypeControl().valueChanges.forEach(
      (value: string) => this.search()
    );
  }

  private _filterApplication = pipeline => {
    const selected = this.getApplicationControl().value;
    if (selected) {
      return selected === pipeline.application;
    } else {
      return true;
    }
  };

  private _filterType = pipeline => {
    const selected = this.getTypeControl().value;
    if (selected) {
      return selected === pipeline.type;
    } else {
      return true;
    }
  };

  private getApplicationControl() {
    return this.searchForm.get('applicationSelect');
  }

  private getTypeControl() {
    return this.searchForm.get('typeSelect');
  }
}
