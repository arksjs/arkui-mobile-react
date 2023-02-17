import {
  cloneElement,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import type { TabViewEmits, TabViewProps, TabViewRef } from './types'
import { getClasses } from './util'
import { SideTab } from '../SideTab'
import { Tab } from '../Tab'
import { Swiper } from '../Swiper'
import type { SwiperOnActiveIndexChange, SwiperRef } from '../Swiper/types'
import type { TabOnChange, TabRef } from '../Tab/types'
import { toArray, type CSSProperties, type FRFC } from '../helpers'
import { useException } from '../hooks'

interface TabItem {
  value: number
  label: string
  subLabel: string
}

const TaTabView: FRFC<
  TabViewRef,
  TabViewProps &
    TabViewEmits & {
      style?: CSSProperties
    }
> = (props, ref) => {
  const { printListItemNotFoundError } = useException('TabView')
  const tabRef = useRef<TabRef>(null)
  const swiperRef = useRef<SwiperRef>(null)
  const [vertical] = useState(!!props.initialVertical)
  const [tabList, setTabList] = useState<TabItem[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const itemNames = useRef<string[]>([])

  function getActiveIndexByName(name?: string) {
    if (name) {
      for (let i = 0; i < itemNames.current.length; i++) {
        if (itemNames.current[i] === name) {
          return i
        }
      }
    }

    return -1
  }

  const onTabChange: TabOnChange = index => {
    console.log(index)
    switchToIndex(index as number)
  }

  const onSwiperChange: SwiperOnActiveIndexChange = index => {
    setActiveIndex(index)

    props.onChange && props.onChange(itemNames.current[index] || '', index)
  }

  function _switchTo(name: string, isProp: boolean) {
    const newIndex = getActiveIndexByName(name)

    if (newIndex === -1) {
      printListItemNotFoundError('name', isProp)
    } else if (newIndex !== activeIndex) {
      if (isProp) {
        setActiveIndex(newIndex)
      } else {
        switchToIndex(newIndex)
      }
    }
  }

  function switchToIndex(index: number) {
    if (index >= 0 && index < tabList.length) {
      swiperRef.current?.swipeTo(index)
    } else {
      printListItemNotFoundError('index')
    }
  }

  const renderItems = useMemo(() => {
    const newTabList: TabItem[] = []
    itemNames.current = []

    const newChildren = toArray(props.children).map((child, index) => {
      const name = child.props.name ?? ''
      const title = child.props.title ?? ''

      newTabList.push({
        value: index,
        label: title || name,
        subLabel: child.props.subTitle ?? ''
      })

      itemNames.current.push(name)

      const childProps = {
        key: index,
        ...child.props,
        index,
        vertical
      }

      return cloneElement(child, childProps)
    })

    if (JSON.stringify(newTabList) !== JSON.stringify(tabList)) {
      setTabList(newTabList)
    }

    return newChildren
  }, [props.children])

  useEffect(() => {
    props.value != null && _switchTo(props.value, true)
  }, [props.value])

  const switchTo = (name: string) => _switchTo(name, false)

  useImperativeHandle(
    ref,
    () => ({
      switchTo,
      switchToIndex
    }),
    []
  )

  const classes = classNames(getClasses(vertical), props.className)

  return (
    <div className={classes} style={props.style}>
      <div className="ta-tab-view_header ta-horizontal-hairline">
        {vertical ? (
          <SideTab
            options={tabList}
            onChange={onTabChange}
            ref={tabRef}
            value={activeIndex}
          />
        ) : (
          <Tab
            options={tabList}
            scrollThreshold={props.scrollThreshold}
            onChange={onTabChange}
            ref={tabRef}
            value={activeIndex}
          />
        )}
      </div>
      <div className="ta-tab-view_body">
        <Swiper
          initialVertical={vertical}
          bounces={false}
          onAnimated={props.onAnimated}
          ref={swiperRef}
          onActiveIndexChange={onSwiperChange}
        >
          {renderItems}
        </Swiper>
      </div>
    </div>
  )
}

export default forwardRef(TaTabView)
