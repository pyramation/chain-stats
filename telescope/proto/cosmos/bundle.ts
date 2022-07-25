import * as _8 from "./app/v1alpha1/config";
import * as _9 from "./app/v1alpha1/module";
import * as _10 from "./app/v1alpha1/query";
import * as _11 from "./auth/v1beta1/auth";
import * as _12 from "./auth/v1beta1/genesis";
import * as _13 from "./auth/v1beta1/query";
import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/kv/v1beta1/kv";
import * as _26 from "./base/query/v1beta1/pagination";
import * as _27 from "./base/reflection/v1beta1/reflection";
import * as _28 from "./base/reflection/v2alpha1/reflection";
import * as _29 from "./base/snapshots/v1beta1/snapshot";
import * as _30 from "./base/store/v1beta1/commit_info";
import * as _31 from "./base/store/v1beta1/listening";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/v1beta1/capability";
import * as _35 from "./capability/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/tx";
import * as _38 from "./crypto/ed25519/keys";
import * as _39 from "./crypto/hd/v1/hd";
import * as _40 from "./crypto/keyring/v1/record";
import * as _41 from "./crypto/multisig/keys";
import * as _42 from "./crypto/secp256k1/keys";
import * as _43 from "./crypto/secp256r1/keys";
import * as _44 from "./distribution/v1beta1/distribution";
import * as _45 from "./distribution/v1beta1/genesis";
import * as _46 from "./distribution/v1beta1/query";
import * as _47 from "./distribution/v1beta1/tx";
import * as _48 from "./evidence/v1beta1/evidence";
import * as _49 from "./evidence/v1beta1/genesis";
import * as _50 from "./evidence/v1beta1/query";
import * as _51 from "./evidence/v1beta1/tx";
import * as _52 from "./feegrant/v1beta1/feegrant";
import * as _53 from "./feegrant/v1beta1/genesis";
import * as _54 from "./feegrant/v1beta1/query";
import * as _55 from "./feegrant/v1beta1/tx";
import * as _56 from "./genutil/v1beta1/genesis";
import * as _57 from "./gov/v1/genesis";
import * as _58 from "./gov/v1/gov";
import * as _59 from "./gov/v1/query";
import * as _60 from "./gov/v1/tx";
import * as _61 from "./gov/v1beta1/genesis";
import * as _62 from "./gov/v1beta1/gov";
import * as _63 from "./gov/v1beta1/query";
import * as _64 from "./gov/v1beta1/tx";
import * as _65 from "./group/v1/events";
import * as _66 from "./group/v1/genesis";
import * as _67 from "./group/v1/query";
import * as _68 from "./group/v1/tx";
import * as _69 from "./group/v1/types";
import * as _70 from "./mint/v1beta1/genesis";
import * as _71 from "./mint/v1beta1/mint";
import * as _72 from "./mint/v1beta1/query";
import * as _73 from "./msg/v1/msg";
import * as _74 from "./nft/v1beta1/event";
import * as _75 from "./nft/v1beta1/genesis";
import * as _76 from "./nft/v1beta1/nft";
import * as _77 from "./nft/v1beta1/query";
import * as _78 from "./nft/v1beta1/tx";
import * as _79 from "./orm/v1/orm";
import * as _80 from "./orm/v1alpha1/schema";
import * as _81 from "./params/v1beta1/params";
import * as _82 from "./params/v1beta1/query";
import * as _83 from "./slashing/v1beta1/genesis";
import * as _84 from "./slashing/v1beta1/query";
import * as _85 from "./slashing/v1beta1/slashing";
import * as _86 from "./slashing/v1beta1/tx";
import * as _87 from "./staking/v1beta1/authz";
import * as _88 from "./staking/v1beta1/genesis";
import * as _89 from "./staking/v1beta1/query";
import * as _90 from "./staking/v1beta1/staking";
import * as _91 from "./staking/v1beta1/tx";
import * as _92 from "./tx/signing/v1beta1/signing";
import * as _93 from "./tx/v1beta1/service";
import * as _94 from "./tx/v1beta1/tx";
import * as _95 from "./upgrade/v1beta1/query";
import * as _96 from "./upgrade/v1beta1/tx";
import * as _97 from "./upgrade/v1beta1/upgrade";
import * as _98 from "./vesting/v1beta1/tx";
import * as _99 from "./vesting/v1beta1/vesting";
import * as _148 from "./authz/v1beta1/tx.amino";
import * as _149 from "./bank/v1beta1/tx.amino";
import * as _150 from "./crisis/v1beta1/tx.amino";
import * as _151 from "./distribution/v1beta1/tx.amino";
import * as _152 from "./evidence/v1beta1/tx.amino";
import * as _153 from "./feegrant/v1beta1/tx.amino";
import * as _154 from "./gov/v1/tx.amino";
import * as _155 from "./gov/v1beta1/tx.amino";
import * as _156 from "./group/v1/tx.amino";
import * as _157 from "./nft/v1beta1/tx.amino";
import * as _158 from "./slashing/v1beta1/tx.amino";
import * as _159 from "./staking/v1beta1/tx.amino";
import * as _160 from "./upgrade/v1beta1/tx.amino";
import * as _161 from "./vesting/v1beta1/tx.amino";
import * as _162 from "./authz/v1beta1/tx.registry";
import * as _163 from "./bank/v1beta1/tx.registry";
import * as _164 from "./crisis/v1beta1/tx.registry";
import * as _165 from "./distribution/v1beta1/tx.registry";
import * as _166 from "./evidence/v1beta1/tx.registry";
import * as _167 from "./feegrant/v1beta1/tx.registry";
import * as _168 from "./gov/v1/tx.registry";
import * as _169 from "./gov/v1beta1/tx.registry";
import * as _170 from "./group/v1/tx.registry";
import * as _171 from "./nft/v1beta1/tx.registry";
import * as _172 from "./slashing/v1beta1/tx.registry";
import * as _173 from "./staking/v1beta1/tx.registry";
import * as _174 from "./upgrade/v1beta1/tx.registry";
import * as _175 from "./vesting/v1beta1/tx.registry";
import * as _176 from "./auth/v1beta1/query.lcd";
import * as _177 from "./authz/v1beta1/query.lcd";
import * as _178 from "./bank/v1beta1/query.lcd";
import * as _179 from "./distribution/v1beta1/query.lcd";
import * as _180 from "./evidence/v1beta1/query.lcd";
import * as _181 from "./feegrant/v1beta1/query.lcd";
import * as _182 from "./gov/v1/query.lcd";
import * as _183 from "./gov/v1beta1/query.lcd";
import * as _184 from "./group/v1/query.lcd";
import * as _185 from "./mint/v1beta1/query.lcd";
import * as _186 from "./nft/v1beta1/query.lcd";
import * as _187 from "./params/v1beta1/query.lcd";
import * as _188 from "./slashing/v1beta1/query.lcd";
import * as _189 from "./staking/v1beta1/query.lcd";
import * as _190 from "./upgrade/v1beta1/query.lcd";
import * as _191 from "./app/v1alpha1/query.rpc.query";
import * as _192 from "./auth/v1beta1/query.rpc.query";
import * as _193 from "./authz/v1beta1/query.rpc.query";
import * as _194 from "./bank/v1beta1/query.rpc.query";
import * as _195 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _196 from "./distribution/v1beta1/query.rpc.query";
import * as _197 from "./evidence/v1beta1/query.rpc.query";
import * as _198 from "./feegrant/v1beta1/query.rpc.query";
import * as _199 from "./gov/v1/query.rpc.query";
import * as _200 from "./gov/v1beta1/query.rpc.query";
import * as _201 from "./group/v1/query.rpc.query";
import * as _202 from "./mint/v1beta1/query.rpc.query";
import * as _203 from "./nft/v1beta1/query.rpc.query";
import * as _204 from "./params/v1beta1/query.rpc.query";
import * as _205 from "./slashing/v1beta1/query.rpc.query";
import * as _206 from "./staking/v1beta1/query.rpc.query";
import * as _207 from "./tx/v1beta1/service.rpc.svc";
import * as _208 from "./upgrade/v1beta1/query.rpc.query";
import * as _209 from "./authz/v1beta1/tx.rpc.msg";
import * as _210 from "./bank/v1beta1/tx.rpc.msg";
import * as _211 from "./crisis/v1beta1/tx.rpc.msg";
import * as _212 from "./distribution/v1beta1/tx.rpc.msg";
import * as _213 from "./evidence/v1beta1/tx.rpc.msg";
import * as _214 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _215 from "./gov/v1/tx.rpc.msg";
import * as _216 from "./gov/v1beta1/tx.rpc.msg";
import * as _217 from "./group/v1/tx.rpc.msg";
import * as _218 from "./nft/v1beta1/tx.rpc.msg";
import * as _219 from "./slashing/v1beta1/tx.rpc.msg";
import * as _220 from "./staking/v1beta1/tx.rpc.msg";
import * as _221 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _222 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._8,
      ..._9,
      ..._10,
      ..._191
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._11,
      ..._12,
      ..._13,
      ..._176,
      ..._192
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._148,
      ..._162,
      ..._177,
      ..._193,
      ..._209
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._149,
      ..._163,
      ..._178,
      ..._194,
      ..._210
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._24
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._25
      };
    }
    export namespace query {
      export const v1beta1 = { ..._26
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._27
      };
      export const v2alpha1 = { ..._28
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._29
      };
    }
    export namespace store {
      export const v1beta1 = { ..._30,
        ..._31
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._32,
        ..._195
      };
    }
    export const v1beta1 = { ..._33
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._34,
      ..._35
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._36,
      ..._37,
      ..._150,
      ..._164,
      ..._211
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._38
    };
    export namespace hd {
      export const v1 = { ..._39
      };
    }
    export namespace keyring {
      export const v1 = { ..._40
      };
    }
    export const multisig = { ..._41
    };
    export const secp256k1 = { ..._42
    };
    export const secp256r1 = { ..._43
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._151,
      ..._165,
      ..._179,
      ..._196,
      ..._212
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._152,
      ..._166,
      ..._180,
      ..._197,
      ..._213
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._153,
      ..._167,
      ..._181,
      ..._198,
      ..._214
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._56
    };
  }
  export namespace gov {
    export const v1 = { ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._154,
      ..._168,
      ..._182,
      ..._199,
      ..._215
    };
    export const v1beta1 = { ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._155,
      ..._169,
      ..._183,
      ..._200,
      ..._216
    };
  }
  export namespace group {
    export const v1 = { ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._156,
      ..._170,
      ..._184,
      ..._201,
      ..._217
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._70,
      ..._71,
      ..._72,
      ..._185,
      ..._202
    };
  }
  export namespace msg {
    export const v1 = { ..._73
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._157,
      ..._171,
      ..._186,
      ..._203,
      ..._218
    };
  }
  export namespace orm {
    export const v1 = { ..._79
    };
    export const v1alpha1 = { ..._80
    };
  }
  export namespace params {
    export const v1beta1 = { ..._81,
      ..._82,
      ..._187,
      ..._204
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._158,
      ..._172,
      ..._188,
      ..._205,
      ..._219
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._159,
      ..._173,
      ..._189,
      ..._206,
      ..._220
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._92
      };
    }
    export const v1beta1 = { ..._93,
      ..._94,
      ..._207
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._95,
      ..._96,
      ..._97,
      ..._160,
      ..._174,
      ..._190,
      ..._208,
      ..._221
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._98,
      ..._99,
      ..._161,
      ..._175,
      ..._222
    };
  }
}