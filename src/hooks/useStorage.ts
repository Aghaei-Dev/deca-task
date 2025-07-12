'use client'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type StorageType = 'localStorage' | 'sessionStorage'

export const useStorage = <T>(
  type: StorageType,
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue =
        type === 'localStorage' ? localStorage.getItem(key) : sessionStorage.getItem(key)

      return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue
    } catch (error) {
      return defaultValue
    }
  })

  useEffect(() => {
    const storage = type === 'localStorage' ? localStorage : sessionStorage
    try {
      storage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Storage setItem error:', error)
    }
  }, [value, key, type])

  return [value, setValue]
}
