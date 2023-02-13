import { useContext } from 'react'
import classNames from 'classnames'
import type { SkeletonTitleProps } from './types'
import type { VFC } from '../helpers'
import { SkeletonContext } from './context'
import { getTitleClasses } from './util'
import { skeletonDefaultProps } from './props'

const TaSkeletonTitle: VFC<SkeletonTitleProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(getTitleClasses(props, consumer), props.className)

  return <div className={classes}></div>
}

TaSkeletonTitle.defaultProps = {
  ...skeletonDefaultProps
}

export default TaSkeletonTitle
