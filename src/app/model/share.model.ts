export enum BPEApplication {
  HL7_Inbound, HL7_Outbound, DICOM_Inbound, DICOM_Outbound
}

export let BPEApplicationList = [
    BPEApplication.HL7_Inbound,
    BPEApplication.HL7_Outbound,
    BPEApplication.DICOM_Inbound,
    BPEApplication.DICOM_Outbound,
];

export enum PipelineType {
  HL7_Inbound_ADT, HL7_Inbound_ORM, HL7_Inbound_ORU,
  HL7_Outbound_DFT, HL7_Outbound_ORM, HL7_Outbound_ORU,
  DICOM_STORE_SCP, DICOM_STORE_SCU, DICOM_MWL,
  DICOM_FIND, DICOM_MPPS
}

export let PipelineTypeList = [
    PipelineType.HL7_Inbound_ADT,
    PipelineType.HL7_Inbound_ORM,
    PipelineType.HL7_Inbound_ORU,
    PipelineType.HL7_Outbound_DFT,
    PipelineType.HL7_Outbound_ORM,
    PipelineType.HL7_Outbound_ORU,
    PipelineType.DICOM_STORE_SCP,
    PipelineType.DICOM_STORE_SCU,
    PipelineType.DICOM_MWL,
    PipelineType.DICOM_FIND,
    PipelineType.DICOM_MPPS,
];