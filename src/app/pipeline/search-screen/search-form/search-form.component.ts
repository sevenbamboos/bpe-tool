import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Logger } from '../../../util/logger.service';
import { BPEApplication, PipelineType, BPEApplicationList, PipelineTypeList } from '../../../model/share.model';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  @Output() onSearch: EventEmitter<any> = new EventEmitter();

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
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
    this.handleFormChange();
  }

  onFormChange(reload: boolean) {
    const event = {
      application: this.getApplicationControl().value,
      type: this.getTypeControl().value,
      reload: reload
    };
    this.onSearch.emit(event);
  }

  private createForm() {
    this.searchForm = this.formBuilder.group({
      applicationSelect: '',
      typeSelect: '',
    });
  }

  private handleFormChange() {
    this.getApplicationControl().valueChanges.forEach(
      (value: string) => this.onFormChange(false)
    );
    this.getTypeControl().valueChanges.forEach(
      (value: string) => this.onFormChange(false)
    );
  }

  private getApplicationControl() {
    return this.searchForm.get('applicationSelect');
  }

  private getTypeControl() {
    return this.searchForm.get('typeSelect');
  }
}
