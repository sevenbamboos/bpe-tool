export enum BPEApplication {
  HL7_Inbound, HL7_Outbound, DICOM_Inbound, DICOM_Outbound
}

export enum PipelineType {
  HL7_Inbound_ADT, HL7_Inbound_ORM, HL7_Inbound_ORU,
  HL7_Outbound_DFT, HL7_Outbound_ORM, HL7_Outbound_ORU,
  DICOM_STORE_SCP, DICOM_STORE_SCU, DICOM_MWL,
  DICOM_FIND, DICOM_MPPS
}
