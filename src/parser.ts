import { Instruction } from './cpu'
import { POSSIBLE_CPU_OPERATIONS } from './operations'

export function parse(assembly: string): Instruction[] {
  const lines = assembly.split('\n')
  const program: Instruction[] = []
  for (let line of lines) {
    const match = line.match(/(\w+)\s+([-\d]+)(?:,\s*([-\d]+)(?:,\s*([-\d]+))?)?/)
    if (match) {
      const opCode = match[1]

      // compile time OP_CODE validation
      if (!POSSIBLE_CPU_OPERATIONS[opCode]) {
        throw new TypeError(`[PARSER] Invalid opCode: ${opCode}`)
      }

      const args = match
        .slice(2)
        .map(Number)
        .filter((n) => !isNaN(n))

      if (args.length === 0) {
        throw new TypeError(`[PARSER] No args for opCode: ${opCode}`)
      }

      program.push({ opCode: opCode, args: args })
    } else {
      throw new TypeError(`[PARSER] Invalid code at: ${line}`)
    }
  }
  return program
}

export function output(program: Instruction[]): string {
  if (program.length === 0) return '\n'
  let assembly = ''
  for (let { opCode: opCode, args: args } of program) {
    assembly += `${opCode.toString()} ${args.join(', ')}\n`
  }
  return assembly
}
