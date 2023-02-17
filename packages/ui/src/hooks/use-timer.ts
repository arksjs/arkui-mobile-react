import { useEffect } from 'react'
import { addTimer, type Noop } from '../helpers'

export const useTimer = (callback: Noop, interval = 1000) => {
  let removeTimer: Noop

  useEffect(() => {
    removeTimer = addTimer(callback, interval)

    return () => removeTimer && removeTimer()
  }, [interval])
}
