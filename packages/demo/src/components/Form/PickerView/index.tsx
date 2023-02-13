import {
  TaPicker,
  TaNoticeBar,
  TaGroup,
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
      <TaNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Picker"
      />
      <TaGroup title="单列">
        <TaPicker.View
          value={simpleValue}
          options={options}
          onChange={v => setSimpleValue(v as number[])}
        ></TaPicker.View>
      </TaGroup>
      <TaGroup title="多列">
        <TaPicker.View
          options={multiOptions}
          onChange={onChange}
        ></TaPicker.View>
      </TaGroup>
      <TaGroup title="级联">
        <TaPicker.View
          options={cascadeOptions}
          onChange={onChange}
        ></TaPicker.View>
      </TaGroup>
      <TaGroup title="change 事件">
        <TaPicker.View
          options={multiOptions}
          onChange={onChangeEvent}
        ></TaPicker.View>
      </TaGroup>
    </>
  )
}
