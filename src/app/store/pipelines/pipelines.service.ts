import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PipelinesList, PipelinesDetail } from "../../core";

@Injectable()
export class PipelinesService {
  query(connectivityGroup: string, includeInActive: boolean): Observable<Array<PipelinesList>> {
    // TODO
    throw new Error('Not implemented');
  }

  load(id: number): Observable<PipelinesDetail> {
    // TODO
    throw new Error('Not implemented');
  }

  save(pipeline: PipelinesDetail): Observable<PipelinesDetail> {
    // TODO
    throw new Error('Not implemented');
  }
}
