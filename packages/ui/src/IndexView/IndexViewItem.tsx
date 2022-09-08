import classNames from 'classnames'
import type { IndexViewItemProps } from './types'
import type { FC } from '../helpers/types'
import { Group } from '../Group'

const AkIndexViewItem: FC<IndexViewItemProps> = ({ name = '', ...props }) => {
  const classes = classNames(
    'ak-sticky-view-item',
    'ak-index-view-item',
    props.className
  )

  return (
    <Group title={name.toString()} className={classes} data-name={name}>
      {props.children}
    </Group>
  )
}

AkIndexViewItem.displayName = 'AkStickyViewItem'

export default AkIndexViewItem
