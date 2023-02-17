import classNames from 'classnames'
import type { ScrollTabItemProps } from './types'
import type { FC } from '../helpers'

const TaScrollTabItem: FC<ScrollTabItemProps> = ({ name, title, ...props }) => {
  const classes = classNames(
    'ta-sticky-view-item',
    'ta-scroll-tab-item',
    props.className
  )

  return (
    <div className={classes} data-name={name} data-title={title || name}>
      <div className="ta-sticky-view-item_header">{name}</div>
      <div className="ta-sticky-view-item_body">{props.children}</div>
    </div>
  )
}

TaScrollTabItem.displayName = 'TaStickyViewItem'

export default TaScrollTabItem
