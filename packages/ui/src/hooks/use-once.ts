import { useEffect, useRef } from 'react'
import type { Noop } from '../helpers'

export function useOnce(interval = 0) {
  const handle = useRef<number | null>(null)

  function cancel() {
    if (handle.current != null) {
      interval > 0
        ? clearTimeout(handle.current)
        : cancelAnimationFrame(handle.current)
      handle.current = null
    }
  }

  function call(fn: Noop, forceInterval?: number) {
    cancel()

    if (interval > 0) {
      handle.current = window.setTimeout(() => {
        handle.current = null

        fn()
      }, forceInterval ?? interval)
    } else {
      handle.current = requestAnimationFrame(() => {
        handle.current = null

        fn()
      })
    }
  }

  useEffect(() => cancel, [])

  return call
}
