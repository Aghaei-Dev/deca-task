'use client'
import { useState, useCallback } from 'react'

export function useToggle(initialState = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialState)

  const toggle = useCallback(() => setValue((prev) => !prev), [])

  return [value, toggle]
}
