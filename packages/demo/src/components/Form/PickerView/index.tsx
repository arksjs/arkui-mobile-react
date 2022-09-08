import {
  AkPicker,
  AkNoticeBar,
  AkGroup,
  showToast,
  SelectorModelValue
} from '@/index'
import { useState } from 'react'
import { cascadeOptions, multiOptions, options } from '../Picker/data'

export default function ExpPickerView() {
  const [simpleValue, setSimpleValue] = useState([2001])

  function onChange(res: SelectorModelValue) {
    console.log('change', res)
  }

  function onChangeEvent(res: SelectorModelValue) {
    onChange(res)

    showToast(`change: ${res}`)
  }

  return (
    <>
      <AkNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Picker"
      />
      <AkGroup title="单列">
        <AkPicker.View
          value={simpleValue}
          options={options}
          onChange={v => setSimpleValue(v as number[])}
        ></AkPicker.View>
      </AkGroup>
      <AkGroup title="多列">
        <AkPicker.View
          options={multiOptions}
          onChange={onChange}
        ></AkPicker.View>
      </AkGroup>
      <AkGroup title="级联">
        <AkPicker.View
          options={cascadeOptions}
          onChange={onChange}
        ></AkPicker.View>
      </AkGroup>
      <AkGroup title="change 事件">
        <AkPicker.View
          options={multiOptions}
          onChange={onChangeEvent}
        ></AkPicker.View>
      </AkGroup>
    </>
  )
}
