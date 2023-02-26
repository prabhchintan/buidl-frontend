// Generated by @wagmi/cli@0.1.10 on 2/25/2023 at 9:54:43 AM
import {
  UseContractConfig,
  UseContractEventConfig,
  UseContractReadConfig,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useContract,
  useContractEvent,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import {
  PrepareWriteContractResult,
  ReadContractResult,
  WriteContractMode,
} from 'wagmi/actions';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContract}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20(config: Omit<UseContractConfig, 'abi'> = {} as any) {
  return useContract({ abi: erc20ABI, ...config });
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any
) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TSelectData = ReadContractResult<typeof erc20ABI, 'allowance'>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, 'allowance', TSelectData>,
    'abi' | 'functionName'
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, 'allowance', TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TSelectData = ReadContractResult<typeof erc20ABI, 'balanceOf'>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, 'balanceOf', TSelectData>,
    'abi' | 'functionName'
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, 'balanceOf', TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TSelectData = ReadContractResult<typeof erc20ABI, 'decimals'>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, 'decimals', TSelectData>,
    'abi' | 'functionName'
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, 'decimals', TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TSelectData = ReadContractResult<typeof erc20ABI, 'name'>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, 'name', TSelectData>,
    'abi' | 'functionName'
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, 'name', TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TSelectData = ReadContractResult<typeof erc20ABI, 'symbol'>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, 'symbol', TSelectData>,
    'abi' | 'functionName'
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, 'symbol', TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TSelectData = ReadContractResult<typeof erc20ABI, 'totalSupply'>
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, 'totalSupply', TSelectData>,
    'abi' | 'functionName'
  > = {} as any
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, 'totalSupply', TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<
  TMode extends WriteContractMode,
  TFunctionName extends string
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof erc20ABI, string>['abi'],
        TFunctionName
      >
    : UseContractWriteConfig<TMode, typeof erc20ABI, TFunctionName> & {
        abi?: never;
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc20ABI, TFunctionName>({
    abi: erc20ABI,
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof erc20ABI, 'approve'>['abi'],
        'approve'
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<TMode, typeof erc20ABI, 'approve'> & {
        abi?: never;
        functionName?: 'approve';
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc20ABI, 'approve'>({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useErc20DecreaseAllowance<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof erc20ABI, 'decreaseAllowance'>['abi'],
        'decreaseAllowance'
      > & {
        functionName?: 'decreaseAllowance';
      }
    : UseContractWriteConfig<TMode, typeof erc20ABI, 'decreaseAllowance'> & {
        abi?: never;
        functionName?: 'decreaseAllowance';
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc20ABI, 'decreaseAllowance'>({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useErc20IncreaseAllowance<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof erc20ABI, 'increaseAllowance'>['abi'],
        'increaseAllowance'
      > & {
        functionName?: 'increaseAllowance';
      }
    : UseContractWriteConfig<TMode, typeof erc20ABI, 'increaseAllowance'> & {
        abi?: never;
        functionName?: 'increaseAllowance';
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc20ABI, 'increaseAllowance'>({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"mint"`.
 */
export function useErc20Mint<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof erc20ABI, 'mint'>['abi'],
        'mint'
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<TMode, typeof erc20ABI, 'mint'> & {
        abi?: never;
        functionName?: 'mint';
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc20ABI, 'mint'>({
    abi: erc20ABI,
    functionName: 'mint',
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof erc20ABI, 'transfer'>['abi'],
        'transfer'
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<TMode, typeof erc20ABI, 'transfer'> & {
        abi?: never;
        functionName?: 'transfer';
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc20ABI, 'transfer'>({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof erc20ABI, 'transferFrom'>['abi'],
        'transferFrom'
      > & {
        functionName?: 'transferFrom';
      }
    : UseContractWriteConfig<TMode, typeof erc20ABI, 'transferFrom'> & {
        abi?: never;
        functionName?: 'transferFrom';
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc20ABI, 'transferFrom'>({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>,
    'abi'
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareErc20DecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareErc20IncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareErc20Mint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'mint'>,
    'abi' | 'functionName'
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'mint'>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, TEventName>,
    'abi'
  > = {} as any
) {
  return useContractEvent({
    abi: erc20ABI,
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Approval'>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Transfer'>);
}
