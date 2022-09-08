import classNames from 'classnames'
import type { CSSProperties, FC } from '../helpers/types'

const AkTimeline: FC<{ style?: CSSProperties }> = props => {
  const classes = classNames('ak-timeline', props.className)

  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  )
}

export default AkTimeline
