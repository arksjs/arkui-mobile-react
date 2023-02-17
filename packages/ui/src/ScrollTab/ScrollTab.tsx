import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import type { ScrollTabEmits, ScrollTabProps, ScrollTabRef } from './types'
import type { TabRef } from '../Tab/types'
import { type CSSProperties, type FRFC } from '../helpers'
import type {
  StickyViewOnResetItems,
  StickyViewOnChange,
  StickyViewRef
} from '../StickyView/types'
import type { ResetContainer, StickyRef } from '../Sticky/types'
import { SideTab } from '../SideTab'
import { Sticky } from '../Sticky'
import { StickyView } from '../StickyView'
import type { SideTabOnChange } from '../SideTab/types'

const TaScrollTab: FRFC<
  ScrollTabRef,
  ScrollTabProps &
    ScrollTabEmits & {
      style?: CSSProperties
    }
> = (props, ref) => {
  const sideRef = useRef<StickyRef>(null)
  const tabRef = useRef<TabRef>(null)
  const bodyRef = useRef<StickyViewRef>(null)
  const classes = classNames('ta-scroll-tab', props.className)

  const [tabList, setTabList] = useState<
    {
      value: string
      label: string
    }[]
  >([])
  const [activeName, setActiveName] = useState<string>()

  // 单独更新以下tab的activeName
  function updateActiveName(name?: string) {
    if (name != null && nameInList(name) && name !== activeName) {
      setActiveName(name)
    }
  }

  function nameInList(name: string) {
    for (let i = 0; i < tabList.length; i++) {
      if (tabList[i].value === name) {
        return true
      }
    }

    return false
  }

  const onTabChange: SideTabOnChange = (name, index) => {
    scrollToIndex(index)
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

  const resetContainer: ResetContainer = containSelector => {
    sideRef.current?.resetContainer(containSelector)
    bodyRef.current?.resetContainer(containSelector)
  }

  const onResetItems: StickyViewOnResetItems = items => {
    setTabList(
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

  return (
    <div className={classes} style={props.style}>
      <div className="ta-scroll-tab_sidebar">
        <Sticky
          offsetTop={props.stickyOffsetTop}
          offsetBottom={props.stickyOffsetBottom}
          ref={sideRef}
        >
          {tabList.length > 0 ? (
            <SideTab
              options={tabList}
              value={activeName}
              onChange={onTabChange}
              ref={tabRef}
            />
          ) : (
            <></>
          )}
        </Sticky>
      </div>
      <div className="ta-scroll-tab_body">
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

export default forwardRef(TaScrollTab)
