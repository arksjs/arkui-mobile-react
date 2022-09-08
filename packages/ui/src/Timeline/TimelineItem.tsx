import classNames from 'classnames'
import type { TimelineItemProps } from './types'
import type { FC, RenderProp } from '../helpers/types'

const AkTimelineItem: FC<
  TimelineItemProps & {
    renderTitle?: RenderProp
    renderDot?: RenderProp
  }
> = props => {
  const classes = classNames(
    'ak-timeline-item',
    'ak-horizontal-hairline',
    props.className
  )

  return (
    <div className={classes}>
      <div className="ak-timeline-item_line"></div>
      <div className="ak-timeline-item_index">
        {props.renderDot ? (
          props.renderDot()
        ) : (
          <i
            className="ak-timeline-item_dot"
            style={{ borderColor: props.dotColor }}
          ></i>
        )}
      </div>
      <div className="ak-timeline-item_inner">
        {props.title || props.renderTitle ? (
          <div className="ak-timeline-item_title">
            {props.renderTitle ? props.renderTitle() : props.title}
          </div>
        ) : (
          <></>
        )}
        <div className="ak-timeline-item_content">{props.children}</div>
      </div>
    </div>
  )
}

export default AkTimelineItem
