import classNames from 'classnames'
import type { StepProps } from './types'
import type { FC, RenderProp } from '../helpers'
import { getStepClasses } from './util'

const TaStep: FC<
  StepProps & {
    renderTitle?: RenderProp
    renderStep?: RenderProp<{
      active: boolean
      finish: boolean
    }>
  }
> = ({ index = -1, active = false, finish = false, ...props }) => {
  const classes = classNames(
    getStepClasses({ active, finish }),
    props.className
  )

  return (
    <div className={classes}>
      <div className="ta-step_line"></div>
      <div className="ta-step_index">
        {props.renderStep ? (
          props.renderStep({
            active,
            finish
          })
        ) : (
          <>{index + 1}</>
        )}
      </div>
      <div className="ta-step_inner">
        {props.title || props.renderTitle ? (
          <div className="ta-step_title">
            {props.renderTitle ? props.renderTitle() : props.title}
          </div>
        ) : (
          <></>
        )}
        <div className="ta-step_content">{props.children}</div>
      </div>
    </div>
  )
}

TaStep.displayName = 'TaStep'

export default TaStep
