import classNames from 'classnames'
import type { StickyViewItemProps } from './types'
import type { FC } from '../helpers'

const TaStickyViewItem: FC<StickyViewItemProps> = props => {
  const classes = classNames('ta-sticky-view-item', props.className)

  return (
    <div className={classes} data-name={props.name}>
      <div className="ta-sticky-view-item_header">{props.name}</div>
      <div className="ta-sticky-view-item_body">{props.children}</div>
    </div>
  )
}

TaStickyViewItem.displayName = 'TaStickyViewItem'

export default TaStickyViewItem
