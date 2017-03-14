import { Injectable } from "@angular/core";
import { BPEApplication, PipelineType} from './share.model';
import { Pipeline } from './pipeline.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class StaticDataSource {

  private _pipelines: Pipeline[] = [

    new Pipeline(1, "HL7 ADT_Inbound (Default)", 
      BPEApplication.HL7_Inbound, PipelineType.HL7_Inbound_ADT),

    new Pipeline(2, "HL7 ORM_Inbound (Default)", 
      BPEApplication.HL7_Inbound, PipelineType.HL7_Inbound_ORM),

    new Pipeline(3, "HL7 ORU_Inbound (Default)", 
      BPEApplication.HL7_Inbound, PipelineType.HL7_Inbound_ORU),

    new Pipeline(4, "HL7 DFT_Outbound (Default)", 
      BPEApplication.HL7_Outbound, PipelineType.HL7_Outbound_DFT),

    new Pipeline(5, "HL7 ORM_Outbound (Default)", 
      BPEApplication.HL7_Outbound, PipelineType.HL7_Outbound_ORM),

    new Pipeline(6, "HL7 ORU_Outbound (Default)", 
      BPEApplication.HL7_Outbound, PipelineType.HL7_Outbound_ORU),

    new Pipeline(7, "DICOM Store SCP (Default)", 
      BPEApplication.DICOM_Inbound, PipelineType.DICOM_STORE_SCP),

    new Pipeline(8, "DICOM Store SCU (Default)", 
      BPEApplication.DICOM_Outbound, PipelineType.DICOM_STORE_SCU),

    new Pipeline(9, "DICOM MWL (Default)", 
      BPEApplication.DICOM_Inbound, PipelineType.DICOM_MWL),

    new Pipeline(10, "DICOM MPPS (Default)", 
      BPEApplication.DICOM_Inbound, PipelineType.DICOM_MPPS),
  ];

  getPipelines(): Observable<Pipeline[]> {
    return Observable.from([this._pipelines]);
  }

  getPipelineByID(id: number): Observable<Pipeline> {
    let result = this._pipelines.find(x=>x.id === id);
    return Observable.from([result]);
  }
}
