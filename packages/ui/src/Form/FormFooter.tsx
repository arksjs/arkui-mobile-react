import classNames from 'classnames'
import type { CSSProperties, FC } from '../helpers'

const TaFormFooter: FC<{ style?: CSSProperties }> = props => {
  const classes = classNames('ta-form-footer', props.className)

  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  )
}

export default TaFormFooter
