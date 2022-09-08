import { AkSlider, AkCell, AkGroup, showToast } from '@/index'
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
      <AkGroup title="基础用法">
        <AkCell className="exp-slider-box" label={'value: ' + value}>
          <AkSlider value={value} onInput={v => setValue(v)} />
        </AkCell>
      </AkGroup>
      <AkGroup title="显示数值 showValue=true">
        <AkCell className="exp-slider-box" label={'value: ' + value2}>
          <AkSlider showValue value={value2} onInput={v => setValue2(v)} />
        </AkCell>
      </AkGroup>
      <AkGroup title="自定义颜色 color=#ff7875">
        <AkCell className="exp-slider-box" label={'value: ' + value3}>
          <AkSlider
            color="#ff7875"
            value={value3}
            showValue
            onInput={v => setValue3(v)}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="设置步进（step=5）">
        <AkCell className="exp-slider-box" label={'value: ' + value4}>
          <AkSlider
            showValue
            value={value4}
            step="5"
            onInput={v => setValue4(v)}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="限制范围 min=40 & max=140">
        <AkCell className="exp-slider-box" label={'value: ' + value5}>
          <AkSlider
            showValue
            min="40"
            max="140"
            value={value5}
            onInput={v => setValue5(v)}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="禁用">
        <AkCell className="exp-slider-box" label={'value: ' + value6}>
          <AkSlider disabled value={value6} />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell className="exp-slider-box" label="input">
          <AkSlider value={value7} onInput={onInput} />
        </AkCell>
        <AkCell className="exp-slider-box" label="change">
          <AkSlider value={value8} onChange={onChange} />
        </AkCell>
      </AkGroup>
    </>
  )
}
