import { useEffect, useState } from 'react'
import classNames from 'classnames'
import type { BadgeProps } from './types'
import {
  DEFAULT_MAX_COUNT,
  getBadgeClasses,
  getBadgeStyles,
  getClasses,
  getDefaultContent,
  getShowContent
} from './util'
import {
  getNumber,
  isNumber,
  isString,
  rangeInteger,
  type CSSProperties,
  type FC,
  type RenderProp
} from '../helpers'
import { useFrameTask } from '../hooks/use-frame-task'

const TaBadge: FC<
  BadgeProps & {
    style?: CSSProperties
    renderBadge?: RenderProp<{
      showContent: string
    }>
  }
> = props => {
  const [content2, setContent2] = useState(getDefaultContent(props))
  const { frameStart, frameStop } = useFrameTask()

  const classes = classNames(getClasses(props), props.className)
  const badgeStyles = getBadgeStyles(props)
  const badgeClass = classNames(getBadgeClasses(props))
  const showContent = getShowContent(props, content2)

  useEffect(() => {
    frameStop()

    const val = props.content

    if (isString(val) || isString(content2)) {
      setContent2(getDefaultContent(props))
      return
    }

    if (!isNumber(val)) {
      return
    }

    const currentIsShow = props.showZero || content2 > 0
    const isReadyToHide = !props.showZero && val === 0

    if (!currentIsShow || isReadyToHide) {
      setContent2(val)
    } else {
      const to = rangeInteger(
        val,
        0,
        getNumber(props.maxCount, DEFAULT_MAX_COUNT)
      )

      frameStart({
        from: content2,
        to,
        duration: Math.min(Math.abs(to - content2) * 50, 1000),
        progress: ({ current, frameIndex }) => {
          if (frameIndex % 3 === 0) {
            setContent2(Math.round(current))
          }
        },
        complete: ({ current }) => {
          setContent2(current)
        }
      })
    }
  }, [props.content])

  return (
    <div className={classes} style={props.style}>
      {props.children}
      {props.content != null ? (
        <div className={badgeClass} style={badgeStyles}>
          {props.renderBadge
            ? props.renderBadge({
                showContent
              })
            : showContent}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

TaBadge.defaultProps = {
  maxCount: DEFAULT_MAX_COUNT,
  dot: false,
  showZero: false,
  animated: false
}

export default TaBadge
