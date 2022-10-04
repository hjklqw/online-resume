import { useEffect, useState } from 'react'
import { RecoilState, SetterOrUpdater, useRecoilState } from 'recoil'

/**
 * Ignore the recoil state until the component is mounted.
 * Useful for preventing hydration errors on atoms that are persisted.
 */
export function useMountedRecoilState<T>(
  atom: RecoilState<T>
): [T | undefined, SetterOrUpdater<T>] {
  const [state, setState] = useRecoilState(atom)
  const [isMounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return [isMounted ? state : undefined, setState]
}
