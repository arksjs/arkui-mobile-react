import classNames from 'classnames'
import type { IndexViewItemProps } from './types'
import type { FC } from '../helpers/types'
import { Group } from '../Group'

const TaIndexViewItem: FC<IndexViewItemProps> = ({ name = '', ...props }) => {
  const classes = classNames(
    'ta-sticky-view-item',
    'ta-index-view-item',
    props.className
  )

  return (
    <Group title={name.toString()} className={classes} data-name={name}>
      {props.children}
    </Group>
  )
}

TaIndexViewItem.displayName = 'TaStickyViewItem'

export default TaIndexViewItem
