import classNames from 'classnames'
import type { SelectorFieldEmits, SelectorFieldProps } from './types'
import type { VFC } from '../helpers/types'
import { Icon } from '../Icon'
import RightOutlined from '../Icon/icons/RightOutlined'
import { getClasses, getInputClasses } from './util'

const AkSelectorField: VFC<SelectorFieldProps & SelectorFieldEmits> = props => {
  const classes = classNames(getClasses(props), props.className)
  const inputClasses = classNames(getInputClasses(props.label))

  function onFieldClick() {
    props.onFieldClick && props.onFieldClick()
  }

  return (
    <div className={classes} onClick={onFieldClick}>
      <div className={inputClasses}>
        {props.label || props.placeholder || ''}
      </div>
      <Icon className="ak-input_arrow" icon={RightOutlined} />
      <input
        className="ak-input_cover ak-form-input"
        type="text"
        readOnly
        name={props.name}
        disabled={props.disabled}
        value={props.value}
      />
    </div>
  )
}

export default AkSelectorField
