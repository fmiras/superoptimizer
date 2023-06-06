import { expect, test } from 'bun:test'
import { output, parse } from '../src/parser'

test('parse(program) valid program', () => {
  const program = `LOAD 0
SWAP 1, 2
XOR 3, 4
INC 5`
  const expected = [
    { opCode: 'LOAD', args: [0] },
    { opCode: 'SWAP', args: [1, 2] },
    { opCode: 'XOR', args: [3, 4] },
    { opCode: 'INC', args: [5] }
  ]
  expect(parse(program)).toEqual(expected)
})

test('parse(program) invalid program', () => {
  const program = `LOAD 0
SWAP 1, 2
XOR 3, 4
INVALID 1
INC 5`
  expect(() => parse(program)).toThrow('[PARSER] Invalid opCode: INVALID')
})

test('parse(program) invalid line', () => {
  const program = `INC`
  expect(() => parse(program)).toThrow('[PARSER] Invalid code at: INC')
})

test('output(program) valid program', () => {
  const program = [
    { opCode: 'LOAD', args: [0] },
    { opCode: 'SWAP', args: [1, 2] },
    { opCode: 'XOR', args: [3, 4] },
    { opCode: 'INC', args: [5] }
  ]

  const expected = `LOAD 0
SWAP 1, 2
XOR 3, 4
INC 5
`
  expect(output(program)).toEqual(expected)
})
