import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Logger } from '../../util/logger.service';
import { Pipeline } from '../../model/pipeline.model';
import { StaticDataSource as Datasource } from '../../model/static.datasource';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.css']
})
export class DetailScreenComponent implements OnInit {

  @Input('id') id?: number;

  pipeline: Pipeline;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ds: Datasource
  ) { }

  ngOnInit() {
    this.pipeline = null;
    this.route.params
      .switchMap((params: Params) => this.ds.getPipelineByID(+params['id']))
      .subscribe(p => {
        this.pipeline = p; 
      });
  }

  goBack() {
    this.location.back();
  }

  onSave() {
    Logger.warn('Not implemented');
  }
}
