import {
  VehicleBartered as VehicleBarteredEvent,
  VehicleBid as VehicleBidEvent,
  VehicleBidCancelled as VehicleBidCancelledEvent,
  VehicleCancelled as VehicleCancelledEvent,
  VehiclePosted as VehiclePostedEvent
} from "../generated/SecondHandVehicleMarketplace/SecondHandVehicleMarketplace"
import {
  VehicleBartered,
  VehicleBid,
  VehicleBidCancelled,
  VehicleCancelled,
  VehiclePosted
} from "../generated/schema"

export function handleVehicleBartered(event: VehicleBarteredEvent): void {
  let entity = new VehicleBartered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.sellerAddress = event.params.sellerAddress
  entity.buyerAddress = event.params.buyerAddress
  entity.sellerTokenId = event.params.sellerTokenId
  entity.buyerTokenId = event.params.buyerTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVehicleBid(event: VehicleBidEvent): void {
  let entity = new VehicleBid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.sellerAddress = event.params.sellerAddress
  entity.buyerAddress = event.params.buyerAddress
  entity.sellerTokenId = event.params.sellerTokenId
  entity.buyerTokenId = event.params.buyerTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVehicleBidCancelled(
  event: VehicleBidCancelledEvent
): void {
  let entity = new VehicleBidCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.sellerAddress = event.params.sellerAddress
  entity.buyerAddress = event.params.buyerAddress
  entity.sellerTokenId = event.params.sellerTokenId
  entity.buyerTokenId = event.params.buyerTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVehicleCancelled(event: VehicleCancelledEvent): void {
  let entity = new VehicleCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.sellerAddress = event.params.sellerAddress
  entity.sellerTokenId = event.params.sellerTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVehiclePosted(event: VehiclePostedEvent): void {
  let entity = new VehiclePosted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.sellerAddress = event.params.sellerAddress
  entity.sellerTokenId = event.params.sellerTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
