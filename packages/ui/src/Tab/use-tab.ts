import {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ForwardedRef
} from 'react'
import { isNumber, isObject, isStringOrNumber, isURL } from '../helpers'
import { handleBadge } from '../Badge/util'
import type {
  OptionItem,
  HandleOptionItem,
  TabCommonProps,
  TabCommonEmits,
  TabRef
} from './types'
import {
  useMounted,
  useFrameTask,
  useStableState,
  useException,
  useOnce,
  useResizeObserver
} from '../hooks'
import { getStyles } from './util'

interface UseOptions {
  tabName: string
}

export function useTab(
  props: TabCommonProps & TabCommonEmits,
  ref: ForwardedRef<TabRef>,
  { tabName }: UseOptions
) {
  const { printNotInOptionsError } = useException(tabName)
  const { mounted } = useMounted()
  const { frameStart } = useFrameTask()

  const listEl = useRef<HTMLUListElement>(null)
  const underlineEl = useRef<HTMLSpanElement>(null)
  const [getOptions2, setOptions2] = useStableState<HandleOptionItem[]>([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const [hasSub, setHasSub] = useState(false)
  const activeIndex2 = useRef(0)
  const activeValue2 = useRef<string | number>()

  function updateOptions() {
    const options: HandleOptionItem[] = []

    let hasActive = false
    setHasSub(false)

    if (Array.isArray(props.options)) {
      props.options.forEach((item, index) => {
        let option: HandleOptionItem | null = null

        if (isNumber(item)) {
          option = {
            label: item.toString(),
            value: item as number
          }
        } else if (typeof item === 'string') {
          option = {
            label: item,
            value: item
          }
        } else if (isObject(item)) {
          item = item as OptionItem

          if (isStringOrNumber(item.value)) {
            option = {
              label:
                typeof item.label === 'string'
                  ? item.label
                  : item.value.toString(),
              subLabel: typeof item.subLabel === 'string' ? item.subLabel : '',
              value: item.value,
              icon: undefined
            }

            if (item.icon) {
              if (isURL(item.icon)) {
                option.iconLink = item.icon as string
                option.activeIconLink = isURL(item.activeIcon)
                  ? (item.activeIcon as string)
                  : option.iconLink
              } else {
                option.icon = item.icon
                option.activeIcon = item.activeIcon ?? option.icon
              }
            }

            if (option.subLabel) {
              setHasSub(true)
            }

            option.badge = handleBadge(item.badge)
          }
        }

        if (option) {
          if (option.value === activeValue2.current) {
            setActiveIndex(index)
            activeIndex2.current = index
            hasActive = true
          }

          options.push(option)
        }
      })
    }

    setOptions2(options)

    // 如果没有激活，则切换到首个
    if (!hasActive) {
      if (options[0]) {
        // 设置为第一个
        setActiveIndex(0)
        activeIndex2.current = 0
        activeValue2.current = options[0].value
      } else {
        setActiveIndex(-1)
        activeIndex2.current = -1
        activeValue2.current = ''
      }
      // 首次属于prop传进来的，不emit回去
      mounted.current && emitChange()
    }

    updatePos()
  }

  function _switchTo(value: string | number, isProp = false) {
    if (value === activeValue2.current) {
      return
    }

    if (!updateActive(value)) {
      printNotInOptionsError('index', isProp)
    } else if (!isProp) {
      // 设置modelValue不调用onChange
      emitChange()
    }
  }

  const switchToIndex = (index: number) => {
    if (index === activeIndex2.current) {
      return
    }

    if (getOptions2(true)[index]) {
      onChange(getOptions2(true)[index].value)
    } else {
      printNotInOptionsError('index')
    }
  }

  const updateActive = (value: string | number) => {
    if (value === activeValue2.current) {
      return true
    }

    let hasValue = false

    getOptions2(true).forEach((option, index) => {
      if (option.value === value) {
        hasValue = true

        activeIndex2.current = index
        activeValue2.current = option.value
        setActiveIndex(index)
      }
    })
    // afterUpdate
    hasValue && mounted.current && updatePos()

    return hasValue
  }

  function onChange(value: string | number) {
    if (value === activeValue2.current) {
      return
    }

    updateActive(value)
    emitChange()
  }

  function emitChange() {
    activeValue2.current &&
      props.onChange &&
      props.onChange(activeValue2.current, activeIndex2.current)
  }

  // const onChange = useCallback(
  //   (value: ActiveValue) => {
  //     if (value === activeValue2.current) {
  //       return
  //     }

  //     const hasValue = updateActive(value)

  //     hasValue && props.onChange && props.onChange(value, activeIndex2.current)
  //   },
  //   [props.onChange]
  // )

  function updatePos() {
    if (tabName === 'TabBar') {
      return
    }

    if (!listEl.current) {
      return
    }
    const $list = listEl.current
    const $activeItem = $list.children[activeIndex2.current] as HTMLElement
    if (!$activeItem) {
      return
    }

    const vertical = tabName === 'SideTab'
    const sizeKey = !vertical ? 'Width' : 'Height'
    const directionKey = !vertical ? 'Left' : 'Top'
    const offsetSizeKey = ('offset' + sizeKey) as 'offsetWidth'
    const scrollSizeKey = ('scroll' + sizeKey) as 'scrollWidth'
    const offsetDirectionKey = ('offset' + directionKey) as 'offsetLeft'
    const scrollDirectionKey = ('scroll' + directionKey) as 'scrollLeft'

    const w = $list[offsetSizeKey]
    const ofs = $activeItem[offsetDirectionKey]
    const from = $list[scrollDirectionKey]
    const to =
      $activeItem[offsetSizeKey] > w
        ? ofs
        : Math.max(
            Math.min(
              ofs - (w - $activeItem[offsetSizeKey]) / 2,
              $list[scrollSizeKey] - w
            ),
            0
          )

    frameStart({
      from,
      to,
      duration: 100,
      progress({ current }) {
        $list[scrollDirectionKey] = current
      },
      complete({ current }) {
        $list[scrollDirectionKey] = current
        updateUnderline()
      }
    })
  }

  const updateUnderlineOnce = useOnce(50)

  function updateUnderline() {
    if (tabName !== 'Tab') {
      return
    }

    updateUnderlineOnce(() => {
      const $activeItem = listEl.current?.querySelector(
        '.active'
      ) as HTMLElement

      let x = 0
      let w = 0

      if ($activeItem) {
        const $inner = $activeItem.firstElementChild as HTMLElement

        x =
          $activeItem.offsetLeft -
          (listEl.current?.scrollLeft || 0) +
          ($activeItem.offsetWidth - $inner.offsetWidth) / 2
        w = $inner.offsetWidth
      }

      if (underlineEl.current) {
        underlineEl.current.style.width = w + 'px'
        underlineEl.current.style.transform = `translate3d(${x}px, 0, 0)`
      }
    })
  }

  useResizeObserver(listEl, updateUnderline)

  useEffect(updateOptions, [props.options])

  useEffect(() => {
    const val = props.value

    val != null && _switchTo(val, true)
  }, [props.value])

  const styles = Object.assign(
    getStyles(props.color, props.activeColor),
    props.style ?? {}
  )

  const switchTo = (value: string | number) => _switchTo(value, false)

  useImperativeHandle(
    ref,
    () => ({
      switchTo,
      switchToIndex
    }),
    []
  )

  return {
    listEl,
    underlineEl,
    activeIndex,
    hasSub,
    options2: getOptions2(),
    switchTo,
    switchToIndex,
    onChange,
    styles
  }
}
