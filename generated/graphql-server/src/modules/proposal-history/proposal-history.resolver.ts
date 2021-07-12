import {
  Arg,
  Args,
  Mutation,
  Query,
  Root,
  Resolver,
  FieldResolver,
  ObjectType,
  Field,
  Int,
  ArgsType,
  Info,
  Ctx
} from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { Inject } from 'typedi';
import { Min } from 'class-validator';
import { Fields, StandardDeleteResponse, UserId, PageInfo, RawFields, NestedFields, BaseContext } from 'warthog';

import {
  ProposalHistoryCreateInput,
  ProposalHistoryCreateManyArgs,
  ProposalHistoryUpdateArgs,
  ProposalHistoryWhereArgs,
  ProposalHistoryWhereInput,
  ProposalHistoryWhereUniqueInput,
  ProposalHistoryOrderByEnum
} from '../../../generated';

import { ProposalHistory } from './proposal-history.model';
import { ProposalHistoryService } from './proposal-history.service';

@ObjectType()
export class ProposalHistoryEdge {
  @Field(() => ProposalHistory, { nullable: false })
  node!: ProposalHistory;

  @Field(() => String, { nullable: false })
  cursor!: string;
}

@ObjectType()
export class ProposalHistoryConnection {
  @Field(() => Int, { nullable: false })
  totalCount!: number;

  @Field(() => [ProposalHistoryEdge], { nullable: false })
  edges!: ProposalHistoryEdge[];

  @Field(() => PageInfo, { nullable: false })
  pageInfo!: PageInfo;
}

@ArgsType()
export class ConnectionPageInputOptions {
  @Field(() => Int, { nullable: true })
  @Min(0)
  first?: number;

  @Field(() => String, { nullable: true })
  after?: string; // V3: TODO: should we make a RelayCursor scalar?

  @Field(() => Int, { nullable: true })
  @Min(0)
  last?: number;

  @Field(() => String, { nullable: true })
  before?: string;
}

@ArgsType()
export class ProposalHistoryConnectionWhereArgs extends ConnectionPageInputOptions {
  @Field(() => ProposalHistoryWhereInput, { nullable: true })
  where?: ProposalHistoryWhereInput;

  @Field(() => ProposalHistoryOrderByEnum, { nullable: true })
  orderBy?: [ProposalHistoryOrderByEnum];
}

@Resolver(ProposalHistory)
export class ProposalHistoryResolver {
  constructor(@Inject('ProposalHistoryService') public readonly service: ProposalHistoryService) {}

  @Query(() => [ProposalHistory])
  async proposalHistories(
    @Args() { where, orderBy, limit, offset }: ProposalHistoryWhereArgs,
    @Fields() fields: string[]
  ): Promise<ProposalHistory[]> {
    return this.service.find<ProposalHistoryWhereInput>(where, orderBy, limit, offset, fields);
  }

  @Query(() => ProposalHistory, { nullable: true })
  async proposalHistoryByUniqueInput(
    @Arg('where') where: ProposalHistoryWhereUniqueInput,
    @Fields() fields: string[]
  ): Promise<ProposalHistory | null> {
    const result = await this.service.find(where, undefined, 1, 0, fields);
    return result && result.length >= 1 ? result[0] : null;
  }

  @Query(() => ProposalHistoryConnection)
  async proposalHistoriesConnection(
    @Args() { where, orderBy, ...pageOptions }: ProposalHistoryConnectionWhereArgs,
    @Info() info: any
  ): Promise<ProposalHistoryConnection> {
    const rawFields = graphqlFields(info, {}, { excludedFields: ['__typename'] });

    let result: any = {
      totalCount: 0,
      edges: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false
      }
    };
    // If the related database table does not have any records then an error is thrown to the client
    // by warthog
    try {
      result = await this.service.findConnection<ProposalHistoryWhereInput>(where, orderBy, pageOptions, rawFields);
    } catch (err) {
      console.log(err);
      // TODO: should continue to return this on `Error: Items is empty` or throw the error
      if (!(err.message as string).includes('Items is empty')) throw err;
    }

    return result as Promise<ProposalHistoryConnection>;
  }
}
