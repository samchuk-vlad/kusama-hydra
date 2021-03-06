// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
// prettier-ignore
// @ts-ignore
import { DateResolver as Date } from 'graphql-scalars';
// prettier-ignore
// @ts-ignore
import { GraphQLID as ID } from 'graphql';
// prettier-ignore
// @ts-ignore
import { ArgsType, Field as TypeGraphQLField, Float, InputType as TypeGraphQLInputType, Int } from 'type-graphql';
// prettier-ignore
// @ts-ignore
import { registerEnumType, GraphQLISODateTime as DateTime } from "type-graphql";

import * as BN from "bn.js";

// prettier-ignore
// @ts-ignore eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require('graphql-type-json');
// prettier-ignore
// @ts-ignore
import { BaseWhereInput, JsonObject, PaginationArgs, DateOnlyString, DateTimeString, BigInt, Bytes } from 'warthog';

import { Status } from "../src/modules/kusama-proposals/kusama-proposals.model";

// @ts-ignore
import { KusamaProposals } from "../src/modules/kusama-proposals/kusama-proposals.model";
// @ts-ignore
import { ProposalHistory } from "../src/modules/proposal-history/proposal-history.model";

export enum KusamaProposalsOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  proposalIndex_ASC = "proposalIndex_ASC",
  proposalIndex_DESC = "proposalIndex_DESC",

  proposer_ASC = "proposer_ASC",
  proposer_DESC = "proposer_DESC",

  beneficiary_ASC = "beneficiary_ASC",
  beneficiary_DESC = "beneficiary_DESC",

  requestedAmount_ASC = "requestedAmount_ASC",
  requestedAmount_DESC = "requestedAmount_DESC",

  boundedAmount_ASC = "boundedAmount_ASC",
  boundedAmount_DESC = "boundedAmount_DESC",

  status_ASC = "status_ASC",
  status_DESC = "status_DESC"
}

registerEnumType(KusamaProposalsOrderByEnum, {
  name: "KusamaProposalsOrderByInput"
});

@TypeGraphQLInputType()
export class KusamaProposalsWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  proposalIndex_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  proposalIndex_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  proposalIndex_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  proposalIndex_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  proposalIndex_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  proposalIndex_in?: number[];

  @TypeGraphQLField({ nullable: true })
  proposer_eq?: string;

  @TypeGraphQLField({ nullable: true })
  proposer_contains?: string;

  @TypeGraphQLField({ nullable: true })
  proposer_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  proposer_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  proposer_in?: string[];

  @TypeGraphQLField({ nullable: true })
  beneficiary_eq?: string;

  @TypeGraphQLField({ nullable: true })
  beneficiary_contains?: string;

  @TypeGraphQLField({ nullable: true })
  beneficiary_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  beneficiary_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  beneficiary_in?: string[];

  @TypeGraphQLField({ nullable: true })
  requestedAmount_eq?: string;

  @TypeGraphQLField({ nullable: true })
  requestedAmount_contains?: string;

  @TypeGraphQLField({ nullable: true })
  requestedAmount_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  requestedAmount_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  requestedAmount_in?: string[];

  @TypeGraphQLField({ nullable: true })
  boundedAmount_eq?: string;

  @TypeGraphQLField({ nullable: true })
  boundedAmount_contains?: string;

  @TypeGraphQLField({ nullable: true })
  boundedAmount_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  boundedAmount_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  boundedAmount_in?: string[];

  @TypeGraphQLField(() => Status, { nullable: true })
  status_eq?: Status;

  @TypeGraphQLField(() => [Status], { nullable: true })
  status_in?: Status[];

  @TypeGraphQLField(() => KusamaProposalsWhereInput, { nullable: true })
  AND?: [KusamaProposalsWhereInput];

  @TypeGraphQLField(() => KusamaProposalsWhereInput, { nullable: true })
  OR?: [KusamaProposalsWhereInput];
}

@TypeGraphQLInputType()
export class KusamaProposalsWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class KusamaProposalsCreateInput {
  @TypeGraphQLField({ nullable: true })
  proposalIndex?: number;

  @TypeGraphQLField({ nullable: true })
  proposer?: string;

  @TypeGraphQLField({ nullable: true })
  beneficiary?: string;

  @TypeGraphQLField({ nullable: true })
  requestedAmount?: string;

  @TypeGraphQLField({ nullable: true })
  boundedAmount?: string;

