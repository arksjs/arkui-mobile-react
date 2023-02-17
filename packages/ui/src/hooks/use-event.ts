import { useRef, useEffect, type MutableRefObject } from 'react'
import {
  addEvent,
  touchEvent,
  addLongPressEvent,
  type LongPressEventCallback,
  type Noop
} from '../helpers'

type ElRef = MutableRefObject<HTMLElement | null | undefined>

function useFn(elRef: ElRef, fn: (el: HTMLElement) => Noop) {
  const stopHandle = useRef<Noop | null>(null)

  function on() {
    if (elRef.current) {
      stopHandle.current = fn(elRef.current)
    }
  }

  function off() {
    if (stopHandle.current) {
      stopHandle.current()
      stopHandle.current = null
    }
  }

  function elChange() {
    off()
    on()
  }

  useEffect(() => {
    on()

    return off
  }, [])

  return { off, elChange }
}

/**
 * 事件
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useEvent(
  elRef: ElRef,
  event = touchEvent.touchstart,
  callback: EventListener
) {
  const callbackRef = useRef<EventListener | null>(null)
  callbackRef.current = callback

  const onEvent: EventListener = e => {
    callbackRef.current && callbackRef.current(e)
  }

  return useFn(elRef, el => addEvent(event, onEvent, el))
}

/**
 * 阻止冒泡
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useStop(
  elRef: ElRef,
  event = touchEvent.touchstart,
  callback?: EventListener
) {
  const onStop: EventListener = e => {
    callback && callback(e)
    e.stopPropagation()
  }

  return useEvent(elRef, event, onStop)
}

/**
 * 单机、长按
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useLongPress(elRef: ElRef, callback: LongPressEventCallback) {
  const callbackRef = useRef<LongPressEventCallback | null>(null)
  callbackRef.current = callback

  const onEvent: LongPressEventCallback = e => {
    callbackRef.current && callbackRef.current(e)
  }

  return useFn(elRef, el => addLongPressEvent(el, onEvent))
}

/**
 * 双击
 * @param elRef html element ref
 * @returns 取消函数
 */
export function useDbclick(
  elRef: ElRef,
  callback: ($el: HTMLElement, event: 'click' | 'dbclick') => void
) {
  const dbClickTag = useRef<string | null>(null)
  const dbClickTimer = useRef<number>()

  function onClick(e: Event) {
    const $el = e.currentTarget as HTMLElement

    if (!dbClickTag.current) {
      dbClickTag.current = e.type
      dbClickTimer.current = window.setTimeout(() => {
        dbClickTag.current = null
        callback($el, 'click')
      }, 300)
    } else if (dbClickTag.current === e.type) {
      clearTimeout(dbClickTimer.current)
      dbClickTag.current = null
      callback($el, 'dbclick')
    }
  }

  return useFn(elRef, el => {
    const off = addEvent(touchEvent.touchstart, onClick, el)

    return () => {
      clearTimeout(dbClickTimer.current)
      off()
    }
  })
}

export function useBlur(elRef: ElRef, callback: Noop) {
  const { off } = useEvent(elRef, touchEvent.touchend, callback)

  return { off }
}

export function useStopBlur(elRef: ElRef) {
  const { off } = useEvent(elRef, touchEvent.touchend, e => {
    e.stopPropagation()
  })

  return { off }
}

export function useDocumentBlur(callback: Noop) {
  const elRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    elRef.current = document.documentElement
  }, [])

  return useBlur(elRef, callback)
}
