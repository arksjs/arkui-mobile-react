import classNames from 'classnames'
import type { CSSProperties, FC } from '../helpers'

const TaTimeline: FC<{ style?: CSSProperties }> = props => {
  const classes = classNames('ta-timeline', props.className)

  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  )
}

export default TaTimeline
