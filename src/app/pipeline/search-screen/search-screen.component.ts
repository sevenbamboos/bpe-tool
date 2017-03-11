import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BPEApplication, PipelineType, BPEApplicationList, PipelineTypeList } from '../../model/share.model';
import { Pipeline } from '../../model/pipeline.model';
import { StaticDataSource as Datasource } from '../../model/static.datasource';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css']
})
export class SearchScreenComponent implements OnInit {

  //TODO extract it to a global space or provider
  private static isDebug:boolean = true;

  private pipelines: Pipeline[] = [];

  //TODO add empty option
  applications = BPEApplicationList.map(li => {
    if (li === null) {
      return { value: ''};
    }
    return {
      name: li,
      value: BPEApplication[li]
    };
  });

  types = PipelineTypeList.map(li => {
    return {
      name: li,
      value: PipelineType[li]
    };
  });

  searchForm = new FormGroup({
    applicationSelect: new FormControl(this.applications[0]),
    typeSelect: new FormControl(this.types[0]),
  });

  private getApplicationSelected() {
    const appValue = this.searchForm.get('applicationSelect').value;
    return appValue;
  }

  private getTypeSelected() {
    const typeValue = this.searchForm.get('typeSelect').value;
    return typeValue;
  }
  
  private _filterApplication = pipeline => {
    const selected = this.getApplicationSelected();
    if (typeof selected === 'undefined') {
      return true;
    } else {
      return selected === pipeline.application;
    }
  };

  private _filterType = pipeline => {
    const selected = this.getTypeSelected();
    if (typeof selected === 'undefined') {
      return true;
    } else {
      return selected === pipeline.type;
    }
  };

  constructor(private ds: Datasource) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.ds.getPipelines().subscribe(data => {
      this.pipelines = data.filter(x=>{
        return this._filterApplication(x) && this._filterType(x);
      });
    });
  }

  private debug(...args) {
    SearchScreenComponent.isDebug && console.log(args);
  }
}
