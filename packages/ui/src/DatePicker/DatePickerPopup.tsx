import { forwardRef } from 'react'
import type {
  DatePickerDetail,
  DatePickerPopupEmits,
  DatePickerPopupProps
} from './types'
import type { FRVFC } from '../helpers'
import { PickerPopup } from '../Picker'
import { useHandlers } from './use-date-picker'
import type { PickerDetail, PickerPopupRef } from '../Picker/types'

const TaDatePickerPopup: FRVFC<
  PickerPopupRef,
  DatePickerPopupProps & DatePickerPopupEmits
> = (
  { formatTemplate, initialMode, minDate, maxDate, filter, ...props },
  ref
) => {
  const { PickerProvider } = useHandlers({
    formatTemplate,
    initialMode,
    minDate,
    maxDate,
    filter
  })

  function onConfirm(payload: PickerDetail) {
    props.onConfirm && props.onConfirm(payload as DatePickerDetail)
  }

  return (
    <PickerProvider>
      <PickerPopup {...props} options={[]} ref={ref} onConfirm={onConfirm} />
    </PickerProvider>
  )
}

export default forwardRef(TaDatePickerPopup)
