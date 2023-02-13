import classNames from 'classnames'
import type { TimelineItemProps } from './types'
import type { FC, RenderProp } from '../helpers/types'

const TaTimelineItem: FC<
  TimelineItemProps & {
    renderTitle?: RenderProp
    renderDot?: RenderProp
  }
> = props => {
  const classes = classNames(
    'ta-timeline-item',
    'ta-horizontal-hairline',
    props.className
  )

  return (
    <div className={classes}>
      <div className="ta-timeline-item_line"></div>
      <div className="ta-timeline-item_index">
        {props.renderDot ? (
          props.renderDot()
        ) : (
          <i
            className="ta-timeline-item_dot"
            style={{ borderColor: props.dotColor }}
          ></i>
        )}
      </div>
      <div className="ta-timeline-item_inner">
        {props.title || props.renderTitle ? (
          <div className="ta-timeline-item_title">
            {props.renderTitle ? props.renderTitle() : props.title}
          </div>
        ) : (
          <></>
        )}
        <div className="ta-timeline-item_content">{props.children}</div>
      </div>
    </div>
  )
}

export default TaTimelineItem
