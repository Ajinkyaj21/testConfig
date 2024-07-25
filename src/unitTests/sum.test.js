import { expect, test } from 'vitest'
import { sum } from '../utils'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
test('adds floating numbers', () => {
    expect(sum(1.5, 2.5)).toBe(4)
  })
test('test empty numbers', () => {
    expect(sum('', '')).toBe(0)
  })