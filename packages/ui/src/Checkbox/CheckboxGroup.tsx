import { useCallback, useRef } from 'react'
import classNames from 'classnames'
import type {
  CheckboxGroupEmits,
  CheckboxGroupProps,
  ModelValue
} from './types'
import { isSameArray, isStringOrNumberArray, type FC } from '../helpers'
import { useCheckGroup } from './use-check'
import Checkbox from './Checkbox'

const TaCheckboxGroup: FC<CheckboxGroupProps & CheckboxGroupEmits> = ({
  onChange,
  children,
  ...props
}) => {
  const inputValue = useRef<ModelValue[]>([])

  const { root, options2, GroupProvider, groupClasses } = useCheckGroup(props, {
    name: 'checkbox',
    updateValue({ isChange, children }) {
      const newVal: ModelValue[] = []

      children.forEach(child => {
        if (child.getInputChecked()) {
          const val = child.getValue()
          val != null && newVal.push(val)
        }
      })

      inputValue.current = newVal

      if (isChange) {
        onChange && onChange(newVal)
      }

      return newVal
    },
    watchValue({ children, value }) {
      if (
        isStringOrNumberArray(value) &&
        !isSameArray(value, inputValue.current)
      ) {
        const newVal: ModelValue[] = []

        children.forEach(child => {
          const val = child.getValue()
          const checked = val != null && value.includes(val)
          child.setChecked(checked)
          checked && newVal.push(val)
        })

        inputValue.current = newVal
      }
    }
  })

  const classes = classNames('ta-checkbox-group', groupClasses, props.className)

  const renderChildren = useCallback(
    () =>
      children
        ? children
        : options2.map(item => {
            return (
              <Checkbox key={item.value} checkedValue={item.value}>
                {item.label}
              </Checkbox>
            )
          }),
    [children, options2]
  )

  return (
    <div className={classes} ref={root}>
      <GroupProvider>{renderChildren()}</GroupProvider>
    </div>
  )
}

export default TaCheckboxGroup
