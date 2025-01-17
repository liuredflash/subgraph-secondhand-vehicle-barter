// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ActiveVehicle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ActiveVehicle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ActiveVehicle must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ActiveVehicle", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ActiveVehicle | null {
    return changetype<ActiveVehicle | null>(
      store.get_in_block("ActiveVehicle", id)
    );
  }

  static load(id: string): ActiveVehicle | null {
    return changetype<ActiveVehicle | null>(store.get("ActiveVehicle", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get buyerAddress(): Bytes | null {
    let value = this.get("buyerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set buyerAddress(value: Bytes | null) {
    if (!value) {
      this.unset("buyerAddress");
    } else {
      this.set("buyerAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get sellerTokenId(): BigInt {
    let value = this.get("sellerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sellerTokenId(value: BigInt) {
    this.set("sellerTokenId", Value.fromBigInt(value));
  }

  get buyerTokenId(): BigInt | null {
    let value = this.get("buyerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set buyerTokenId(value: BigInt | null) {
    if (!value) {
      this.unset("buyerTokenId");
    } else {
      this.set("buyerTokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get isPosting(): boolean {
    let value = this.get("isPosting");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isPosting(value: boolean) {
    this.set("isPosting", Value.fromBoolean(value));
  }

  get isBiding(): boolean {
    let value = this.get("isBiding");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isBiding(value: boolean) {
    this.set("isBiding", Value.fromBoolean(value));
  }

  get isBartered(): boolean {
    let value = this.get("isBartered");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isBartered(value: boolean) {
    this.set("isBartered", Value.fromBoolean(value));
  }
}

export class BidingVehicle extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BidingVehicle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type BidingVehicle must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BidingVehicle", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): BidingVehicle | null {
    return changetype<BidingVehicle | null>(
      store.get_in_block("BidingVehicle", id.toHexString())
    );
  }

  static load(id: Bytes): BidingVehicle | null {
    return changetype<BidingVehicle | null>(
      store.get("BidingVehicle", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get buyerAddress(): Bytes | null {
    let value = this.get("buyerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set buyerAddress(value: Bytes | null) {
    if (!value) {
      this.unset("buyerAddress");
    } else {
      this.set("buyerAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get sellerTokenId(): BigInt {
    let value = this.get("sellerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sellerTokenId(value: BigInt) {
    this.set("sellerTokenId", Value.fromBigInt(value));
  }

  get buyerTokenId(): BigInt | null {
    let value = this.get("buyerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set buyerTokenId(value: BigInt | null) {
    if (!value) {
      this.unset("buyerTokenId");
    } else {
      this.set("buyerTokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get isBiding(): boolean {
    let value = this.get("isBiding");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isBiding(value: boolean) {
    this.set("isBiding", Value.fromBoolean(value));
  }
}

export class VehicleBartered extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save VehicleBartered entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type VehicleBartered must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("VehicleBartered", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): VehicleBartered | null {
    return changetype<VehicleBartered | null>(
      store.get_in_block("VehicleBartered", id.toHexString())
    );
  }

  static load(id: Bytes): VehicleBartered | null {
    return changetype<VehicleBartered | null>(
      store.get("VehicleBartered", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get buyerAddress(): Bytes {
    let value = this.get("buyerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set buyerAddress(value: Bytes) {
    this.set("buyerAddress", Value.fromBytes(value));
  }

  get sellerTokenId(): BigInt {
    let value = this.get("sellerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sellerTokenId(value: BigInt) {
    this.set("sellerTokenId", Value.fromBigInt(value));
  }

  get buyerTokenId(): BigInt {
    let value = this.get("buyerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set buyerTokenId(value: BigInt) {
    this.set("buyerTokenId", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class VehicleBid extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save VehicleBid entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type VehicleBid must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("VehicleBid", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): VehicleBid | null {
    return changetype<VehicleBid | null>(
      store.get_in_block("VehicleBid", id.toHexString())
    );
  }

  static load(id: Bytes): VehicleBid | null {
    return changetype<VehicleBid | null>(
      store.get("VehicleBid", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get buyerAddress(): Bytes {
    let value = this.get("buyerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set buyerAddress(value: Bytes) {
    this.set("buyerAddress", Value.fromBytes(value));
  }

  get sellerTokenId(): BigInt {
    let value = this.get("sellerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sellerTokenId(value: BigInt) {
    this.set("sellerTokenId", Value.fromBigInt(value));
  }

  get buyerTokenId(): BigInt {
    let value = this.get("buyerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set buyerTokenId(value: BigInt) {
    this.set("buyerTokenId", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class VehicleBidCancelled extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save VehicleBidCancelled entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type VehicleBidCancelled must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("VehicleBidCancelled", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): VehicleBidCancelled | null {
    return changetype<VehicleBidCancelled | null>(
      store.get_in_block("VehicleBidCancelled", id.toHexString())
    );
  }

  static load(id: Bytes): VehicleBidCancelled | null {
    return changetype<VehicleBidCancelled | null>(
      store.get("VehicleBidCancelled", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get buyerAddress(): Bytes {
    let value = this.get("buyerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set buyerAddress(value: Bytes) {
    this.set("buyerAddress", Value.fromBytes(value));
  }

  get sellerTokenId(): BigInt {
    let value = this.get("sellerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sellerTokenId(value: BigInt) {
    this.set("sellerTokenId", Value.fromBigInt(value));
  }

  get buyerTokenId(): BigInt {
    let value = this.get("buyerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set buyerTokenId(value: BigInt) {
    this.set("buyerTokenId", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class VehicleCancelled extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save VehicleCancelled entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type VehicleCancelled must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("VehicleCancelled", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): VehicleCancelled | null {
    return changetype<VehicleCancelled | null>(
      store.get_in_block("VehicleCancelled", id.toHexString())
    );
  }

  static load(id: Bytes): VehicleCancelled | null {
    return changetype<VehicleCancelled | null>(
      store.get("VehicleCancelled", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get sellerTokenId(): BigInt {
    let value = this.get("sellerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sellerTokenId(value: BigInt) {
    this.set("sellerTokenId", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class VehiclePosted extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save VehiclePosted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type VehiclePosted must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("VehiclePosted", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): VehiclePosted | null {
    return changetype<VehiclePosted | null>(
      store.get_in_block("VehiclePosted", id.toHexString())
    );
  }

  static load(id: Bytes): VehiclePosted | null {
    return changetype<VehiclePosted | null>(
      store.get("VehiclePosted", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get sellerTokenId(): BigInt {
    let value = this.get("sellerTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sellerTokenId(value: BigInt) {
    this.set("sellerTokenId", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
