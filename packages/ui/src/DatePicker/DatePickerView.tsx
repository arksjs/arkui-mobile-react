import type { DatePickerViewEmits, DatePickerViewProps } from './types'
import type { VFC } from '../helpers/types'
import { PickerView } from '../Picker'
import { useHandlers } from './use-date-picker'

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

  return (
    <PickerProvider>
      <PickerView {...props} options={[]} />
    </PickerProvider>
  )
}

export default TaDatePickerView
