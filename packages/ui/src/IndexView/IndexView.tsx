import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import type { IndexViewEmits, IndexViewProps, IndexViewRef } from './types'
import { rangeInteger, type CSSProperties, type FRFC } from '../helpers'
import type {
  StickyViewOnResetItems,
  StickyViewOnChange,
  StickyViewRef
} from '../StickyView/types'
import type { ResetContainer } from '../Sticky/types'
import { StickyView } from '../StickyView'
import { useOnce, useTouch } from '../hooks'

interface Coords {
  size: number
  offsetY: number
  startY: number
  current: number
  isChange: boolean
}

const TaIndexView: FRFC<
  IndexViewRef,
  IndexViewProps &
    IndexViewEmits & {
      style?: CSSProperties
    }
> = (props, ref) => {
  const navEl = useRef<HTMLUListElement>(null)
  const bodyRef = useRef<StickyViewRef>(null)
  const classes = classNames('ta-index-view', props.className)

  const [indexList, setIndexList] = useState<
    {
      value: string
      label: string
    }[]
  >([])
  const [activeName, setActiveName] = useState('')

  // 单独更新以下tab的activeName
  function updateActiveName(name?: string) {
    if (name != null && nameInList(name) && name !== activeName) {
      setActiveName(name)
    }
  }

  function nameInList(name: string) {
    for (let i = 0; i < indexList.length; i++) {
      if (indexList[i].value === name) {
        return true
      }
    }

    return false
  }

  const onStickyViewChange: StickyViewOnChange = (name, index) => {
    updateActiveName(name)

    props.onChange && props.onChange(name, index)
  }

  /**
   * 滚动到第index个
   */
  function scrollToIndex(index: number) {
    bodyRef.current?.scrollToIndex(index)
  }

  /**
   * 滚动到指定name
   */
  function scrollTo(name: string) {
    bodyRef.current?.scrollTo(name)
  }

  const coords = useRef<Coords | null>(null)
  const lazyDo = useOnce(100)

  useTouch({
    el: navEl,
    onTouchStart(e) {
      const { clientY } = e.touchObject

      const $target = e.target as HTMLElement
      const index = parseInt($target.dataset.index as string)
      const rects = $target.getClientRects()[0]

      coords.current = {
        size: rects.height,
        offsetY: clientY - rects.top,
        startY: clientY,
        current: index,
        isChange: false
      }

      lazyDo(() => {
        scrollToIndex(index)
      }, 500)

      e.preventDefault()
    },

    onTouchMove(e) {
      if (!coords.current) {
        return
      }

      const { clientY } = e.touchObject
      const { startY, size, offsetY, current } = coords.current

      const y = clientY - startY

      let offsetCount = 0

      if (y > 0) {
        offsetCount = Math.floor(y / size) + (y % size > size - offsetY ? 1 : 0)
      } else if (y < 0) {
        offsetCount = -Math.floor(-y / size) + (-y % size > offsetY ? -1 : 0)
      }

      if (offsetCount !== 0) {
        coords.current.isChange = true

        lazyDo(() => {
          scrollToIndex(
            rangeInteger(current + offsetCount, 0, indexList.length - 1)
          )
        })
      }

      e.stopPropagation()
    },

    onTouchEnd(e) {
      if (coords.current) {
        if (!coords.current.isChange) {
          const toIndex = coords.current.current

          lazyDo(() => {
            scrollToIndex(toIndex)
          }, 0)
        }

        coords.current = null
        e.stopPropagation()
      }
    }
  })

  const resetContainer: ResetContainer = containSelector => {
    bodyRef.current?.resetContainer(containSelector)
  }

  const onResetItems: StickyViewOnResetItems = items => {
    setIndexList(
      items.map(item => {
        return {
          value: item.name,
          label: item.title
        }
      })
    )
  }

  useEffect(() => {
    updateActiveName(props.value)
  }, [props.value])

  useEffect(() => {
    resetContainer(document.documentElement)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      scrollTo,
      scrollToIndex,
      resetContainer
    }),
    []
  )

  const renderIndexItems = useMemo(
    () =>
      indexList.map((item, index) => (
        <li
          className={item.value === activeName ? 'active' : ''}
          data-value={item.value}
          data-index={index}
          key={item.value}
        >
          {item.label}
        </li>
      )),
    [activeName, indexList]
  )

  return (
    <div className={classes} style={props.style}>
      <div className="ta-index-view_sidebar">
        <ul className="ta-index-view_list" ref={navEl}>
          {renderIndexItems}
        </ul>
      </div>
      <div className="ta-index-view_body">
        <StickyView
          offsetTop={props.stickyOffsetTop}
          onResetItems={onResetItems}
          onChange={onStickyViewChange}
          ref={bodyRef}
        >
          {props.children}
        </StickyView>
      </div>
    </div>
  )
}

export default forwardRef(TaIndexView)
