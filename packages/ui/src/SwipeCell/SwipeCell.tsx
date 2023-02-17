import { useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import type { ButtonOption, SwipeCellEmits, SwipeCellProps } from './types'
import { getButtons, getInnerStyles } from './util'
import {
  cloneData,
  getSameValueArray,
  rangeNumber,
  getStretchOffset,
  type FC
} from '../helpers'
import { useTouch, useDocumentBlur, useStop } from '../hooks'
import SwipeCellButton from './SwipeCellButton'

interface SwipeCellCoords {
  startX: number
  buttonsW: number
  isShow: boolean
  isSwipe: boolean
}

const TaSwipeCell: FC<SwipeCellProps & SwipeCellEmits> = props => {
  const classes = classNames(
    'ta-swipe-cell',
    'ta-horizontal-hairline',
    props.className
  )

  const root = useRef<HTMLDivElement>(null)
  const buttonsEl = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buttonTranslateXs, setButtonTranslateXs] = useState<number[]>([])
  const coords = useRef<SwipeCellCoords | null>(null)
  const isShow = useRef(false)

  function show(x: number) {
    setTranslateX(x)
    setDuration(0.6)

    setButtonTranslateXs(xs => getSameValueArray(0, xs.length))

    isShow.current = true
  }

  function hide(focus: boolean, source: string) {
    // TODO: 有个bug，有两套事件冒泡，没法阻止
    // console.log(source)
    if (!isShow.current && !focus) {
      return
    }

    isShow.current = false

    setTranslateX(0)
    setDuration(0.6)

    setButtonTranslateXs(xs => getSameValueArray(0, xs.length))
  }

  function onButtonClick(item: Required<ButtonOption>, index: number) {
    props.onButtonClick &&
      props.onButtonClick({
        item: cloneData(item),
        index
      })

    hide(false, 'buttonClick')
  }

  useTouch({
    el: root,
    onTouchStart(e) {
      if (props.buttons.length === 0) {
        return
      }

      coords.current = {
        startX: e.touchObject.clientX,
        buttonsW: (buttonsEl.current as HTMLElement).clientWidth,
        isShow: translateX > 0,
        isSwipe: false
      }

      if (coords.current.isShow) {
        // 针对已经展开的情况
        e.stopPropagation()
      }
    },
    onTouchMove(e) {
      if (!coords.current) {
        return
      }

      const { startX, buttonsW, isSwipe, isShow } = coords.current

      let x = startX - e.touchObject.clientX

      if (!isShow && !isSwipe && x < 0) {
        coords.current = null
        return
      }
      coords.current.isSwipe = true

      if (isShow) {
        x += buttonsW
      }

      const max = rangeNumber(x, 0, buttonsW)

      const $children = (buttonsEl.current as HTMLElement).children

      const _xs: number[] = []

      for (let i = 0, len = $children.length; i < len; i++) {
        _xs.push(
          (($children[i] as HTMLElement).offsetLeft * (buttonsW - max)) /
            buttonsW
        )
      }

      setButtonTranslateXs(_xs)
      setTranslateX(max + (x > buttonsW ? getStretchOffset(x - buttonsW) : 0))
      setDuration(0)

      e.stopPropagation()
    },
    onTouchEnd(e) {
      if (coords.current) {
        const { isSwipe, buttonsW } = coords.current

        if (isSwipe && translateX > buttonsW / 2) {
          // 展示
          show(buttonsW)
        } else {
          // 画出来不够，要强制收回去
          hide(true, 'touch')
        }

        coords.current = null
        e.stopPropagation()
      } else {
      }
    }
  })

  useDocumentBlur(() => hide(false, 'blur'))

  const renderButtons = useMemo(() => {
    return getButtons(props.buttons).map((item, index) => (
      <SwipeCellButton
        item={item}
        index={index}
        buttonTranslateXs={buttonTranslateXs}
        duration={duration}
        onButtonClick={onButtonClick}
        key={item.text}
      />
    ))
  }, [buttonTranslateXs, duration, props.onButtonClick])

  return (
    <div className={classes} ref={root}>
      <div
        className="ta-swipe-cell_inner"
        style={getInnerStyles({ duration, translateX })}
      >
        {props.children}
        <div className="ta-swipe-cell_buttons" ref={buttonsEl}>
          {renderButtons}
        </div>
      </div>
    </div>
  )
}

export default TaSwipeCell
