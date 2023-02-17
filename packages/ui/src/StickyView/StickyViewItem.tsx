import classNames from 'classnames'
import type { StickyViewItemProps } from './types'
import type { FC } from '../helpers'

const TaStickyViewItem: FC<StickyViewItemProps> = ({
  name,
  title,
  ...props
}) => {
  const classes = classNames('ta-sticky-view-item', props.className)

  return (
    <div className={classes} data-name={name} data-title={title || name}>
      <div className="ta-sticky-view-item_header">{name}</div>
      <div className="ta-sticky-view-item_body">{props.children}</div>
    </div>
  )
}

TaStickyViewItem.displayName = 'TaStickyViewItem'

export default TaStickyViewItem
