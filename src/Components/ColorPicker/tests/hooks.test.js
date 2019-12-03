import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import useColorControl from '../useColorControl'

test('should change toggle param', () => {
  const { result } = renderHook(() => useColorControl('#ff0000'))
  act(() => {
    result.current.changeToggle('toggle')
  })
  expect(result.current.toggleName).toBe('toggle')
})

test('should change ranges ', () => {
  const { result } = renderHook(() => useColorControl('#ff0000'))
  const event = { target: { id: 'r', value: 233  } }
  act(() => {
    result.current.onRangeChange(event)
  })
  expect(result.current.ranges.r).toBe(233)
})

test('should change color preview ',  () => {
  const { result } = renderHook(() => useColorControl('#ff0000'))
  act(() => {
    result.current.changeColorPreview('changed')
  })
  expect(result.current.colorPreview).toBe('changed')
})
