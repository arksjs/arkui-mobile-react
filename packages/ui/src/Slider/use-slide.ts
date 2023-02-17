import { useRef } from 'react'
import {
  getNumber,
  rangeNumber,
  addClassName,
  getRelativeOffset,
  removeClassName
} from '../helpers'
import { useTouch } from '../hooks'
import type { SlideCommonProps } from './types'
import { getSlideClasses, getSlideStyles } from './util'

interface Coords {
  prevValue: number // 滑动之前value值
  thumb: boolean // 是否点击了滑块
  thumbW: number // 滑块宽度
  clientStartX: number // 按下初始位置
  thumbXInTrack: number // 按下滑块在滑轨内的初始位置
  trackX: number // 按下滑轨的初始位置
  trackW: number // 滑轨宽度
  moved: boolean // 是否滑动
  $target: HTMLElement // 滑动元素
}

interface UseOptions {
  getValue: ($target: HTMLElement) => number
  move: (args: {
    value: number
    progress: number
    $target: HTMLElement
  }) => void
  end: (args: {
    value: number
    isChange: boolean
    $target: HTMLElement
  }) => void
}

const thumbW = 24

export function useSlide(
  props: SlideCommonProps,
  { move, end, getValue }: UseOptions
) {
  const sliderEl = useRef<HTMLDivElement>(null)

  const coords = useRef<Coords | null>(null)
  const valueTemp = useRef(0)

  function toInteger(number: number | string) {
    return Math.round(number as number)
  }

  function getMinMax() {
    let min = toInteger(getNumber(props.min, 0))
    let max = toInteger(getNumber(props.max, 100))

    if (min > max) {
      // 兼容min max搞反的问题
      max = [min, (min = max)][0]
    }

    return [min, max]
  }

  function value2Progress(val: number) {
    const [min, max] = getMinMax()

    return (val - min) / (max - min)
  }

  function rangeValue(val: number) {
    const [min, max] = getMinMax()

    return rangeNumber(val, min, max)
  }

  function updateByX(x: number, { trackW, prevValue, $target }: Coords) {
    x = rangeNumber(x, 0, trackW)

    const [min, max] = getMinMax()
    const step = toInteger(getNumber(props.step, 1))

    let newVal = toInteger(((max - min) * x) / trackW + min)
    newVal = toInteger((newVal - prevValue) / step) * step + prevValue
    newVal = rangeNumber(newVal, min, max)

    valueTemp.current = newVal

    move({
      value: newVal,
      progress: value2Progress(newVal),
      $target
    })
  }

  useTouch({
    el: sliderEl,
    onTouchStart(e) {
      if (props.disabled) {
        // 禁用
        return
      }

      const { clientX } = e.touchObject

      const $target = e.target as HTMLElement
      const trackRects = (sliderEl.current as HTMLElement).getClientRects()[0]
      const thumb = !!$target.dataset.thumb

      coords.current = {
        prevValue: getValue($target),
        thumb,
        thumbW,
        clientStartX: clientX,
        thumbXInTrack: getRelativeOffset($target, sliderEl.current || undefined)
          .offsetLeft,
        trackX: trackRects.left,
        trackW: trackRects.width - thumbW,
        moved: false,
        $target
      }

      if (thumb) {
        addClassName($target, 'active')
      }

      valueTemp.current = coords.current.prevValue

      e.preventDefault()
    },

    onTouchMove(e) {
      if (!coords.current) {
        return
      }

      coords.current.moved = true

      if (!coords.current.thumb) {
        return
      }

      const { clientX } = e.touchObject
      const { clientStartX, thumbXInTrack } = coords.current

      updateByX(thumbXInTrack + clientX - clientStartX, coords.current)

      e.stopPropagation()
    },

    onTouchEnd(e) {
      if (coords.current) {
        const _coords = coords.current

        if (!_coords.thumb && !_coords.moved) {
          updateByX(
            _coords.clientStartX - _coords.trackX - _coords.thumbW / 2,
            _coords
          )
        }

        if (_coords.thumb) {
          removeClassName(_coords.$target, 'active')
        }

        end({
          value: valueTemp.current,
          isChange: _coords.prevValue !== valueTemp.current,
          $target: _coords.$target
        })

        coords.current = null
        e.stopPropagation()
      }
    }
  })

  const slideClasses = getSlideClasses(props.disabled)
  const slideStyles = getSlideStyles(props.color)

  return {
    sliderEl,
    toInteger,
    rangeValue,
    value2Progress,
    getMinMax,
    slideClasses,
    slideStyles
  }
}
