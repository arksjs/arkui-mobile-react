import classNames from 'classnames'
import type { DividerProps } from './types'
import type { VFC } from '../helpers/types'
import { getClasses } from './util'

const AkDivider: VFC<DividerProps> = props => {
  const classes = classNames(getClasses(props), props.className)

  return (
    <div className={classes}>
      {props.title ? <span>{props.title}</span> : <></>}
    </div>
  )
}

AkDivider.defaultProps = {
  dashed: false
}

export default AkDivider
