import { POSSIBLE_CPU_OPERATIONS } from './operations'

export type Instruction = {
  opCode: string
  args: number[]
}

export class CPU {
  state: number[]

  constructor(maxMemoryCells: number) {
    this.state = new Array(maxMemoryCells).fill(0)
  }

  reset() {
    this.state = this.state.map(() => 0)
  }

  execute(program: Instruction[]): number[] {
    let state = this.state.slice()
    for (let { opCode: operationCode, args } of program) {
      if (!POSSIBLE_CPU_OPERATIONS[operationCode]) {
        throw new TypeError(`[CPU] Invalid opCode: ${operationCode}`)
      }

      state = POSSIBLE_CPU_OPERATIONS[operationCode.toString()](state, ...args)
    }
    return state
  }
}
