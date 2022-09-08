import classNames from 'classnames'
import type { StickyViewItemProps } from './types'
import type { FC } from '../helpers/types'

const AkStickyViewItem: FC<StickyViewItemProps> = props => {
  const classes = classNames('ak-sticky-view-item', props.className)

  return (
    <div className={classes} data-name={props.name}>
      <div className="ak-sticky-view-item_header">{props.name}</div>
      <div className="ak-sticky-view-item_body">{props.children}</div>
    </div>
  )
}

AkStickyViewItem.displayName = 'AkStickyViewItem'

export default AkStickyViewItem
