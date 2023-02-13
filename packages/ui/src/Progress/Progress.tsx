import classNames from 'classnames'
import type { ProgressProps } from './types'
import type { RenderChildren, VFC } from '../helpers/types'
import {
  getProgress,
  getClasses,
  getStyles,
  getTrackClasses,
  getTrackStyles
} from './util'

const TaProgress: VFC<
  ProgressProps & {
    children?: RenderChildren<{
      progress: string
    }>
  }
> = props => {
  const progress = getProgress(props.percentage)
  const classes = classNames(getClasses(props.fixedBar), props.className)
  const trackClasses = classNames(getTrackClasses(props.animated))
  const styles = getStyles(props.color)
  const trackStyles = getTrackStyles(progress)

  const children =
    typeof props.children === 'function'
      ? props.children({ progress })
      : props.children

  return (
    <div className={classes} style={styles}>
      <div className="ta-progress_bar">
        <div className={trackClasses} style={trackStyles}></div>
      </div>
      {children || props.showText ? (
        <div className="ta-progress_text">{children || progress}</div>
      ) : (
        <></>
      )}
    </div>
  )
}

TaProgress.defaultProps = {
  percentage: 0,
  showText: false,
  animated: false,
  fixedBar: false
}

export default TaProgress
