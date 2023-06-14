import { CPU, Instruction } from './cpu'
import { product } from './arrays'
import { POSSIBLE_CPU_OPERATIONS } from './operations'

export interface SuperOptimizationOptions {
  maxInstructionsLength: number
  maxMemoryCells: number
  maxValue: number
  targetState: number[]
}

// function that generates all possible combinations of instructions
export function generateAndSearchPrograms(
  maxInstructionsLength: number,
  maxMemoryCells: number,
  maxValue: number,
  tester: (program: Instruction[]) => boolean
): Instruction[] | null {
  let count = 0

  // iterating over all possible program sizes
  for (
    let instructionsLength = 0;
    instructionsLength <= maxInstructionsLength;
    instructionsLength++
  ) {
    const operations = Object.keys(POSSIBLE_CPU_OPERATIONS)

    const possibleInstructions: Instruction[] = operations
      .map((operation) => {
        switch (operation) {
          case 'LOAD':
            return [...Array(maxValue).keys()].map((value) => ({
              opCode: operation,
              args: [value]
            }))
          case 'SWAP':
          case 'XOR':
            return product([...Array(maxMemoryCells).keys()], 2).map((cells) => ({
              opCode: operation,
              args: [cells[0], cells[1]]
            }))
          case 'INC':
            return [...Array(maxMemoryCells).keys()].map((cell) => ({
              opCode: operation,
              args: [cell]
            }))
          default:
            throw new TypeError(`[SUPEROPTIMIZER] Unknown operation: ${operation}`)
        }
      })
      .flat()

    // iterating over all possible instruction combinations
    for (const instructionCombination of product(possibleInstructions, instructionsLength)) {
      if (tester(instructionCombination)) {
        return instructionCombination
      }
      count++

      if (count % 100000 === 0) {
        console.log(`[SUPEROPTIMIZER] Programs generated: ${count}`)
      }
    }
  }

  return null
}

export function superoptimize({
  maxInstructionsLength,
  maxMemoryCells,
  maxValue,
  targetState
}: SuperOptimizationOptions): Instruction[] | null {
  const cpu = new CPU(maxMemoryCells)

  const tester = (program: Instruction[]) => {
    const state = cpu.execute(program)
    const result = targetState.every((value, index) => value === state[index])
    cpu.reset()
    return result
  }

  const program = generateAndSearchPrograms(maxInstructionsLength, maxMemoryCells, maxValue, tester)
  return program
}
