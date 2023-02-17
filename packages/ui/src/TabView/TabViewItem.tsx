import { useRef } from 'react'
import classNames from 'classnames'
import type { FC } from '../helpers'
import { useTouch } from '../hooks'
import type { TabViewItemProps } from './types'

interface TabViewItemCoords {
  vertical: boolean
  startX: number
  startY: number
  timeStamp: number
  position: number
  stop: boolean
}

const TaTabViewItem: FC<TabViewItemProps & { vertical?: boolean }> = ({
  vertical = false,
  ...props
}) => {
  const classes = classNames(
    'ta-swiper-item',
    'ta-tab-view-item',
    props.className
  )
  const root = useRef<HTMLDivElement>(null)
  const coords = useRef<TabViewItemCoords | null>(null)

  useTouch({
    el: root,
    onTouchStart(e) {
      const {
        scrollHeight,
        scrollTop,
        clientHeight,
        scrollLeft,
        scrollWidth,
        clientWidth
      } = e.currentTarget as HTMLElement

      const touch = e.touchObject

      if (
        (vertical &&
          (scrollHeight === scrollTop + clientHeight || scrollTop === 0)) ||
        (!vertical &&
          (scrollWidth === scrollLeft + clientWidth || scrollLeft === 0))
      ) {
        if (scrollHeight !== clientHeight || scrollWidth !== clientWidth) {
          coords.current = {
            vertical,
            position:
              (vertical && scrollTop === 0) || (!vertical && scrollLeft === 0)
                ? 1
                : 2,
            startX: touch.pageX,
            startY: touch.pageY,
            timeStamp: e.timeStamp,
            stop: false
          }
        }
      } else {
        // 滚动到中间，直接拒绝掉
        coords.current = {
          vertical,
          position: 1,
          startX: 0,
          startY: 0,
          timeStamp: e.timeStamp,
          stop: true
        }
        // e.stopPropagation()
      }
    },
    onTouchMove(e) {
      if (!coords.current) {
        return
      }

      if (coords.current.stop) {
        e.stopPropagation()
        return
      }

      const { pageX, pageY } = e.touchObject

      const offset = coords.current.vertical
        ? coords.current.startY - pageY
        : coords.current.startX - pageX

      if (
        (coords.current.position === 1 && offset > 0) ||
        (coords.current.position === 2 && offset < 0)
      ) {
        coords.current.stop = true
        e.stopPropagation()
      }
    },
    onTouchEnd() {
      coords.current = null
    }
  })

  return (
    <div
      className={classes}
      data-name={props.name}
      data-title={props.title}
      data-sub-title={props.subTitle}
      ref={root}
    >
      {props.children}
    </div>
  )
}

export default TaTabViewItem
