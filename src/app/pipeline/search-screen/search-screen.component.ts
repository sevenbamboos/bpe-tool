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
  private application?: BPEApplication = BPEApplication.HL7_Outbound;
  private type?: PipelineType = PipelineType.HL7_Outbound_ORM;

  //TODO 
  //private _filterApplication = 

  applications = BPEApplicationList.map(li => {
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

  constructor(private ds: Datasource) { }

  ngOnInit() {
    this.search();
  }

  search() {

    const appSelected = this.getApplicationSelected().value;
    this.application = appSelected || appSelected;

    this.debug(`application:${this.application}, type:${this.type}`);
    this.ds.getPipelines().subscribe(data => {
      this.pipelines = data.filter(x=>{
        let compare: boolean = true;
        if (this.application) {
          compare = compare && (x.application == this.application);
        }
        if (this.type) {
          compare = compare && (x.type == this.type);
        }
        return compare;
      });
    });
  }

  private getApplicationSelected() {
    return this.searchForm.get('applicationSelect');
  }

  private debug(...args) {
    SearchScreenComponent.isDebug && console.log(args);
  }
}