  @TypeGraphQLField(() => Status, { nullable: true })
  status?: Status;
}

@TypeGraphQLInputType()
export class KusamaProposalsUpdateInput {
  @TypeGraphQLField({ nullable: true })
  proposalIndex?: number;

  @TypeGraphQLField({ nullable: true })
  proposer?: string;

  @TypeGraphQLField({ nullable: true })
  beneficiary?: string;

  @TypeGraphQLField({ nullable: true })
  requestedAmount?: string;

  @TypeGraphQLField({ nullable: true })
  boundedAmount?: string;

  @TypeGraphQLField(() => Status, { nullable: true })
  status?: Status;
}

@ArgsType()
export class KusamaProposalsWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => KusamaProposalsWhereInput, { nullable: true })
  where?: KusamaProposalsWhereInput;

  @TypeGraphQLField(() => KusamaProposalsOrderByEnum, { nullable: true })
  orderBy?: KusamaProposalsOrderByEnum[];
}

@ArgsType()
export class KusamaProposalsCreateManyArgs {
  @TypeGraphQLField(() => [KusamaProposalsCreateInput])
  data!: KusamaProposalsCreateInput[];
}

@ArgsType()
export class KusamaProposalsUpdateArgs {
  @TypeGraphQLField() data!: KusamaProposalsUpdateInput;
  @TypeGraphQLField() where!: KusamaProposalsWhereUniqueInput;
}

export enum ProposalHistoryOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  value_ASC = "value_ASC",
  value_DESC = "value_DESC",

  block_ASC = "block_ASC",
  block_DESC = "block_DESC",

  tip_ASC = "tip_ASC",
  tip_DESC = "tip_DESC",

  timestamp_ASC = "timestamp_ASC",
  timestamp_DESC = "timestamp_DESC",

  insertedAt_ASC = "insertedAt_ASC",
  insertedAt_DESC = "insertedAt_DESC"
}

registerEnumType(ProposalHistoryOrderByEnum, {
  name: "ProposalHistoryOrderByInput"
});

@TypeGraphQLInputType()
export class ProposalHistoryWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_eq?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_gt?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_gte?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_lt?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  value_lte?: BN;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  value_in?: BN[];

  @TypeGraphQLField(() => Int, { nullable: true })
  block_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  block_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  block_in?: number[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_eq?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_gt?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_gte?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_lt?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip_lte?: BN;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  tip_in?: BN[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_eq?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_gt?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_gte?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_lt?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_lte?: BN;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  timestamp_in?: BN[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_eq?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_lt?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_lte?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_gt?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt_gte?: DateTimeString;

  @TypeGraphQLField(() => ProposalHistoryWhereInput, { nullable: true })
  AND?: [ProposalHistoryWhereInput];

  @TypeGraphQLField(() => ProposalHistoryWhereInput, { nullable: true })
  OR?: [ProposalHistoryWhereInput];
}

@TypeGraphQLInputType()
export class ProposalHistoryWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class ProposalHistoryCreateInput {
  @TypeGraphQLField(() => BigInt)
  value!: BN;

  @TypeGraphQLField()
  block!: number;

  @TypeGraphQLField(() => BigInt)
  tip!: BN;

  @TypeGraphQLField(() => BigInt)
  timestamp!: BN;

  @TypeGraphQLField(() => DateTime)
  insertedAt!: DateTimeString;
}

@TypeGraphQLInputType()
export class ProposalHistoryUpdateInput {
  @TypeGraphQLField(() => BigInt, { nullable: true })
  value?: BN;

  @TypeGraphQLField({ nullable: true })
  block?: number;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  tip?: BN;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp?: BN;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  insertedAt?: DateTimeString;
}

@ArgsType()
export class ProposalHistoryWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => ProposalHistoryWhereInput, { nullable: true })
  where?: ProposalHistoryWhereInput;

  @TypeGraphQLField(() => ProposalHistoryOrderByEnum, { nullable: true })
  orderBy?: ProposalHistoryOrderByEnum[];
}

@ArgsType()
export class ProposalHistoryCreateManyArgs {
  @TypeGraphQLField(() => [ProposalHistoryCreateInput])
  data!: ProposalHistoryCreateInput[];
}

@ArgsType()
export class ProposalHistoryUpdateArgs {
  @TypeGraphQLField() data!: ProposalHistoryUpdateInput;
  @TypeGraphQLField() where!: ProposalHistoryWhereUniqueInput;
}
