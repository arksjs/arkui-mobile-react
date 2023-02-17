import { forwardRef, useCallback } from 'react'
import classNames from 'classnames'
import type { SideTabProps, SideTabEmits } from './types'
import type { FRVFC } from '../helpers'
import { useTab } from '../Tab/use-tab'
import { Badge } from '../Badge'
import { Icon } from '../Icon'
import { getItemClasses } from './util'
import type { TabRef } from '../Tab/types'

const TaSideTab: FRVFC<TabRef, SideTabProps & SideTabEmits> = (
  { className, ...tabProps },
  ref
) => {
  const { options2, listEl, activeIndex, onChange, styles } = useTab(
    tabProps,
    ref,
    {
      tabName: 'SideTab'
    }
  )

  const classes = classNames('ta-side-tab', className)

  const renderItems = useCallback(() => {
    return options2.map((item, index) => (
      <li
        className={classNames(getItemClasses(index, activeIndex))}
        key={item.value}
        onClick={() => onChange(item.value)}
      >
        <Badge className="ta-side-tab_item-inner" {...item.badge}>
          {item.icon && item.activeIcon ? (
            <Icon icon={index === activeIndex ? item.activeIcon : item.icon} />
          ) : (
            <></>
          )}
          <span className="ta-side-tab_item-text">{item.label}</span>
        </Badge>
      </li>
    ))
  }, [options2, activeIndex, onChange])

  return (
    <div className={classes} style={styles}>
      <ul className="ta-side-tab_list" ref={listEl}>
        {renderItems()}
      </ul>
    </div>
  )
}

export default forwardRef(TaSideTab)
