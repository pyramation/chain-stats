import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Bitcannaid } from "./bitcannaid";
import { Supplychain } from "./supplychain";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBitcannaidRequest, QueryGetBitcannaidResponse, QueryAllBitcannaidRequest, QueryAllBitcannaidResponse, QueryGetSupplychainRequest, QueryGetSupplychainResponse, QueryAllSupplychainRequest, QueryAllSupplychainResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the parameters of the module.*/

  bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
  /*Queries a Bitcannaid by id.*/

  bitcannaidAll(request: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
  /*Queries a list of Bitcannaid items.*/

  supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
  /*Queries a Supplychain by id.*/

  supplychainAll(request: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
  /*Queries a list of Supplychain items.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.bitcannaid = this.bitcannaid.bind(this);
    this.bitcannaidAll = this.bitcannaidAll.bind(this);
    this.supplychain = this.supplychain.bind(this);
    this.supplychainAll = this.supplychainAll.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse> {
    const data = QueryGetBitcannaidRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Bitcannaid", data);
    return promise.then(data => QueryGetBitcannaidResponse.decode(new _m0.Reader(data)));
  }

  bitcannaidAll(request: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse> {
    const data = QueryAllBitcannaidRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "BitcannaidAll", data);
    return promise.then(data => QueryAllBitcannaidResponse.decode(new _m0.Reader(data)));
  }

  supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse> {
    const data = QueryGetSupplychainRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "Supplychain", data);
    return promise.then(data => QueryGetSupplychainResponse.decode(new _m0.Reader(data)));
  }

  supplychainAll(request: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse> {
    const data = QueryAllSupplychainRequest.encode(request).finish();
    const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Query", "SupplychainAll", data);
    return promise.then(data => QueryAllSupplychainResponse.decode(new _m0.Reader(data)));
  }

}