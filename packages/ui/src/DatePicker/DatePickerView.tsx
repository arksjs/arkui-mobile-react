import type { DatePickerViewEmits, DatePickerViewProps } from './types'
import type { VFC } from '../helpers'
import { PickerView } from '../Picker'
import { useHandlers } from './use-date-picker'
import type { SelectorModelValue } from '../SelectorField/types'

const TaDatePickerView: VFC<DatePickerViewProps & DatePickerViewEmits> = ({
  formatTemplate,
  initialMode,
  minDate,
  maxDate,
  filter,
  ...props
}) => {
  const { PickerProvider } = useHandlers({
    formatTemplate,
    initialMode,
    minDate,
    maxDate,
    filter
  })

  function onChange(e: SelectorModelValue) {
    props.onChange && props.onChange(e)
  }

  return (
    <PickerProvider>
      <PickerView {...props} options={[]} onChange={onChange} />
    </PickerProvider>
  )
}

export default TaDatePickerView
