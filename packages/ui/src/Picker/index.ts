import _Picker from './Picker'
import PickerPopup from './PickerPopup'
import PickerView from './PickerView'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { ShowPickerOptions, PickerDetail } from './types'

const showPicker = createShowPopup<
  ShowPickerOptions,
  PopupSuccessConfirmArgs<PickerDetail>
>({
  apiName: 'showPicker',
  component: PickerPopup,
  createHook: createConfirmHook
})

const Picker = Object.assign(_Picker, {
  Popup: PickerPopup,
  View: PickerView
})

export { Picker, PickerPopup, PickerView, showPicker }
export default Picker
