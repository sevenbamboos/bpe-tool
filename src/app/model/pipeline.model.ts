import { BPEApplication, PipelineType} from './share.model';

export class Pipeline {

  constructor(
    public id?: number,
    public name?: string,
    public application?: BPEApplication,
    public type?: PipelineType,
    public active?: boolean
  ) {
  }

  toggleActive(): Pipeline {
    return Object.assign(new Pipeline(), this, {active: !this.active}) as Pipeline;
  }

  getApplicationValue() {
    return BPEApplication[this.application];
  }

  getTypeValue() {
    return PipelineType[this.type];
  }
}
