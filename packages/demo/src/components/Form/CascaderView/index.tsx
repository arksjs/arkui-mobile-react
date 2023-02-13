import {
  TaCascader,
  TaNoticeBar,
  TaGroup,
  showToast,
  SelectorModelValue,
  CascaderOnSelect
} from '@/index'
import { cascadeOptions } from '../Picker/data'

export default function ExpCascaderView() {
  function onChange(res: SelectorModelValue) {
    console.log('change', res)

    showToast(`change: ${res}`)
  }

  const onSelect: CascaderOnSelect = res => {
    console.log('select', res)

    showToast(`select: ${res.value}`)
  }

  return (
    <>
      <TaNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Cascader"
      />
      <TaGroup title="家电">
        <TaCascader.View options={cascadeOptions} v-model="baseValue" />
      </TaGroup>
      <TaGroup title="空数据">
        <TaCascader.View options={[]} />
      </TaGroup>
      <TaGroup title="change 事件">
        <TaCascader.View options={cascadeOptions} onChange={onChange} />
      </TaGroup>
      <TaGroup title="select 事件（跟 change 的区别是重复选一样的也触发）">
        <TaCascader.View options={cascadeOptions} onSelect={onSelect} />
      </TaGroup>
    </>
  )
}
