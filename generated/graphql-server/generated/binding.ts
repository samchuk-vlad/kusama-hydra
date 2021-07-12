import 'graphql-import-node'; // Needed so you can import *.graphql files 

import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import * as schema from  './schema.graphql'

export interface Query {
    kusamaProposals: <T = Array<KusamaProposals>>(args: { offset?: Int | null, limit?: Int | null, where?: KusamaProposalsWhereInput | null, orderBy?: Array<KusamaProposalsOrderByInput> | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    kusamaProposalsByUniqueInput: <T = KusamaProposals | null>(args: { where: KusamaProposalsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    kusamaProposalsConnection: <T = KusamaProposalsConnection>(args: { first?: Int | null, after?: String | null, last?: Int | null, before?: String | null, where?: KusamaProposalsWhereInput | null, orderBy?: Array<KusamaProposalsOrderByInput> | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    proposalHistories: <T = Array<ProposalHistory>>(args: { offset?: Int | null, limit?: Int | null, where?: ProposalHistoryWhereInput | null, orderBy?: Array<ProposalHistoryOrderByInput> | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    proposalHistoryByUniqueInput: <T = ProposalHistory | null>(args: { where: ProposalHistoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    proposalHistoriesConnection: <T = ProposalHistoryConnection>(args: { first?: Int | null, after?: String | null, last?: Int | null, before?: String | null, where?: ProposalHistoryWhereInput | null, orderBy?: Array<ProposalHistoryOrderByInput> | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {}

export interface Subscription {
    stateSubscription: <T = ProcessorState>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args: any[]): T
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema: schema as any })

/**
 * Types
*/

export type KusamaProposalsOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'proposalIndex_ASC' |
  'proposalIndex_DESC' |
  'proposer_ASC' |
  'proposer_DESC' |
  'beneficiary_ASC' |
  'beneficiary_DESC' |
  'requestedAmount_ASC' |
  'requestedAmount_DESC' |
  'boundedAmount_ASC' |
  'boundedAmount_DESC' |
  'status_ASC' |
  'status_DESC'

export type ProposalHistoryOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'value_ASC' |
  'value_DESC' |
  'block_ASC' |
  'block_DESC' |
  'tip_ASC' |
  'tip_DESC' |
  'timestamp_ASC' |
  'timestamp_DESC' |
  'insertedAt_ASC' |
  'insertedAt_DESC'

export type Status =   'Proposed' |
  'Awarded' |
  'Rejected'

export interface BaseWhereInput {
  id_eq?: String | null
  id_in?: String[] | String | null
  createdAt_eq?: String | null
  createdAt_lt?: String | null
  createdAt_lte?: String | null
  createdAt_gt?: String | null
  createdAt_gte?: String | null
  createdById_eq?: String | null
  updatedAt_eq?: String | null
  updatedAt_lt?: String | null
  updatedAt_lte?: String | null
  updatedAt_gt?: String | null
  updatedAt_gte?: String | null
  updatedById_eq?: String | null
  deletedAt_all?: Boolean | null
  deletedAt_eq?: String | null
  deletedAt_lt?: String | null
  deletedAt_lte?: String | null
  deletedAt_gt?: String | null
  deletedAt_gte?: String | null
  deletedById_eq?: String | null
}

export interface KusamaProposalsCreateInput {
  proposalIndex?: Float | null
  proposer?: String | null
  beneficiary?: String | null
  requestedAmount?: String | null
  boundedAmount?: String | null
  status?: Status | null
}

export interface KusamaProposalsUpdateInput {
  proposalIndex?: Float | null
  proposer?: String | null
  beneficiary?: String | null
  requestedAmount?: String | null
  boundedAmount?: String | null
  status?: Status | null
}

export interface KusamaProposalsWhereInput {
  id_eq?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  createdAt_eq?: DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  createdById_eq?: ID_Input | null
  createdById_in?: ID_Output[] | ID_Output | null
  updatedAt_eq?: DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  updatedById_eq?: ID_Input | null
  updatedById_in?: ID_Output[] | ID_Output | null
  deletedAt_all?: Boolean | null
  deletedAt_eq?: DateTime | null
  deletedAt_lt?: DateTime | null
  deletedAt_lte?: DateTime | null
  deletedAt_gt?: DateTime | null
  deletedAt_gte?: DateTime | null
  deletedById_eq?: ID_Input | null
  deletedById_in?: ID_Output[] | ID_Output | null
  proposalIndex_eq?: Int | null
  proposalIndex_gt?: Int | null
  proposalIndex_gte?: Int | null
  proposalIndex_lt?: Int | null
  proposalIndex_lte?: Int | null
  proposalIndex_in?: Int[] | Int | null
  proposer_eq?: String | null
  proposer_contains?: String | null
  proposer_startsWith?: String | null
  proposer_endsWith?: String | null
  proposer_in?: String[] | String | null
  beneficiary_eq?: String | null
  beneficiary_contains?: String | null
  beneficiary_startsWith?: String | null
  beneficiary_endsWith?: String | null
  beneficiary_in?: String[] | String | null
  requestedAmount_eq?: String | null
  requestedAmount_contains?: String | null
  requestedAmount_startsWith?: String | null
  requestedAmount_endsWith?: String | null
  requestedAmount_in?: String[] | String | null
  boundedAmount_eq?: String | null
  boundedAmount_contains?: String | null
  boundedAmount_startsWith?: String | null
  boundedAmount_endsWith?: String | null
  boundedAmount_in?: String[] | String | null
  status_eq?: Status | null
  status_in?: Status[] | Status | null
  AND?: KusamaProposalsWhereInput[] | KusamaProposalsWhereInput | null
  OR?: KusamaProposalsWhereInput[] | KusamaProposalsWhereInput | null
}

export interface KusamaProposalsWhereUniqueInput {
  id: ID_Output
}

export interface ProposalHistoryCreateInput {
  value: BigInt
  block: Float
  tip: BigInt
  timestamp: BigInt
  insertedAt: DateTime
}

export interface ProposalHistoryUpdateInput {
  value?: BigInt | null
  block?: Float | null
  tip?: BigInt | null
  timestamp?: BigInt | null
  insertedAt?: DateTime | null
}

export interface ProposalHistoryWhereInput {
  id_eq?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  createdAt_eq?: DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  createdById_eq?: ID_Input | null
  createdById_in?: ID_Output[] | ID_Output | null
  updatedAt_eq?: DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  updatedById_eq?: ID_Input | null
  updatedById_in?: ID_Output[] | ID_Output | null
  deletedAt_all?: Boolean | null
  deletedAt_eq?: DateTime | null
  deletedAt_lt?: DateTime | null
  deletedAt_lte?: DateTime | null
  deletedAt_gt?: DateTime | null
  deletedAt_gte?: DateTime | null
  deletedById_eq?: ID_Input | null
  deletedById_in?: ID_Output[] | ID_Output | null
  value_eq?: BigInt | null
  value_gt?: BigInt | null
  value_gte?: BigInt | null
  value_lt?: BigInt | null
  value_lte?: BigInt | null
  value_in?: BigInt[] | BigInt | null
  block_eq?: Int | null
  block_gt?: Int | null
  block_gte?: Int | null
  block_lt?: Int | null
  block_lte?: Int | null
  block_in?: Int[] | Int | null
  tip_eq?: BigInt | null
  tip_gt?: BigInt | null
  tip_gte?: BigInt | null
  tip_lt?: BigInt | null
  tip_lte?: BigInt | null
  tip_in?: BigInt[] | BigInt | null
  timestamp_eq?: BigInt | null
  timestamp_gt?: BigInt | null
  timestamp_gte?: BigInt | null
  timestamp_lt?: BigInt | null
  timestamp_lte?: BigInt | null
  timestamp_in?: BigInt[] | BigInt | null
  insertedAt_eq?: DateTime | null
  insertedAt_lt?: DateTime | null
  insertedAt_lte?: DateTime | null
  insertedAt_gt?: DateTime | null
  insertedAt_gte?: DateTime | null
  AND?: ProposalHistoryWhereInput[] | ProposalHistoryWhereInput | null
  OR?: ProposalHistoryWhereInput[] | ProposalHistoryWhereInput | null
}

export interface ProposalHistoryWhereUniqueInput {
  id: ID_Output
}

export interface BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
}

export interface DeleteResponse {
  id: ID_Output
}

export interface BaseModel extends BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
}

export interface BaseModelUUID extends BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
}

export interface KusamaProposals extends BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
  proposalIndex?: Int | null
  proposer?: String | null
  beneficiary?: String | null
  requestedAmount?: String | null
  boundedAmount?: String | null
  status?: Status | null
}

export interface KusamaProposalsConnection {
  totalCount: Int
  edges: Array<KusamaProposalsEdge>
  pageInfo: PageInfo
}

export interface KusamaProposalsEdge {
  node: KusamaProposals
  cursor: String
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface ProcessorState {
  lastCompleteBlock: Float
  lastProcessedEvent: String
  indexerHead: Float
  chainHead: Float
}

/*
 *  All transfers 

 */
export interface ProposalHistory extends BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
  value: BigInt
  block: Int
  tip: BigInt
  timestamp: BigInt
  insertedAt: DateTime
}

export interface ProposalHistoryConnection {
  totalCount: Int
  edges: Array<ProposalHistoryEdge>
  pageInfo: PageInfo
}

export interface ProposalHistoryEdge {
  node: ProposalHistory
  cursor: String
}

export interface StandardDeleteResponse {
  id: ID_Output
}

/*
GraphQL representation of BigInt
*/
export type BigInt = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The javascript `Date` as string. Type represents date and time as the ISO Date string.
*/
export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string