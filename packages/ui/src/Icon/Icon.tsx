import classNames from 'classnames'
import type { IconProps } from './types'
import { getIconStyles } from './util'
import AkSpriteSVG from './SpriteSVG'
import type { VFC, CSSProperties } from '../helpers/types'
import { isString } from '../helpers/util'
import type { SVGAttributes } from 'react'

const AkIcon: VFC<
  Omit<SVGAttributes<SVGSVGElement>, 'style'> &
    IconProps & { style?: CSSProperties }
> = ({
  icon,
  width,
  height,
  color,
  size,
  style,
  spin = false,
  className,
  ...attrs
}) => {
  const styles = Object.assign(
    getIconStyles({
      width,
      height,
      size,
      color
    }),
    style ?? {}
  )
  const classes = classNames('ak-icon', { spin }, className)

  return (
    <>
      {isString(icon) ? (
        <AkSpriteSVG
          {...attrs}
          className={classes}
          iconName={icon}
          style={styles}
        />
      ) : (
        icon({ ...attrs, className: classes, style: styles })
      )}
    </>
  )
}

AkIcon.defaultProps = {
  spin: false
}

export default AkIcon
