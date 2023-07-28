import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { VehicleBartered } from "../generated/schema"
import { VehicleBartered as VehicleBarteredEvent } from "../generated/SecondHandVehicleMarketplace/SecondHandVehicleMarketplace"
import { handleVehicleBartered } from "../src/second-hand-vehicle-marketplace"
import { createVehicleBarteredEvent } from "./second-hand-vehicle-marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nftAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let sellerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let buyerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let sellerTokenId = BigInt.fromI32(234)
    let buyerTokenId = BigInt.fromI32(234)
    let newVehicleBarteredEvent = createVehicleBarteredEvent(
      nftAddress,
      sellerAddress,
      buyerAddress,
      sellerTokenId,
      buyerTokenId
    )
    handleVehicleBartered(newVehicleBarteredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("VehicleBartered created and stored", () => {
    assert.entityCount("VehicleBartered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "VehicleBartered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "VehicleBartered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sellerAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "VehicleBartered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyerAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "VehicleBartered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sellerTokenId",
      "234"
    )
    assert.fieldEquals(
      "VehicleBartered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyerTokenId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
