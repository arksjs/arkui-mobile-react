import classNames from 'classnames'
import type { ScrollTabItemProps } from './types'
import type { FC } from '../helpers/types'

const TaScrollTabItem: FC<ScrollTabItemProps> = props => {
  const classes = classNames(
    'ta-sticky-view-item',
    'ta-scroll-tab-item',
    props.className
  )

  return (
    <div className={classes} data-name={props.name}>
      <div className="ta-sticky-view-item_header">{props.name}</div>
      <div className="ta-sticky-view-item_body">{props.children}</div>
    </div>
  )
}

TaScrollTabItem.displayName = 'TaStickyViewItem'

export default TaScrollTabItem
