import { BaseModel, IntField, NumericField, DateTimeField, Model, StringField } from 'warthog';

import BN from 'bn.js';

@Model({ api: { description: ` All transfers ` } })
export class ProposalHistory extends BaseModel {
  @NumericField({
    transformer: {
      to: (entityValue: BN) => (entityValue !== undefined ? entityValue.toString(10) : null),
      from: (dbValue: string) =>
        dbValue !== undefined && dbValue !== null && dbValue.length > 0 ? new BN(dbValue, 10) : undefined
    }
  })
  value!: BN;

  @IntField({})
  block!: number;

  @NumericField({
    transformer: {
      to: (entityValue: BN) => (entityValue !== undefined ? entityValue.toString(10) : null),
      from: (dbValue: string) =>
        dbValue !== undefined && dbValue !== null && dbValue.length > 0 ? new BN(dbValue, 10) : undefined
    }
  })
  tip!: BN;

  @NumericField({
    transformer: {
      to: (entityValue: BN) => (entityValue !== undefined ? entityValue.toString(10) : null),
      from: (dbValue: string) =>
        dbValue !== undefined && dbValue !== null && dbValue.length > 0 ? new BN(dbValue, 10) : undefined
    }
  })
  timestamp!: BN;

  @DateTimeField({})
  insertedAt!: Date;

  constructor(init?: Partial<ProposalHistory>) {
    super();
    Object.assign(this, init);
  }
}
