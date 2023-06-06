export const POSSIBLE_OPS = new Set(['LOAD', 'SWAP', 'XOR', 'INC'])

export type OperationImpl = (state: number[], ...args: number[]) => number[]

export type Instruction = {
  opCode: keyof typeof POSSIBLE_OPS
  args: number[]
}

export class CPU {
  max_memory_cells: number
  state: number[]
  possible_operations: { [opName: string]: OperationImpl }

  constructor(max_memory_cells: number) {
    this.max_memory_cells = max_memory_cells
    this.state = new Array(max_memory_cells).fill(0)
    this.possible_operations = {
      LOAD: this.load,
      SWAP: this.swap,
      XOR: this.xor,
      INC: this.inc
    }
  }

  execute(program: Instruction[]): number[] {
    let state = this.state.slice()
    for (let { opCode, args } of program) {
      state = this.possible_operations[opCode.toString()](state, ...args)
    }
    return state
  }

  load(state: number[], val: number): number[] {
    state[0] = val
    return state
  }

  swap(state: number[], mem1: number, mem2: number): number[] {
    ;[state[mem1], state[mem2]] = [state[mem2], state[mem1]]
    return state
  }

  xor(state: number[], mem1: number, mem2: number): number[] {
    state[mem1] = state[mem1] ^ state[mem2]
    return state
  }

  inc(state: number[], mem: number): number[] {
    state[mem] += 1
    return state
  }
}
