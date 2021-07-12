import { createTypeUnsafe } from "@polkadot/types/create";
import { SubstrateEvent, SubstrateExtrinsic } from "@joystream/hydra-common";
import { Codec } from "@polkadot/types/types";
import { typeRegistry } from ".";

import {
  AccountId,
  Balance,
  BalanceOf,
  LookupSource,
  ProposalIndex
} from "@polkadot/types/interfaces";
import { Compact } from "@polkadot/types";

export namespace Treasury {
  /**
   *  New proposal.
   *
   *  Event parameters: [ProposalIndex, ]
   */
  export class ProposedEvent {
    public readonly expectedParamTypes = ["ProposalIndex"];

    constructor(public readonly ctx: SubstrateEvent) {}

    get params(): [ProposalIndex] {
      return [
        createTypeUnsafe<ProposalIndex & Codec>(typeRegistry, "ProposalIndex", [
          this.ctx.params[0].value
        ])
      ];
    }

    validateParams(): boolean {
      if (this.expectedParamTypes.length !== this.ctx.params.length) {
        return false;
      }
      let valid = true;
      this.expectedParamTypes.forEach((type, i) => {
        if (type !== this.ctx.params[i].type) {
          valid = false;
        }
      });
      return valid;
    }
  }

  /**
   *  Some funds have been allocated.
   *
   *  Event parameters: [ProposalIndex, Balance, AccountId, ]
   */
  export class AwardedEvent {
    public readonly expectedParamTypes = [
      "ProposalIndex",
      "Balance",
      "AccountId"
    ];

    constructor(public readonly ctx: SubstrateEvent) {}

    get params(): [ProposalIndex, Balance, AccountId] {
      return [
        createTypeUnsafe<ProposalIndex & Codec>(typeRegistry, "ProposalIndex", [
          this.ctx.params[0].value
        ]),
        createTypeUnsafe<Balance & Codec>(typeRegistry, "Balance", [
          this.ctx.params[1].value
        ]),
        createTypeUnsafe<AccountId & Codec>(typeRegistry, "AccountId", [
          this.ctx.params[2].value
        ])
      ];
    }

    validateParams(): boolean {
      if (this.expectedParamTypes.length !== this.ctx.params.length) {
        return false;
      }
      let valid = true;
      this.expectedParamTypes.forEach((type, i) => {
        if (type !== this.ctx.params[i].type) {
          valid = false;
        }
      });
      return valid;
    }
  }

  /**
   *  A proposal was rejected; funds were slashed.
   *
   *  Event parameters: [ProposalIndex, Balance, ]
   */
  export class RejectedEvent {
    public readonly expectedParamTypes = ["ProposalIndex", "Balance"];

    constructor(public readonly ctx: SubstrateEvent) {}

    get params(): [ProposalIndex, Balance] {
      return [
        createTypeUnsafe<ProposalIndex & Codec>(typeRegistry, "ProposalIndex", [
          this.ctx.params[0].value
        ]),
        createTypeUnsafe<Balance & Codec>(typeRegistry, "Balance", [
          this.ctx.params[1].value
        ])
      ];
    }

    validateParams(): boolean {
      if (this.expectedParamTypes.length !== this.ctx.params.length) {
        return false;
      }
      let valid = true;
      this.expectedParamTypes.forEach((type, i) => {
        if (type !== this.ctx.params[i].type) {
          valid = false;
        }
      });
      return valid;
    }
  }

  /**
   *  Put forward a suggestion for spending. A deposit proportional to the value
   *  is reserved and slashed if the proposal is rejected. It is returned once the
   *  proposal is awarded.
   *
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change, one extra DB entry.
   *  # </weight>
   */
  export class ProposeSpendCall {
    public readonly extrinsic: SubstrateExtrinsic;
    public readonly expectedArgTypes = ["Compact<BalanceOf>", "LookupSource"];

    constructor(public readonly ctx: SubstrateEvent) {
      if (ctx.extrinsic === undefined) {
        throw new Error(`No call data has been provided`);
      }
      this.extrinsic = ctx.extrinsic;
    }

    get args(): ProposeSpend_Args {
      return new ProposeSpend_Args(this.extrinsic);
    }

    validateArgs(): boolean {
      if (this.expectedArgTypes.length !== this.extrinsic.args.length) {
        return false;
      }
      let valid = true;
      this.expectedArgTypes.forEach((type, i) => {
        if (type !== this.extrinsic.args[i].type) {
          valid = false;
        }
      });
      return valid;
    }
  }

  class ProposeSpend_Args {
    constructor(public readonly extrinsic: SubstrateExtrinsic) {}

    get value(): Compact<BalanceOf> {
      return createTypeUnsafe<Compact<BalanceOf> & Codec>(
        typeRegistry,
        "Compact<BalanceOf>",
        [this.extrinsic.args[0].value]
      );
    }

    get beneficiary(): LookupSource {
      return createTypeUnsafe<LookupSource & Codec>(
        typeRegistry,
        "LookupSource",
        [this.extrinsic.args[1].value]
      );
    }
  }
  /**
   *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
   *  and the original deposit will be returned.
   *
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change.
   *  # </weight>
   */
  export class ApproveProposalCall {
    public readonly extrinsic: SubstrateExtrinsic;
    public readonly expectedArgTypes = ["Compact<ProposalIndex>"];

    constructor(public readonly ctx: SubstrateEvent) {
      if (ctx.extrinsic === undefined) {
        throw new Error(`No call data has been provided`);
      }
      this.extrinsic = ctx.extrinsic;
    }

    get args(): ApproveProposal_Args {
      return new ApproveProposal_Args(this.extrinsic);
    }

    validateArgs(): boolean {
      if (this.expectedArgTypes.length !== this.extrinsic.args.length) {
        return false;
      }
      let valid = true;
      this.expectedArgTypes.forEach((type, i) => {
        if (type !== this.extrinsic.args[i].type) {
          valid = false;
        }
      });
      return valid;
    }
  }

  class ApproveProposal_Args {
    constructor(public readonly extrinsic: SubstrateExtrinsic) {}

    get proposalId(): Compact<ProposalIndex> {
      return createTypeUnsafe<Compact<ProposalIndex> & Codec>(
        typeRegistry,
        "Compact<ProposalIndex>",
        [this.extrinsic.args[0].value]
      );
    }
  }
  /**
   *  Reject a proposed spend. The original deposit will be slashed.
   *
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB clear.
   *  # </weight>
   */
  export class RejectProposalCall {
    public readonly extrinsic: SubstrateExtrinsic;
    public readonly expectedArgTypes = ["Compact<ProposalIndex>"];

    constructor(public readonly ctx: SubstrateEvent) {
      if (ctx.extrinsic === undefined) {
        throw new Error(`No call data has been provided`);
      }
      this.extrinsic = ctx.extrinsic;
    }

    get args(): RejectProposal_Args {
      return new RejectProposal_Args(this.extrinsic);
    }

    validateArgs(): boolean {
      if (this.expectedArgTypes.length !== this.extrinsic.args.length) {
        return false;
      }
      let valid = true;
      this.expectedArgTypes.forEach((type, i) => {
        if (type !== this.extrinsic.args[i].type) {
          valid = false;
        }
      });
      return valid;
    }
  }

  class RejectProposal_Args {
    constructor(public readonly extrinsic: SubstrateExtrinsic) {}

    get proposalId(): Compact<ProposalIndex> {
      return createTypeUnsafe<Compact<ProposalIndex> & Codec>(
        typeRegistry,
        "Compact<ProposalIndex>",
        [this.extrinsic.args[0].value]
      );
    }
  }
}
