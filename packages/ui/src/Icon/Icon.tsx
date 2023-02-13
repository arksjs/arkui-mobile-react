import type { SVGAttributes } from 'react'
import classNames from 'classnames'
import type { IconProps } from './types'
import { getIconStyles } from './util'
import TaSpriteSVG from './SpriteSVG'
import { isString, type VFC, type CSSProperties } from '../helpers'

const TaIcon: VFC<
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
  const classes = classNames('ta-icon', { spin }, className)

  return (
    <>
      {isString(icon) ? (
        <TaSpriteSVG
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

TaIcon.defaultProps = {
  spin: false
}

export default TaIcon
