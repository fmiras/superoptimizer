import { expect, test } from 'bun:test'
import { CPU } from '../src/cpu'

test('cpu(program) execute valid program', () => {
  const program = [
    { opCode: 'LOAD', args: [3] },
    { opCode: 'SWAP', args: [0, 2] },
    { opCode: 'LOAD', args: [2] },
    { opCode: 'SWAP', args: [0, 4] },
    { opCode: 'INC', args: [4] },
    { opCode: 'XOR', args: [2, 4] }
  ]
  const cpu = new CPU(6)
  const state = cpu.execute(program)
  expect(state).toEqual([0, 0, 0, 0, 3, 0])
})

test('cpu(program) throws type error on invalid op', () => {
  const program = [
    { opCode: 'LOADD', args: [3] },
    { opCode: 'SWAP', args: [0, 2] }
  ]

  const cpu = new CPU(6)
  expect(() => cpu.execute(program)).toThrow('[CPU] Invalid opCode: LOADD')
})
