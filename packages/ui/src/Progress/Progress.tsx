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

const AkProgress: VFC<
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
      <div className="ak-progress_bar">
        <div className={trackClasses} style={trackStyles}></div>
      </div>
      {children || props.showText ? (
        <div className="ak-progress_text">{children || progress}</div>
      ) : (
        <></>
      )}
    </div>
  )
}

AkProgress.defaultProps = {
  percentage: 0,
  showText: false,
  animated: false,
  fixedBar: false
}

export default AkProgress
