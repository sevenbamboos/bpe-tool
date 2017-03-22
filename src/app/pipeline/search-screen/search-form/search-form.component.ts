import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Logger } from '../../../util/logger.service';
import { PipelineService } from '../../../model/pipeline.service';
import { AppState } from '../../../model/pipeline.reducer';
import { BPEApplication, PipelineType, BPEApplicationList, PipelineTypeList } from '../../../model/share.model';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: []
})
export class SearchFormComponent implements OnInit, OnDestroy {

  private bpeApplicationSelected$: Observable<BPEApplication>;
  private subscription: Subscription;

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

  constructor(
    private pipelineService: PipelineService,
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.bpeApplicationSelected$ = store.select("bpeApplicationSelected"); 
    this.createForm();
  }

  ngOnInit() {
    this.subscription = this.bpeApplicationSelected$.subscribe(
      (data) => this.getApplicationControl().setValue(data)
    );

    this.doSearch();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  doSearch() {
    this.pipelineService.read(this.getApplicationControl().value);
  }

  private createForm() {
    this.searchForm = this.formBuilder.group({
      applicationSelect: '',
      typeSelect: '',
    });
  }

  private getApplicationControl() {
    return this.searchForm.get('applicationSelect');
  }

  private getTypeControl() {
    return this.searchForm.get('typeSelect');
  }
}
