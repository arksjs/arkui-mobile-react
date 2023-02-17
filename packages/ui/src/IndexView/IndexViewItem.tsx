import classNames from 'classnames'
import type { IndexViewItemProps } from './types'
import type { FC } from '../helpers'
import { Group } from '../Group'

const TaIndexViewItem: FC<IndexViewItemProps> = ({ name, title, ...props }) => {
  const classes = classNames(
    'ta-sticky-view-item',
    'ta-index-view-item',
    props.className
  )

  return (
    <Group
      className={classes}
      title={title || name}
      data-name={name}
      data-title={title}
    >
      {props.children}
    </Group>
  )
}

TaIndexViewItem.displayName = 'TaStickyViewItem'

export default TaIndexViewItem
