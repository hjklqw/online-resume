import { AtomEffect } from 'recoil'

interface Config<T> {
  storageKey: string
  valueToString: (value: T) => string
  stringToValue: (str: string | null) => T
}

export function persistEffect<T>(config: Config<T>) {
  const effect: AtomEffect<T> = ({ onSet, setSelf }) => {
    if (typeof window === 'undefined') return
    setSelf(retrieveFromLocalStorage())
    onSet(async (newValue, _, isReset) => updateLocalStorage(newValue, isReset))
  }

  function retrieveFromLocalStorage() {
    const valueStr = localStorage.getItem(config.storageKey)
    return config.stringToValue(valueStr)
  }

  function updateLocalStorage(value: T, isReset: boolean) {
    if (isReset) {
      localStorage.removeItem(config.storageKey)
    } else {
      localStorage.setItem(config.storageKey, config.valueToString(value))
    }
  }

  return effect
}
