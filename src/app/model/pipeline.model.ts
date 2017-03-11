import { BPEApplication, PipelineType} from './share.model';

export class Pipeline {

  constructor(
    public id?: number,
    public name?: string,
    public application?: BPEApplication,
    public type?: PipelineType
  ) {}

  getApplicationValue() {
    return BPEApplication[this.application];
  }

  getTypeValue() {
    return PipelineType[this.type];
  }
}
