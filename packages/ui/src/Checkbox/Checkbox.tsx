import classNames from 'classnames'
import type { CheckboxEmits, CheckboxProps } from './types'
import type { FC } from '../helpers/types'
import { getCheckClasses } from './util'
import { Icon } from '../Icon'
import { useCheck } from './use-check'
import CircleOutlined from '../Icon/icons/CircleOutlined'
import CheckCircleFilled from '../Icon/icons/CheckCircleFilled'
import BorderOutlined from '../Icon/icons/BorderOutlined'
import CheckSquareFilled from '../Icon/icons/CheckSquareFilled'

const TaCheckbox: FC<CheckboxProps & CheckboxEmits> = ({
  circle = false,
  children,
  ...props
}) => {
  const { disabled2, name2, styles, onChange, inputEl } = useCheck(
    props,
    'checkbox'
  )

  const classes = classNames(
    'ta-checkbox',
    getCheckClasses(disabled2),
    props.className
  )

  return (
    <label className={classes} style={styles}>
      <input
        className="ta-checkbox_input ta-form-input"
        type="checkbox"
        name={name2}
        value={props.value}
        disabled={disabled2}
        onChange={onChange}
        ref={inputEl}
      />
      <div className="ta-checkbox_box">
        <Icon
          className="ta-checkbox_icon"
          icon={circle ? CircleOutlined : BorderOutlined}
        />
        <Icon
          className="ta-checkbox_checked-icon"
          icon={circle ? CheckCircleFilled : CheckSquareFilled}
        />
        {children ? (
          <span className="ta-checkbox_text">{children}</span>
        ) : (
          <></>
        )}
      </div>
    </label>
  )
}

export default TaCheckbox
