import {
  TaDatePicker,
  TaNoticeBar,
  TaGroup,
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
      <TaNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 DatePicker"
      />
      <TaGroup title="initialMode=datetime">
        <TaDatePicker.View initialMode="datetime" />
      </TaGroup>
      <TaGroup title="change 事件">
        <TaDatePicker.View initialMode="date" onChange={onChange} />
      </TaGroup>
    </>
  )
}
