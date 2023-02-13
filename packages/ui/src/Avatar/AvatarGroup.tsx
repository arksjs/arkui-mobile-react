import classNames from 'classnames'
import type { AvatarGroupProps } from './types'
import { getGroupClasses, getGroupCountClasses, getShowCount } from './util'
import Avatar from './Avatar'
import { toArray, type FC } from '../helpers'

const TaAvatarGroup: FC<AvatarGroupProps> = props => {
  const childCount = toArray(props.children).length
  const showCount = getShowCount(props.totalCount)
  const classes = classNames(getGroupClasses(childCount), props.className)
  const countClasses = classNames(getGroupCountClasses(showCount))

  return (
    <div className={classes}>
      {props.children}
      {props.totalCount != null ? (
        <Avatar className="ta-avatar-group_count" color={props.countColor}>
          <span className={countClasses}>{showCount}</span>
        </Avatar>
      ) : (
        <></>
      )}
    </div>
  )
}

export default TaAvatarGroup
