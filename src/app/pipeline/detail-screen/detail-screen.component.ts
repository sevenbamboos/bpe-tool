import { Component, OnInit } from '@angular/core';
import { Logger } from '../../util/logger.service';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.css']
})
export class DetailScreenComponent implements OnInit {

  constructor(
    private logger: Logger
  ) { }

  ngOnInit() {
    this.logger.alertDebug("Not implemented");
  }

}
