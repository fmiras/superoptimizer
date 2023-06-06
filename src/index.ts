import { CPU } from './cpu'
import { output, parse } from './parser'
import { superoptimize } from './superoptimizer'

const assembly = `LOAD 3
SWAP 0, 1
LOAD 3
SWAP 0, 2
LOAD 3
SWAP 0, 3
LOAD 3`

console.log('🤖 Assembly program:')
console.log(assembly)

const maxMemoryCells = 4

const program = parse(assembly)
const cpu = new CPU(maxMemoryCells)
const targetState = cpu.execute(program)

console.log('🎯 Target state:', targetState)

// measure execution duration
const start = Date.now()
const superoptimizedProgram = superoptimize({
  maxInstructionsLength: 4,
  maxMemoryCells,
  maxValue: 5,
  targetState
})
const end = Date.now()
console.log(`⏱️ Execution duration: ${end - start}ms`)

if (superoptimizedProgram) {
  console.log('🤖 Superoptimized program:')
  console.log(output(superoptimizedProgram))
  process.exit(0)
}

console.log('🤖 No superoptimized program found')
