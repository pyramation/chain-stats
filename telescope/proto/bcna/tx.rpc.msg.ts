import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateBitcannaid, MsgCreateBitcannaidResponse, MsgUpdateBitcannaid, MsgUpdateBitcannaidResponse, MsgDeleteBitcannaid, MsgDeleteBitcannaidResponse, MsgCreateSupplychain, MsgCreateSupplychainResponse, MsgUpdateSupplychain, MsgUpdateSupplychainResponse, MsgDeleteSupplychain, MsgDeleteSupplychainResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  createBitcannaid(request: MsgCreateBitcannaid): Promise<MsgCreateBitcannaidResponse>;
  /*null*/

  updateBitcannaid(request: MsgUpdateBitcannaid): Promise<MsgUpdateBitcannaidResponse>;
  /*null*/

  deleteBitcannaid(request: MsgDeleteBitcannaid): Promise<MsgDeleteBitcannaidResponse>;
  /*null*/

  createSupplychain(request: MsgCreateSupplychain): Promise<MsgCreateSupplychainResponse>;
  /*null*/

  updateSupplychain(request: MsgUpdateSupplychain): Promise<MsgUpdateSupplychainResponse>;
  /*null*/

  deleteSupplychain(request: MsgDeleteSupplychain): Promise<MsgDeleteSupplychainResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createBitcannaid = this.createBitcannaid.bind(this);
    this.updateBitcannaid = this.updateBitcannaid.bind(this);
    this.deleteBitcannaid = this.deleteBitcannaid.bind(this);
    this.createSupplychain = this.createSupplychain.bind(this);
    this.updateSupplychain = this.updateSupplychain.bind(this);
    this.deleteSupplychain = this.deleteSupplychain.bind(this);
  }

  createBitcannaid(request: MsgCreateBitcannaid): Promise<MsgCreateBitcannaidResponse> {
    const data = MsgCreateBitcannaid.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "CreateBitcannaid", data);
    return promise.then(data => MsgCreateBitcannaidResponse.decode(new _m0.Reader(data)));
  }

  updateBitcannaid(request: MsgUpdateBitcannaid): Promise<MsgUpdateBitcannaidResponse> {
    const data = MsgUpdateBitcannaid.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "UpdateBitcannaid", data);
    return promise.then(data => MsgUpdateBitcannaidResponse.decode(new _m0.Reader(data)));
  }

  deleteBitcannaid(request: MsgDeleteBitcannaid): Promise<MsgDeleteBitcannaidResponse> {
    const data = MsgDeleteBitcannaid.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "DeleteBitcannaid", data);
    return promise.then(data => MsgDeleteBitcannaidResponse.decode(new _m0.Reader(data)));
  }

  createSupplychain(request: MsgCreateSupplychain): Promise<MsgCreateSupplychainResponse> {
    const data = MsgCreateSupplychain.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "CreateSupplychain", data);
    return promise.then(data => MsgCreateSupplychainResponse.decode(new _m0.Reader(data)));
  }

  updateSupplychain(request: MsgUpdateSupplychain): Promise<MsgUpdateSupplychainResponse> {
    const data = MsgUpdateSupplychain.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "UpdateSupplychain", data);
    return promise.then(data => MsgUpdateSupplychainResponse.decode(new _m0.Reader(data)));
  }

  deleteSupplychain(request: MsgDeleteSupplychain): Promise<MsgDeleteSupplychainResponse> {
    const data = MsgDeleteSupplychain.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "DeleteSupplychain", data);
    return promise.then(data => MsgDeleteSupplychainResponse.decode(new _m0.Reader(data)));
  }

}