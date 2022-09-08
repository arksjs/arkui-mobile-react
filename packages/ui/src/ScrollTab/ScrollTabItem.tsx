import classNames from 'classnames'
import type { ScrollTabItemProps } from './types'
import type { FC } from '../helpers/types'

const AkScrollTabItem: FC<ScrollTabItemProps> = props => {
  const classes = classNames(
    'ak-sticky-view-item',
    'ak-scroll-tab-item',
    props.className
  )

  return (
    <div className={classes} data-name={props.name}>
      <div className="ak-sticky-view-item_header">{props.name}</div>
      <div className="ak-sticky-view-item_body">{props.children}</div>
    </div>
  )
}

AkScrollTabItem.displayName = 'AkStickyViewItem'

export default AkScrollTabItem
