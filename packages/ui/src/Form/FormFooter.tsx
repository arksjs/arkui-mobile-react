import classNames from 'classnames'
import type { CSSProperties, FC } from '../helpers/types'

const AkFormFooter: FC<{ style?: CSSProperties }> = props => {
  const classes = classNames('ak-form-footer', props.className)

  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  )
}

export default AkFormFooter
