import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Logger } from '../../util/logger.service';
import { AppState, PipelineSearchForm, AppSelector } from '../../model/pipeline.reducer';
import * as action from '../../model/pipeline.action';
import { BPEApplication, PipelineType, BPEApplicationList, PipelineTypeList } from '../../model/share.model';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: []
})
export class SearchFormComponent implements OnInit, OnDestroy {

  private searchForm$: Observable<PipelineSearchForm>;
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
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.searchForm$ = store.select(AppSelector.pipelineSearchForm); 
    this.createForm();
  }

  ngOnInit() {
    this.subscription = this.searchForm$.subscribe(
      (form) => {
        this.getApplicationControl().setValue(form.bpeApplicationSelected);
        this.getTypeControl().setValue(form.pipelineTypeSelected);
      }
    );

    this.doSearch();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  doSearch() {
    const searchCriterion: PipelineSearchForm = {
      bpeApplicationSelected: this.getApplicationControl().value,
      pipelineTypeSelected: this.getTypeControl().value,
    };
    this.store.dispatch(new action.PipelineSearchFormAction(searchCriterion));
    this.store.dispatch(new action.PipelineSearchAction(searchCriterion));
  }

  doReset() {
    this.getApplicationControl().setValue(0);
    this.getTypeControl().setValue(0);
    this.doSearch();
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
