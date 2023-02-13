import { TaRange, TaCell, TaGroup, showToast } from '@/index'
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
      <TaGroup title="基础用法">
        <TaCell className="exp-range-box" label={'value: ' + value}>
          <TaRange value={value} onInput={v => setValue(v)} />
        </TaCell>
      </TaGroup>
      <TaGroup title="显示数值 showValue=true">
        <TaCell className="exp-range-box" label={'value: ' + value2}>
          <TaRange showValue value={value2} onInput={v => setValue2(v)} />
        </TaCell>
      </TaGroup>
      <TaGroup title="自定义颜色 color=#ff7875">
        <TaCell className="exp-range-box" label={'value: ' + value3}>
          <TaRange
            color="#ff7875"
            value={value3}
            showValue
            onInput={v => setValue3(v)}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="返回不允许重叠 allowSameValue=false">
        <TaCell className="exp-range-box" label={'value: ' + value4}>
          <TaRange
            showValue
            value={value4}
            allowSameValue={false}
            onInput={v => setValue4(v)}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="设置步进（step=5）">
        <TaCell className="exp-range-box" label={'value: ' + value5}>
          <TaRange
            showValue
            value={value5}
            step="5"
            onInput={v => setValue5(v)}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="限制范围 min=50 & max=150">
        <TaCell className="exp-range-box" label={'value: ' + value6}>
          <TaRange
            showValue
            min="50"
            max="150"
            value={value6}
            onInput={v => setValue6(v)}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="禁用">
        <TaCell className="exp-range-box" label={'value: ' + value7}>
          <TaRange disabled value={value7} onInput={v => setValue7(v)} />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell className="exp-range-box" label="input">
          <TaRange onInput={onInput} />
        </TaCell>
        <TaCell className="exp-range-box" label="change">
          <TaRange onChange={onChange} />
        </TaCell>
      </TaGroup>
    </>
  )
}
