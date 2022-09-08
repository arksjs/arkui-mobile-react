import { AkRange, AkCell, AkGroup, showToast } from '@/index'
import { useState } from 'react'

export default function ExpRange() {
  const [value, setValue] = useState<number[]>()
  const [value2, setValue2] = useState([10, 60])
  const [value3, setValue3] = useState([20, 70])
  const [value4, setValue4] = useState([30, 80])
  const [value5, setValue5] = useState([40, 90])
  const [value6, setValue6] = useState([0, 100])
  const [value7, setValue7] = useState([0, 100])

  function onInput(value: number[]) {
    showToast(`Input value: ${value}`)
  }

  function onChange(value: number[]) {
    showToast(`Change value: ${value}`)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkCell className="exp-range-box" label={'value: ' + value}>
          <AkRange value={value} onInput={v => setValue(v)} />
        </AkCell>
      </AkGroup>
      <AkGroup title="显示数值 showValue=true">
        <AkCell className="exp-range-box" label={'value: ' + value2}>
          <AkRange showValue value={value2} onInput={v => setValue2(v)} />
        </AkCell>
      </AkGroup>
      <AkGroup title="自定义颜色 color=#ff7875">
        <AkCell className="exp-range-box" label={'value: ' + value3}>
          <AkRange
            color="#ff7875"
            value={value3}
            showValue
            onInput={v => setValue3(v)}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="返回不允许重叠 allowSameValue=false">
        <AkCell className="exp-range-box" label={'value: ' + value4}>
          <AkRange
            showValue
            value={value4}
            allowSameValue={false}
            onInput={v => setValue4(v)}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="设置步进（step=5）">
        <AkCell className="exp-range-box" label={'value: ' + value5}>
          <AkRange
            showValue
            value={value5}
            step="5"
            onInput={v => setValue5(v)}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="限制范围 min=50 & max=150">
        <AkCell className="exp-range-box" label={'value: ' + value6}>
          <AkRange
            showValue
            min="50"
            max="150"
            value={value6}
            onInput={v => setValue6(v)}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="禁用">
        <AkCell className="exp-range-box" label={'value: ' + value7}>
          <AkRange disabled value={value7} onInput={v => setValue7(v)} />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell className="exp-range-box" label="input">
          <AkRange onInput={onInput} />
        </AkCell>
        <AkCell className="exp-range-box" label="change">
          <AkRange onChange={onChange} />
        </AkCell>
      </AkGroup>
    </>
  )
}
