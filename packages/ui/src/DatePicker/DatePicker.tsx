import type { DatePickerEmits, DatePickerProps } from './types'
import type { VFC } from '../helpers'
import { Picker } from '../Picker'
import { useHandlers } from './use-date-picker'

const TaDatePicker: VFC<DatePickerProps & DatePickerEmits> = ({
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

  return (
    <PickerProvider>
      <Picker {...props} options={[]} />
    </PickerProvider>
  )
}

export default TaDatePicker
