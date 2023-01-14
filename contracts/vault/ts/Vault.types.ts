/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Addr = string;
export interface InstantiateMsg {
  vault_info: VaultInfo;
}
export interface VaultInfo {
  owner?: Addr | null;
  token: Addr;
  unlock_time: number;
}
export type ExecuteMsg = {
  lock: LockMsg;
} | {
  trigger_unlock: TriggerUnlockMsg;
} | {
  complete_unlock: CompleteUnlockMsg;
};
export interface LockMsg {
  addr: Addr;
  amount: number;
}
export interface TriggerUnlockMsg {
  addr: Addr;
  amount: number;
}
export interface CompleteUnlockMsg {}
export type QueryMsg = {
  vault_info: {};
} | {
  locked: {
    addr: Addr;
  };
} | {
  unlocking: {
    addr: Addr;
  };
};
export type MigrateMsg = string;
export interface LockedResponse {
  locked: number;
}
export type Timestamp = Uint64;
export type Uint64 = string;
export interface UnlockingResponse {
  unlocking: UnlockingTokens[];
}
export interface UnlockingTokens {
  amount: number;
  unlock_start: Timestamp;
}
export interface VaultInfoResponse {
  vault_info: VaultInfo;
}