import {
  AkDatePicker,
  AkNoticeBar,
  AkGroup,
  showToast,
  SelectorModelValue
} from '@/index'

export default function ExpDatePickerView() {
  function onChange(e: SelectorModelValue) {
    console.log('change', e)
    showToast(`change: ${e}`)
  }

  return (
    <>
      <AkNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 DatePicker"
      />
      <AkGroup title="initialMode=datetime">
        <AkDatePicker.View initialMode="datetime" />
      </AkGroup>
      <AkGroup title="change 事件">
        <AkDatePicker.View initialMode="date" onChange={onChange} />
      </AkGroup>
    </>
  )
}
