import classNames from 'classnames'
import type { SkeletonButtonProps } from './types'
import type { VFC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import { getButtonClasses } from './util'
import { skeletonDefaultProps } from './props'

const AkSkeletonButton: VFC<SkeletonButtonProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(getButtonClasses(props, consumer), props.className)

  return <div className={classes}></div>
}

AkSkeletonButton.defaultProps = {
  ...skeletonDefaultProps
}

export default AkSkeletonButton
