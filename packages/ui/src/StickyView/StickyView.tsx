import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import type { StickyViewEmits, StickyViewProps, StickyViewRef } from './types'
import { getClasses, getFixedStyles, FIXED_HEIGHT } from './util'
import { Sticky } from '../Sticky'
import {
  CSSProperties2CssText,
  getRelativeOffset,
  getScrollTop,
  getSizeValue,
  querySelector,
  scrollTo as _scrollTo,
  getFilteredChildren,
  isSameArray,
  type FRFC
} from '../helpers'
import { useException, useOnce, useScroll } from '../hooks'
import type { ResetContainer, StickyRef } from '../Sticky/types'

const TaStickyView: FRFC<StickyViewRef, StickyViewProps & StickyViewEmits> = (
  props,
  ref
) => {
  const { printListItemNotFoundError } = useException('StickyView')
  const once = useOnce()
  const [isSelfContainer, setIsSelfContainer] = useState(false)
  const classes = classNames(getClasses(isSelfContainer), props.className)

  const root = useRef<HTMLDivElement>(null)
  const listEl = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLElement>()
  const fixedEl = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<StickyRef>(null)
  const activeIndex = useRef(0)
  const itemNames = useRef<string[]>([])
  const itemTitles = useRef<string[]>([])
  const isSpecifyScrolling = useRef(false) // 是否指定滚动

  function getItems(): HTMLDivElement[] {
    return listEl.current
      ? [].slice.call(
          listEl.current.querySelectorAll('.ta-sticky-view-item'),
          0
        )
      : []
  }

  function getItemName(index: number) {
    return itemNames.current[index] || ''
  }

  function getItemTitle(index: number) {
    return itemTitles.current[index] || getItemName(index)
  }

  function getActiveIndexByName(name?: string) {
    if (name) {
      for (let i = 0; i < itemNames.current.length; i++) {
        if (getItemName(i) === name) {
          return i
        }
      }
    }

    return -1
  }

  const oldIndex = useRef(-1)

  function onChange() {
    if (oldIndex.current !== activeIndex.current) {
      const name = getItemName(activeIndex.current)
      props.onChange && props.onChange(name, activeIndex.current)
    }
    oldIndex.current = -1
  }

  function updateTitle(t: string, tY: number | null) {
    if (!fixedEl.current) {
      return
    }

    fixedEl.current.textContent = t
    fixedEl.current.style.cssText = CSSProperties2CssText(getFixedStyles(tY))
  }

  function updateFixed(ss: number | null) {
    if (!fixedEl.current || !container.current) {
      return
    }

    if (itemNames.current.length === 0) {
      updateTitle('', null)
      return
    }

    if (oldIndex.current === -1) {
      oldIndex.current = activeIndex.current
    }

    const scrollTop = ss == null ? getScrollTop(container.current) : ss

    const _index = activeIndex.current
    const nextIndex = _index + 1
    const offsetTops = getOffsetTops()

    const current = offsetTops[_index]
    const next =
      offsetTops[nextIndex] != null ? offsetTops[nextIndex] : Infinity
    const first = offsetTops[0]

    if (scrollTop < first) {
      updateTitle('', null)
    } else if (scrollTop >= current) {
      if (scrollTop >= next) {
        activeIndex.current = nextIndex
        updateTitle(getItemName(nextIndex), 0)

        if (
          offsetTops[nextIndex + 1] &&
          scrollTop >= offsetTops[nextIndex + 1]
        ) {
          // 超过了
          updateFixed(scrollTop)
        } else if (!isSpecifyScrolling.current) {
          onChange()
        }
      } else if (next - scrollTop < FIXED_HEIGHT) {
        updateTitle(getItemName(_index), next - scrollTop - FIXED_HEIGHT)
      } else {
        updateTitle(getItemName(_index), 0)
      }
    } else {
      if (current - scrollTop < FIXED_HEIGHT) {
        updateTitle(getItemName(_index - 1), current - scrollTop - FIXED_HEIGHT)
      } else {
        activeIndex.current = _index - 1
        updateTitle(getItemName(_index - 1), 0)

        if (offsetTops[_index - 1] && offsetTops[_index - 1] > scrollTop) {
          updateFixed(scrollTop)
        } else if (!isSpecifyScrolling.current) {
          onChange()
        }
      }
    }

    isSpecifyScrolling.current &&
      once(() => {
        // 有一些指定滑动到相应位置，移动中间不需要不断上报onChange，只要上报最后一个
        isSpecifyScrolling.current = false
        onChange()
      })
  }

  function getOffsetTops() {
    const offset =
      getRelativeOffset(
        listEl.current as HTMLElement,
        container.current as HTMLElement
      ).offsetTop - getSizeValue(props.offsetTop)

    return getItems().map($el => {
      return $el.offsetTop + offset
    })
  }

  /**
   * 滚到到指定位置
   */
  function scrollToOffset(offset: number) {
    isSpecifyScrolling.current = true
    // 在onMounted后还需要nextTick才能有效调用滚动
    _scrollTo(container.current as HTMLElement, offset, false)
  }

  /**
   * 滚动到第index个
   */
  function scrollToIndex(newIndex: number) {
    const $items = getItems()

    if ($items[newIndex]) {
      if (newIndex != activeIndex.current && container.current) {
        scrollToOffset(
          getRelativeOffset($items[newIndex], container.current).offsetTop
        )
      }
    } else {
      printListItemNotFoundError('index')
    }
  }

  /**
   * 滚动到指定name
   */
  function scrollTo(name: string) {
    const newIndex = getActiveIndexByName(name)

    if (newIndex !== -1) {
      scrollToIndex(newIndex)
    } else {
      printListItemNotFoundError('name')
    }
  }

  const resetContainer: ResetContainer = containSelector => {
    const newEl =
      querySelector(containSelector) || (root.current as HTMLElement)

    if (newEl === container.current) {
      return
    }

    container.current = newEl
    setIsSelfContainer(newEl === root.current)
    stickyRef.current?.resetContainer(newEl)
    scrollElChange()
    updateFixed(null)
  }

  const resetItems = () => {
    const newItemNames: string[] = []
    const newItemTitles: string[] = []

    getFilteredChildren(props.children, 'TaStickyViewItem').forEach(child => {
      newItemNames.push(child.props.name ?? '')
      newItemTitles.push(child.props.title ?? '')

      return child
    })

    itemTitles.current = newItemTitles

    if (!isSameArray(newItemNames, itemNames.current)) {
      itemNames.current = newItemNames

      updateFixed(null)

      props.onResetItems &&
        props.onResetItems(
          itemNames.current.map((name, index) => ({
            name,
            index,
            title: getItemTitle(index)
          }))
        )
    }
  }

  function updateValue(val?: string) {
    if (val == null) {
      return
    }

    const newIndex = getActiveIndexByName(val)

    if (newIndex !== -1) {
      if (newIndex != activeIndex.current) {
        // 把oldIndex设置为最新，阻止onChange被调用
        oldIndex.current = newIndex
        scrollToIndex(newIndex)
      }
    } else {
      printListItemNotFoundError('value', true)
    }
  }

  const { elChange: scrollElChange } = useScroll(container, () =>
    updateFixed(null)
  )

  useEffect(() => {
    resetContainer(props.containSelector)
  }, [props.containSelector])

  useEffect(() => {
    updateValue(props.value)
  }, [props.value])

  useImperativeHandle(
    ref,
    () => ({
      scrollTo,
      scrollToIndex,
      scrollToOffset,
      resetContainer
    }),
    []
  )

  useEffect(resetItems, [props.children])

  return (
    <div className={classes} ref={root}>
      <div className="ta-sticky-view_list" ref={listEl}>
        {props.children}
      </div>
      <Sticky
        offsetTop={props.offsetTop}
        disabled={props.disabled}
        className="ta-sticky-view_top"
        ref={stickyRef}
      >
        <div className="ta-sticky-view_fixed">
          <div className="ta-sticky-view_fixed-inner" ref={fixedEl}></div>
        </div>
      </Sticky>
    </div>
  )
}

export default forwardRef(TaStickyView)
