import classNames from 'classnames'
import type { DividerProps } from './types'
import type { VFC } from '../helpers'
import { getClasses } from './util'

const TaDivider: VFC<DividerProps> = props => {
  const classes = classNames(getClasses(props), props.className)

  return (
    <div className={classes}>
      {props.title ? <span>{props.title}</span> : <></>}
    </div>
  )
}
TaDivider.defaultProps = {
  dashed: false
}

export default TaDivider
