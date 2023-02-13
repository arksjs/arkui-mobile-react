import { TaSlider, TaCell, TaGroup, showToast } from '@/index'
import { useState } from 'react'

export default function ExpSlider() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(10)
  const [value3, setValue3] = useState(20)
  const [value4, setValue4] = useState(30)
  const [value5, setValue5] = useState(40)
  const [value6, setValue6] = useState(50)
  const [value7, setValue7] = useState(60)
  const [value8, setValue8] = useState(70)

  function onInput(value: number) {
    showToast(`Input value: ${value}`)
  }

  function onChange(value: number) {
    showToast(`Change value: ${value}`)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell className="exp-slider-box" label={'value: ' + value}>
          <TaSlider value={value} onInput={v => setValue(v)} />
        </TaCell>
      </TaGroup>
      <TaGroup title="显示数值 showValue=true">
        <TaCell className="exp-slider-box" label={'value: ' + value2}>
          <TaSlider showValue value={value2} onInput={v => setValue2(v)} />
        </TaCell>
      </TaGroup>
      <TaGroup title="自定义颜色 color=#ff7875">
        <TaCell className="exp-slider-box" label={'value: ' + value3}>
          <TaSlider
            color="#ff7875"
            value={value3}
            showValue
            onInput={v => setValue3(v)}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="设置步进（step=5）">
        <TaCell className="exp-slider-box" label={'value: ' + value4}>
          <TaSlider
            showValue
            value={value4}
            step="5"
            onInput={v => setValue4(v)}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="限制范围 min=40 & max=140">
        <TaCell className="exp-slider-box" label={'value: ' + value5}>
          <TaSlider
            showValue
            min="40"
            max="140"
            value={value5}
            onInput={v => setValue5(v)}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="禁用">
        <TaCell className="exp-slider-box" label={'value: ' + value6}>
          <TaSlider disabled value={value6} />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell className="exp-slider-box" label="input">
          <TaSlider value={value7} onInput={onInput} />
        </TaCell>
        <TaCell className="exp-slider-box" label="change">
          <TaSlider value={value8} onChange={onChange} />
        </TaCell>
      </TaGroup>
    </>
  )
}
