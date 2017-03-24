import { Injectable } from "@angular/core";
import { BPEApplication, PipelineType} from './share.model';
import { Pipeline } from './pipeline.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class StaticDataSource {

  private _pipelines: Pipeline[] = [

    new Pipeline(1, "HL7 ADT_Inbound (Default)", 
      BPEApplication.HL7_Inbound, PipelineType.HL7_Inbound_ADT, true),

    new Pipeline(2, "HL7 ORM_Inbound (Default)", 
      BPEApplication.HL7_Inbound, PipelineType.HL7_Inbound_ORM, true),

    new Pipeline(3, "HL7 ORU_Inbound (Default)", 
      BPEApplication.HL7_Inbound, PipelineType.HL7_Inbound_ORU, true),

    new Pipeline(4, "HL7 DFT_Outbound (Default)", 
      BPEApplication.HL7_Outbound, PipelineType.HL7_Outbound_DFT, true),

    new Pipeline(5, "HL7 ORM_Outbound (Default)", 
      BPEApplication.HL7_Outbound, PipelineType.HL7_Outbound_ORM, true),

    new Pipeline(6, "HL7 ORU_Outbound (Default)", 
      BPEApplication.HL7_Outbound, PipelineType.HL7_Outbound_ORU, true),

    new Pipeline(7, "DICOM Store SCP (Default)", 
      BPEApplication.DICOM_Inbound, PipelineType.DICOM_STORE_SCP, true),

    new Pipeline(8, "DICOM Store SCU (Default)", 
      BPEApplication.DICOM_Outbound, PipelineType.DICOM_STORE_SCU, true),

    new Pipeline(9, "DICOM MWL (Default)", 
      BPEApplication.DICOM_Inbound, PipelineType.DICOM_MWL, false),

    new Pipeline(10, "DICOM MPPS (Default)", 
      BPEApplication.DICOM_Inbound, PipelineType.DICOM_MPPS, false),
  ];

  getPipelines(bpeApplication?: BPEApplication, pipelineType?: PipelineType, inactive?: boolean): Observable<Pipeline[]> {
    return Observable.from(this._pipelines)
      .filter((x: Pipeline) => {
        let filtered = true;
        if (bpeApplication) {
          filtered = filtered && x.application === bpeApplication;
        }
        if (pipelineType) {
          filtered = filtered && x.type === pipelineType;
        }
        if (!inactive) {
          filtered = filtered && x.active;
        }
        return filtered;
      })
      .toArray();
  }

  toggleActive(pipeline: Pipeline): Observable<Pipeline> {
    return Observable.from([pipeline.toggleActive()]);
  }

  getPipelineByID(id: number): Observable<Pipeline> {
    let result = this._pipelines.find(x=>x.id === id);
    return Observable.from([result]);
  }
}
