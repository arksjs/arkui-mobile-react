import classNames from 'classnames'
import type { CircleProgressProps } from './types'
import type { RenderChildren, VFC } from '../helpers/types'
import { LoadingIcon } from '../LoadingIcon'
import { DEFAULT_SIZE, DEFAULT_STROKE_WIDTH } from '../LoadingIcon/util'
import { getNumber, rangeInteger } from '../helpers/util'
import { getFontSize } from './util'

const AkCircleProgress: VFC<
  CircleProgressProps & {
    children?: RenderChildren<{ progress: string }>
  }
> = props => {
  const classes = classNames('ak-circle-progress', props.className)
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
        className="ak-circle-progress_bar"
        size={nSize}
        rate={rangeInteger(props.percentage, 0, 100) / 100}
        strokeWidth={props.strokeWidth}
        color={props.color}
      />
      <div
        className="ak-circle-progress_text"
        style={{ padding: (props.strokeWidth ?? DEFAULT_STROKE_WIDTH) + 'px' }}
      >
        {children || progress}
      </div>
    </div>
  )
}

AkCircleProgress.defaultProps = {
  size: DEFAULT_SIZE,
  strokeWidth: DEFAULT_STROKE_WIDTH
}

export default AkCircleProgress
