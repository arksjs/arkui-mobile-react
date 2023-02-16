import { forwardRef, useCallback } from 'react'
import classNames from 'classnames'
import type { TabProps, TabEmits, TabRef } from './types'
import type { FRVFC } from '../helpers'
import { getItemClasses, getClasses } from './util'
import { useTab } from './use-tab'
import { Badge } from '../Badge'
import { Icon } from '../Icon'

const TaTab: FRVFC<TabRef, TabProps & TabEmits> = (
  { scrollThreshold = 4, className, ...tabProps },
  ref
) => {
  const {
    options2,
    hasSub,
    listEl,
    underlineEl,
    activeIndex,
    styles,
    onChange
  } = useTab(tabProps, ref, {
    tabName: 'Tab'
  })

  const classes = classNames(
    getClasses(scrollThreshold, options2, hasSub),
    className
  )

  const renderItems = useCallback(() => {
    return options2.map((item, index) => (
      <li
        className={classNames(getItemClasses(index, activeIndex))}
        key={item.value}
        onClick={() => onChange(item.value)}
      >
        <Badge className="ta-tab_item-inner" {...item.badge}>
          {item.icon && item.activeIcon ? (
            <Icon icon={index === activeIndex ? item.activeIcon : item.icon} />
          ) : (
            <></>
          )}
          <span className="ta-tab_item-text">{item.label}</span>
        </Badge>
        {hasSub ? (
          <span className="ta-tab_item-sub-text">{item.subLabel}</span>
        ) : (
          <></>
        )}
      </li>
    ))
  }, [options2, activeIndex, onChange])

  return (
    <div className={classes} style={styles}>
      <ul className="ta-tab_list" ref={listEl}>
        {renderItems()}
      </ul>
      <span className="ta-tab_underline" ref={underlineEl}></span>
    </div>
  )
}

export default forwardRef(TaTab)
