import { useEffect, useState } from 'react'
import classNames from 'classnames'
import type { StepperEmits, StepperProps } from './types'
import { formatNumber, getRangeNumber, getClasses } from './util'
import { getNumber, type FC, type OnClick } from '../helpers'
import { useInput } from '../Form/use-form'
import { Button } from '../Button'
import PlusOutlined from '../Icon/icons/PlusOutlined'
import MinusOutlined from '../Icon/icons/MinusOutlined'

const TaStepper: FC<StepperProps & StepperEmits> = ({
  value,
  disabled,
  decimalLength,
  ...props
}) => {
  const step = getNumber(props.step, 1)
  const min = getNumber(props.min, 1)
  const max = getNumber(props.max, Infinity)
  const [formValue, setFormValue] = useState('')

  const { inputEl, setInputValue, getInputValue } = useInput()

  const classes = classNames(getClasses(disabled), props.className)

  function updateValue(val: number | string) {
    const newVal = getRangeNumber(
      {
        min,
        max,
        decimalLength
      },
      val
    )

    if (newVal !== formValue) {
      setFormValue(newVal)

      props.onChange && props.onChange(newVal)
    }

    setInputValue(newVal)

    return newVal
  }

  function onChange() {
    updateValue(getInputValue())
  }

  function onInput() {
    const val = formatNumber(getInputValue(), decimalLength)

    setInputValue(val)

    props.onInput && props.onInput(val)
  }

  const onMinusClick: OnClick = e => {
    updateValue(parseFloat(formValue) - step)

    props.onMinusClick && props.onMinusClick(e)
  }

  const onPlusClick: OnClick = e => {
    updateValue(parseFloat(formValue) + step)

    props.onPlusClick && props.onPlusClick(e)
  }

  useEffect(() => {
    if (
      value != null &&
      parseFloat(value.toString()) !== parseFloat(formValue)
    ) {
      updateValue(value)
    } else if (formValue === '') {
      // 针对首次没有值的情况，默认最小值
      updateValue(min)
    }
  }, [value])

  return (
    <div className={classes}>
      <Button
        icon={MinusOutlined}
        shape="square"
        size="small"
        disabled={
          disabled || props.disabledMinus || parseFloat(formValue) <= min
        }
        onClick={onMinusClick}
      />
      <input
        className="ta-stepper_input"
        type={decimalLength != 0 ? 'text' : 'tel'}
        inputMode={decimalLength != 0 ? 'decimal' : 'numeric'}
        name={props.name}
        disabled={disabled}
        readOnly={props.disabledInput}
        onInput={onInput}
        onChange={onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        ref={inputEl}
      />
      <Button
        icon={PlusOutlined}
        shape="square"
        size="small"
        disabled={
          disabled || props.disabledPlus || parseFloat(formValue) >= max
        }
        onClick={onPlusClick}
      />
    </div>
  )
}

export default TaStepper
