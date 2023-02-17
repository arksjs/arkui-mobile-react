import { cloneElement } from 'react'
import classNames from 'classnames'
import type { StepsProps } from './types'
import { getStepsClasses } from './util'
import { toArray, type CSSProperties, type FC } from '../helpers'

const TaSteps: FC<
  StepsProps & {
    style?: CSSProperties
  }
> = ({ activeIndex = 0, ...props }) => {
  const classes = classNames(getStepsClasses(props), props.className)

  return (
    <div className={classes} style={props.style}>
      {toArray(props.children).map((child, index) => {
        const childProps = {
          ...child.props,
          index,
          active: activeIndex === index,
          finish: index < activeIndex,
          key: index
        }

        return cloneElement(child, childProps)
      })}
    </div>
  )
}

export default TaSteps
