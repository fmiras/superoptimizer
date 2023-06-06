import { expect, test } from 'bun:test'
import { inc, load, swap, xor } from '../src/operations'

test('load(state, value) loads value into state', () => {
  const state = [0, 0, 0, 0, 0]
  const expected = [1, 0, 0, 0, 0]
  expect(load(state, 1)).toEqual(expected)
})

test('swap(state, mem1, mem2) swaps values in state', () => {
  const state = [0, 1, 0, 0, 0]
  const expected = [0, 0, 1, 0, 0]
  expect(swap(state, 1, 2)).toEqual(expected)
})

test('xor(state, mem1, mem2) xor values in state', () => {
  const state = [0, 1, 0, 1, 0]
  const expected = [0, 0, 0, 1, 0]
  expect(xor(state, 1, 3)).toEqual(expected)
})

test('inc(state, mem) increments value in state', () => {
  const state = [0, 0, 0, 0, 0]
  const expected = [0, 0, 0, 0, 1]
  expect(inc(state, 4)).toEqual(expected)
})
