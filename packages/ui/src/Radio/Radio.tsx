import classNames from 'classnames'
import type { RadioEmits, RadioProps } from './types'
import type { FC } from '../helpers/types'
import { Icon } from '../Icon'
import { useCheck } from '../Checkbox/use-check'
import CircleOutlined from '../Icon/icons/CircleOutlined'
import CheckCircleFilled from '../Icon/icons/CheckCircleFilled'
import { getCheckClasses } from '../Checkbox/util'

const AkRadio: FC<RadioProps & RadioEmits> = ({ children, ...props }) => {
  const { disabled2, name2, styles, onChange, inputEl } = useCheck(
    props,
    'radio'
  )

  const classes = classNames(
    'ak-radio',
    getCheckClasses(disabled2),
    props.className
  )

  return (
    <label className={classes} style={styles}>
      <input
        className="ak-radio_input ak-form-input"
        type="radio"
        name={name2}
        value={props.value}
        disabled={disabled2}
        onChange={onChange}
        ref={inputEl}
      />
      <div className="ak-radio_box">
        <Icon className="ak-radio_icon" icon={CircleOutlined} />
        <Icon className="ak-radio_checked-icon" icon={CheckCircleFilled} />
        {children ? <span className="ak-radio_text">{children}</span> : <></>}
      </div>
    </label>
  )
}

export default AkRadio
