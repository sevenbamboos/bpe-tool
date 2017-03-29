import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ei-pipelines-search',
  templateUrl: './pipelines-search.component.html',
  styles: []
})
export class PipelinesSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

}
