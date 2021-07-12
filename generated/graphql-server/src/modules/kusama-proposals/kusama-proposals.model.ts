import { BaseModel, IntField, Model, EnumField, StringField } from 'warthog';

import { Status } from '../enums/enums';
export { Status };

@Model({ api: {} })
export class KusamaProposals extends BaseModel {
  @IntField({
    nullable: true
  })
  proposalIndex?: number;

  @StringField({
    nullable: true
  })
  proposer?: string;

  @StringField({
    nullable: true
  })
  beneficiary?: string;

  @StringField({
    nullable: true
  })
  requestedAmount?: string;

  @StringField({
    nullable: true
  })
  boundedAmount?: string;

  @EnumField('Status', Status, {
    nullable: true
  })
  status?: Status;

  constructor(init?: Partial<KusamaProposals>) {
    super();
    Object.assign(this, init);
  }
}
