import {
  VehicleBartered as VehicleBarteredEvent,
  VehicleBid as VehicleBidEvent,
  VehicleBidCancelled as VehicleBidCancelledEvent,
  VehicleCancelled as VehicleCancelledEvent,
  VehiclePosted as VehiclePostedEvent
} from "../generated/SecondHandVehicleMarketplace/SecondHandVehicleMarketplace"
import {
  ActiveVehicle,
  BidingVehicle,
  VehicleBartered,
  VehicleBid,
  VehicleBidCancelled,
  VehicleCancelled,
  VehiclePosted
} from "../generated/schema"

import { BigInt, Address } from "@graphprotocol/graph-ts"

export function handleVehicleBartered(event: VehicleBarteredEvent): void {
  let entity = new VehicleBartered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  let activeItemSeller = ActiveVehicle.load(
    getIdFromEventParams(event.params.sellerTokenId, event.params.sellerAddress)
  )

  let activeItemBuyer = ActiveVehicle.load(
    getIdFromEventParams(event.params.buyerTokenId, event.params.buyerAddress)
  )
  if (activeItemSeller) {
    activeItemSeller.nftAddress = event.params.nftAddress
    activeItemSeller.sellerAddress = event.params.sellerAddress
    activeItemSeller.sellerTokenId = event.params.sellerTokenId
    activeItemSeller.buyerAddress = event.params.buyerAddress
    activeItemSeller.buyerTokenId = event.params.buyerTokenId
    activeItemSeller.isPosting = false
    activeItemSeller.isBiding = false
    activeItemSeller.isBartered = true

    activeItemSeller.save()
  }

  if (activeItemBuyer) {
    activeItemBuyer.nftAddress = event.params.nftAddress
    activeItemBuyer.sellerAddress = event.params.buyerAddress
    activeItemBuyer.sellerTokenId = event.params.buyerTokenId
    activeItemBuyer.buyerAddress = event.params.sellerAddress
    activeItemBuyer.buyerTokenId = event.params.sellerTokenId
    activeItemBuyer.isPosting = false
    activeItemBuyer.isBiding = false
    activeItemBuyer.isBartered = true

    activeItemBuyer.save()
  }

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

  let activeItem = ActiveVehicle.load(
    getIdFromEventParams(event.params.sellerTokenId, event.params.sellerAddress)
  )

  if (!activeItem) {
    activeItem = new ActiveVehicle(
      getIdFromEventParams(event.params.sellerTokenId, event.params.sellerAddress)
    )
  }

  let bidVehicle = new BidingVehicle(
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

  activeItem.nftAddress = event.params.nftAddress
  activeItem.sellerAddress = event.params.sellerAddress
  activeItem.sellerTokenId = event.params.sellerTokenId
  activeItem.buyerAddress = event.params.buyerAddress
  activeItem.buyerTokenId = event.params.buyerTokenId
  activeItem.isPosting = true
  activeItem.isBiding = true
  activeItem.isBartered = false

  bidVehicle.nftAddress = event.params.nftAddress
  bidVehicle.sellerAddress = event.params.sellerAddress
  bidVehicle.sellerTokenId = event.params.sellerTokenId
  bidVehicle.buyerAddress = event.params.buyerAddress
  bidVehicle.buyerTokenId = event.params.buyerTokenId
  bidVehicle.isBiding = true

  activeItem.save()
  bidVehicle.save()

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

  let activeItem = ActiveVehicle.load(
    getIdFromEventParams(event.params.sellerTokenId, event.params.sellerAddress)
  )

  if (!activeItem) {
    activeItem = new ActiveVehicle(
      getIdFromEventParams(event.params.sellerTokenId, event.params.sellerAddress)
    )
  }

  entity.nftAddress = event.params.nftAddress
  entity.sellerAddress = event.params.sellerAddress
  entity.sellerTokenId = event.params.sellerTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  activeItem.nftAddress = event.params.nftAddress
  activeItem.sellerAddress = event.params.sellerAddress
  activeItem.sellerTokenId = event.params.sellerTokenId
  activeItem.isPosting = false
  activeItem.isBiding = false
  activeItem.isBartered = false

  activeItem.save()

  entity.save()
}

export function handleVehiclePosted(event: VehiclePostedEvent): void {
  let entity = new VehiclePosted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  let activeItem = ActiveVehicle.load(
    getIdFromEventParams(event.params.sellerTokenId, event.params.sellerAddress)
  )

  if (!activeItem) {
    activeItem = new ActiveVehicle(
      getIdFromEventParams(event.params.sellerTokenId, event.params.sellerAddress)
    )
  }

  entity.nftAddress = event.params.nftAddress
  entity.sellerAddress = event.params.sellerAddress
  entity.sellerTokenId = event.params.sellerTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  activeItem.nftAddress = event.params.nftAddress
  activeItem.sellerAddress = event.params.sellerAddress
  activeItem.sellerTokenId = event.params.sellerTokenId
  activeItem.isPosting = true
  activeItem.isBiding = false
  activeItem.isBartered = false

  activeItem.save()
  entity.save()
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString()
}