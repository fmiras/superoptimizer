import { expect, test } from 'bun:test'
import { product, zip } from '../src/arrays'

test('product([1, 2], 2)', () => {
  expect(product([1, 2], 2)).toEqual([
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2]
  ])
})

test(`product(['LOAD', 'SWAP', 'XOR', 'INC'], 2`, () => {
  expect(product(['LOAD', 'SWAP', 'XOR', 'INC'], 2)).toEqual([
    ['LOAD', 'LOAD'],
    ['LOAD', 'SWAP'],
    ['LOAD', 'XOR'],
    ['LOAD', 'INC'],
    ['SWAP', 'LOAD'],
    ['SWAP', 'SWAP'],
    ['SWAP', 'XOR'],
    ['SWAP', 'INC'],
    ['XOR', 'LOAD'],
    ['XOR', 'SWAP'],
    ['XOR', 'XOR'],
    ['XOR', 'INC'],
    ['INC', 'LOAD'],
    ['INC', 'SWAP'],
    ['INC', 'XOR'],
    ['INC', 'INC']
  ])
})

test(`product(['LOAD', 'SWAP', 'INC'], 3`, () => {
  expect(product(['LOAD', 'SWAP', 'INC'], 3)).toEqual([
    ['LOAD', 'LOAD', 'LOAD'],
    ['LOAD', 'LOAD', 'SWAP'],
    ['LOAD', 'LOAD', 'INC'],
    ['LOAD', 'SWAP', 'LOAD'],
    ['LOAD', 'SWAP', 'SWAP'],
    ['LOAD', 'SWAP', 'INC'],
    ['LOAD', 'INC', 'LOAD'],
    ['LOAD', 'INC', 'SWAP'],
    ['LOAD', 'INC', 'INC'],
    ['SWAP', 'LOAD', 'LOAD'],
    ['SWAP', 'LOAD', 'SWAP'],
    ['SWAP', 'LOAD', 'INC'],
    ['SWAP', 'SWAP', 'LOAD'],
    ['SWAP', 'SWAP', 'SWAP'],
    ['SWAP', 'SWAP', 'INC'],
    ['SWAP', 'INC', 'LOAD'],
    ['SWAP', 'INC', 'SWAP'],
    ['SWAP', 'INC', 'INC'],
    ['INC', 'LOAD', 'LOAD'],
    ['INC', 'LOAD', 'SWAP'],
    ['INC', 'LOAD', 'INC'],
    ['INC', 'SWAP', 'LOAD'],
    ['INC', 'SWAP', 'SWAP'],
    ['INC', 'SWAP', 'INC'],
    ['INC', 'INC', 'LOAD'],
    ['INC', 'INC', 'SWAP'],
    ['INC', 'INC', 'INC']
  ])
})

test(`zip(['LOAD', 'SWAP', 'XOR', 'INC'], [[0], [1, 2], [3, 4], [5]])`, () => {
  expect(zip(['LOAD', 'SWAP', 'XOR', 'INC'], [[0], [1, 2], [3, 4], [5]])).toEqual([
    ['LOAD', [0]],
    ['SWAP', [1, 2]],
    ['XOR', [3, 4]],
    ['INC', [5]]
  ])
})
