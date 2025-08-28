import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  // Mock implementation for Claude.ai artifacts
  const [storedValue, setStoredValue] = useState(() => {
    try {
      return initialValue
    } catch (_error) {  
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      // In real app: localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (_error) {  
      console.log(_error)
    }
  }

  return [storedValue, setValue]
}