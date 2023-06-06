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
    // iterating over all mixtures of operations
    for (const operationCombination of product(operations, instructionsLength)) {
      const possibleInstructions: Instruction[] = []
      // iterating over all possible arguments for each operation
      for (const operation of operationCombination) {
        switch (operation) {
          case 'LOAD':
            for (let value = 0; value < maxValue; value++) {
              possibleInstructions.push({ opCode: operation, args: [value] })
            }
            break
          case 'SWAP':
          case 'XOR':
            for (let cell = 0; cell < maxMemoryCells; cell++) {
              for (let cell2 = 0; cell2 < maxMemoryCells; cell2++) {
                possibleInstructions.push({ opCode: operation, args: [cell, cell2] })
              }
            }
            break
          case 'INC':
            for (let cell = 0; cell < maxMemoryCells; cell++) {
              possibleInstructions.push({ opCode: operation, args: [cell] })
            }
            break
        }
      }

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
