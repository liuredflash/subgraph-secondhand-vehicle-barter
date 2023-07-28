import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  VehicleBartered,
  VehicleBid,
  VehicleBidCancelled,
  VehicleCancelled,
  VehiclePosted
} from "../generated/SecondHandVehicleMarketplace/SecondHandVehicleMarketplace"

export function createVehicleBarteredEvent(
  nftAddress: Address,
  sellerAddress: Address,
  buyerAddress: Address,
  sellerTokenId: BigInt,
  buyerTokenId: BigInt
): VehicleBartered {
  let vehicleBarteredEvent = changetype<VehicleBartered>(newMockEvent())

  vehicleBarteredEvent.parameters = new Array()

  vehicleBarteredEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  vehicleBarteredEvent.parameters.push(
    new ethereum.EventParam(
      "sellerAddress",
      ethereum.Value.fromAddress(sellerAddress)
    )
  )
  vehicleBarteredEvent.parameters.push(
    new ethereum.EventParam(
      "buyerAddress",
      ethereum.Value.fromAddress(buyerAddress)
    )
  )
  vehicleBarteredEvent.parameters.push(
    new ethereum.EventParam(
      "sellerTokenId",
      ethereum.Value.fromUnsignedBigInt(sellerTokenId)
    )
  )
  vehicleBarteredEvent.parameters.push(
    new ethereum.EventParam(
      "buyerTokenId",
      ethereum.Value.fromUnsignedBigInt(buyerTokenId)
    )
  )

  return vehicleBarteredEvent
}

export function createVehicleBidEvent(
  nftAddress: Address,
  sellerAddress: Address,
  buyerAddress: Address,
  sellerTokenId: BigInt,
  buyerTokenId: BigInt
): VehicleBid {
  let vehicleBidEvent = changetype<VehicleBid>(newMockEvent())

  vehicleBidEvent.parameters = new Array()

  vehicleBidEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  vehicleBidEvent.parameters.push(
    new ethereum.EventParam(
      "sellerAddress",
      ethereum.Value.fromAddress(sellerAddress)
    )
  )
  vehicleBidEvent.parameters.push(
    new ethereum.EventParam(
      "buyerAddress",
      ethereum.Value.fromAddress(buyerAddress)
    )
  )
  vehicleBidEvent.parameters.push(
    new ethereum.EventParam(
      "sellerTokenId",
      ethereum.Value.fromUnsignedBigInt(sellerTokenId)
    )
  )
  vehicleBidEvent.parameters.push(
    new ethereum.EventParam(
      "buyerTokenId",
      ethereum.Value.fromUnsignedBigInt(buyerTokenId)
    )
  )

  return vehicleBidEvent
}

export function createVehicleBidCancelledEvent(
  nftAddress: Address,
  sellerAddress: Address,
  buyerAddress: Address,
  sellerTokenId: BigInt,
  buyerTokenId: BigInt
): VehicleBidCancelled {
  let vehicleBidCancelledEvent = changetype<VehicleBidCancelled>(newMockEvent())

  vehicleBidCancelledEvent.parameters = new Array()

  vehicleBidCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  vehicleBidCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "sellerAddress",
      ethereum.Value.fromAddress(sellerAddress)
    )
  )
  vehicleBidCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "buyerAddress",
      ethereum.Value.fromAddress(buyerAddress)
    )
  )
  vehicleBidCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "sellerTokenId",
      ethereum.Value.fromUnsignedBigInt(sellerTokenId)
    )
  )
  vehicleBidCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "buyerTokenId",
      ethereum.Value.fromUnsignedBigInt(buyerTokenId)
    )
  )

  return vehicleBidCancelledEvent
}

export function createVehicleCancelledEvent(
  nftAddress: Address,
  sellerAddress: Address,
  sellerTokenId: BigInt
): VehicleCancelled {
  let vehicleCancelledEvent = changetype<VehicleCancelled>(newMockEvent())

  vehicleCancelledEvent.parameters = new Array()

  vehicleCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  vehicleCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "sellerAddress",
      ethereum.Value.fromAddress(sellerAddress)
    )
  )
  vehicleCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "sellerTokenId",
      ethereum.Value.fromUnsignedBigInt(sellerTokenId)
    )
  )

  return vehicleCancelledEvent
}

export function createVehiclePostedEvent(
  nftAddress: Address,
  sellerAddress: Address,
  sellerTokenId: BigInt
): VehiclePosted {
  let vehiclePostedEvent = changetype<VehiclePosted>(newMockEvent())

  vehiclePostedEvent.parameters = new Array()

  vehiclePostedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  vehiclePostedEvent.parameters.push(
    new ethereum.EventParam(
      "sellerAddress",
      ethereum.Value.fromAddress(sellerAddress)
    )
  )
  vehiclePostedEvent.parameters.push(
    new ethereum.EventParam(
      "sellerTokenId",
      ethereum.Value.fromUnsignedBigInt(sellerTokenId)
    )
  )

  return vehiclePostedEvent
}
