import classNames from 'classnames'
import type { CSSProperties, FC, RenderProp } from '../helpers'
import FormFooter from './FormFooter'

const TaForm: FC<{
  style?: CSSProperties
  renderFooter?: RenderProp
}> = props => {
  const classes = classNames('ta-form', props.className)

  return (
    <div className={classes} style={props.style}>
      {props.children}
      {props.renderFooter ? (
        <FormFooter>{props.renderFooter()}</FormFooter>
      ) : (
        <></>
      )}
    </div>
  )
}

export default TaForm
