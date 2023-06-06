import { Instruction, POSSIBLE_OPS } from '../cpu/cpu'

export function parse(assembly: string): Instruction[] {
  const lines = assembly.split('\n')
  const program: Instruction[] = []
  for (let line of lines) {
    const match = line.match(/(\w+)\s+([-\d]+)(?:,\s*([-\d]+)(?:,\s*([-\d]+))?)?/)
    if (match) {
      const opCode = match[1]

      if (!POSSIBLE_OPS.has(opCode)) {
        throw new TypeError(`Invalid opCode: ${opCode}`)
      }

      const args = match
        .slice(2)
        .map(Number)
        .filter((n) => !isNaN(n))

      if (args.length === 0) {
        throw new TypeError(`No args for opCode: ${opCode}`)
      }

      program.push({ opCode: opCode as keyof typeof POSSIBLE_OPS, args })
    } else {
      throw new TypeError(`Invalid code at: ${line}`)
    }
  }
  return program
}

export function output(program: Instruction[]): string {
  if (program.length === 0) return '\n'
  let assembly = ''
  for (let { opCode, args } of program) {
    assembly += `${opCode.toString()} ${args.join(', ')}\n`
  }
  return assembly
}
