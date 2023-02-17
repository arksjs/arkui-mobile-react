import classNames from 'classnames'
import type { CircleProgressProps } from './types'
import { LoadingIcon } from '../LoadingIcon'
import { DEFAULT_SIZE, DEFAULT_STROKE_WIDTH } from '../LoadingIcon/util'
import {
  getNumber,
  rangeInteger,
  type RenderChildren,
  type VFC
} from '../helpers'
import { getFontSize } from './util'

const TaCircleProgress: VFC<
  CircleProgressProps & {
    children?: RenderChildren<{ progress: string }>
  }
> = props => {
  const classes = classNames('ta-circle-progress', props.className)
  const nSize = getNumber(props.size, DEFAULT_SIZE)
  const progress = rangeInteger(props.percentage, 0, 100) + '%'
  const fontSize = getFontSize(nSize)

  const children =
    typeof props.children === 'function'
      ? props.children({ progress })
      : props.children

  return (
    <div className={classes} style={{ fontSize: fontSize + 'px' }}>
      <LoadingIcon
        className="ta-circle-progress_bar"
        size={nSize}
        rate={rangeInteger(props.percentage, 0, 100) / 100}
        strokeWidth={props.strokeWidth}
        color={props.color}
      />
      <div
        className="ta-circle-progress_text"
        style={{ padding: (props.strokeWidth ?? DEFAULT_STROKE_WIDTH) + 'px' }}
      >
        {children || progress}
      </div>
    </div>
  )
}

TaCircleProgress.defaultProps = {
  size: DEFAULT_SIZE,
  strokeWidth: DEFAULT_STROKE_WIDTH
}

export default TaCircleProgress
