import { useEffect, useRef } from 'react'
import { onBeforeUnmount } from 'vue'
import type { Noop } from '../helpers'

export function useOnce(interval = 0) {
  const handle = useRef<number>()

  function cancel() {
    if (handle.current != null) {
      interval > 0
        ? clearTimeout(handle.current)
        : cancelAnimationFrame(handle.current)
      handle.current = undefined
    }
  }

  function call(fn: Noop) {
    cancel()

    if (interval > 0) {
      handle.current = window.setTimeout(() => {
        handle.current = undefined

        fn()
      }, 50)
    } else {
      handle.current = requestAnimationFrame(() => {
        handle.current = undefined

        fn()
      })
    }
  }

  useEffect(() => cancel, [])

  return call
}
