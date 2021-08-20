import { EventContext, StoreContext } from '@joystream/hydra-common'
import { Treasury } from './generated/types'
import { KusamaProposals, Status } from '../generated/graphql-server/src/modules/kusama-proposals/kusama-proposals.model';
import { readFileSync } from 'fs'
import BN from 'bignumber.js'

const getRejectedProposalFromFile = () => JSON.parse(readFileSync(`${__dirname}/../../rejectedImmediately.json`, 'utf-8')).proposalIndexes

export async function treasuryProposed({ event, store }: EventContext & StoreContext) {
  const [ proposalIndex ] = new Treasury.ProposedEvent(event).params

  if (event.extrinsic === undefined) {
    throw new Error(`No extrinsic has been provided`)
  }

  const rejectedPropId: number[] = getRejectedProposalFromFile()
  const isRejected = rejectedPropId.includes(proposalIndex.toNumber())

  const [requestedAmount, beneficiary] = event.extrinsic.args
  if (event.extrinsic.args[0].name === 'threshold') return

  const proposal = new KusamaProposals()


  const beneficiaryAccount: string = Array.isArray(beneficiary.value) ? beneficiary.value.toString() : (typeof beneficiary.value === 'string' ? beneficiary.value.toString() : (beneficiary.value as any).id.toString())

  proposal.proposalIndex = proposalIndex.toNumber()
  proposal.requestedAmount = requestedAmount.value.toString()
  proposal.proposer = event.extrinsic.signer
  proposal.beneficiary = beneficiaryAccount
  proposal.boundedAmount = (new BN(requestedAmount.value.toString()).multipliedBy(new BN(0.05))).toString()
  proposal.status = !isRejected ? Status.Proposed : Status.Rejected
  store.save(proposal)
}

export async function treasuryAwarded({ event, store }: EventContext & StoreContext) {
  const [ proposalIndex] = new Treasury.AwardedEvent(event).params

  const proposal = await store.get(KusamaProposals, { where: `proposal_index = '${proposalIndex.toNumber()}'` })
  if (!proposal) return

  proposal.status = Status.Awarded

  store.save(proposal)
}

export async function treasuryRejected({ event, store }: EventContext & StoreContext) {
  const [ proposalIndex, ] = new Treasury.RejectedEvent(event).params

  const proposal = await store.get(KusamaProposals, { where: `proposal_index = '${proposalIndex.toNumber()}'` })
  if (!proposal) return

  proposal.status = Status.Rejected

  store.save(proposal)
}
