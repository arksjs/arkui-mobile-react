import {
  AkCascader,
  AkNoticeBar,
  AkGroup,
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
      <AkNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Cascader"
      />
      <AkGroup title="家电">
        <AkCascader.View options={cascadeOptions} v-model="baseValue" />
      </AkGroup>
      <AkGroup title="空数据">
        <AkCascader.View options={[]} />
      </AkGroup>
      <AkGroup title="change 事件">
        <AkCascader.View options={cascadeOptions} onChange={onChange} />
      </AkGroup>
      <AkGroup title="select 事件（跟 change 的区别是重复选一样的也触发）">
        <AkCascader.View options={cascadeOptions} onSelect={onSelect} />
      </AkGroup>
    </>
  )
}
