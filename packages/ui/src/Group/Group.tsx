import type { HTMLAttributes } from 'react'
import classNames from 'classnames'
import type { GroupProps } from './types'
import { getClasses } from './util'
import type { FC, RenderProp } from '../helpers'

const TaGroup: FC<
  HTMLAttributes<HTMLDivElement> &
    GroupProps & {
      renderHeader?: RenderProp
    }
> = ({
  renderHeader,
  children,
  title,
  strongHeader = false,
  className,
  ...attrs
}) => {
  const classes = classNames(getClasses(strongHeader), className)

  return (
    <div {...attrs} className={classes}>
      <div className="ta-group_header">
        <div className="ta-group_title">{title}</div>
        <div className="ta-group_more">{renderHeader && renderHeader()}</div>
      </div>
      <div className="ta-group_body ta-horizontal-hairline hairline-reverse">
        <div className="ta-group_body-inner">{children}</div>
      </div>
    </div>
  )
}

export default TaGroup
