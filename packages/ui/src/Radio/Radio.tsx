import classNames from 'classnames'
import type { RadioEmits, RadioProps } from './types'
import type { FC } from '../helpers'
import { Icon } from '../Icon'
import { useCheck } from '../Checkbox/use-check'
import CircleOutlined from '../Icon/icons/CircleOutlined'
import CheckCircleFilled from '../Icon/icons/CheckCircleFilled'
import { getCheckClasses } from '../Checkbox/util'

const TaRadio: FC<RadioProps & RadioEmits> = ({ children, ...props }) => {
  const { disabled2, name2, styles, onChange, inputEl } = useCheck(
    props,
    'radio'
  )

  const classes = classNames(
    'ta-radio',
    getCheckClasses(disabled2),
    props.className
  )

  return (
    <label className={classes} style={styles}>
      <input
        className="ta-radio_input ta-form-input"
        type="radio"
        name={name2}
        value={props.checkedValue}
        disabled={disabled2}
        onChange={onChange}
        ref={inputEl}
      />
      <div className="ta-radio_box">
        <Icon className="ta-radio_icon" icon={CircleOutlined} />
        <Icon className="ta-radio_checked-icon" icon={CheckCircleFilled} />
        {children ? <span className="ta-radio_text">{children}</span> : <></>}
      </div>
    </label>
  )
}

export default TaRadio
