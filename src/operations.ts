export type OperationImpl = (state: number[], ...args: number[]) => number[]

export const POSSIBLE_CPU_OPERATIONS: { [opName: string]: OperationImpl } = {
  LOAD: load,
  SWAP: swap,
  XOR: xor,
  INC: inc
}

export function load(state: number[], value: number): number[] {
  state[0] = value
  return state
}

export function swap(state: number[], mem1: number, mem2: number): number[] {
  ;[state[mem1], state[mem2]] = [state[mem2], state[mem1]]
  return state
}

export function xor(state: number[], mem1: number, mem2: number): number[] {
  state[mem1] = state[mem1] ^ state[mem2]
  return state
}

export function inc(state: number[], mem: number): number[] {
  state[mem] += 1
  return state
}
