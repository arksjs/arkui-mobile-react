import { cascadeOptions, multiOptions, options, regionOptions } from './data'
import {
  showToast,
  showPicker,
  SelectorModelValue,
  SelectorValueFormatter,
  SelectorValueParser,
  TaGroup,
  TaCell,
  TaPicker
} from '@/index'
import { useState } from 'react'

const separator = '-'

export default function ExpPicker() {
  const [disableValue] = useState([2000, '春'])
  const [formatValue] = useState(`2001${separator}夏`)

  const formatter: SelectorValueFormatter = (valueArray, labelArray) => {
    return {
      value: valueArray.join(separator),
      label: labelArray.join(separator)
    }
  }

  const parser: SelectorValueParser = value => {
    return value ? (value as string).split(separator) : []
  }

  function onCallApi() {
    showPicker({
      title: 'Picker',
      options: multiOptions
    }).then(res => {
      console.log('success', res)
      if (res.cancel) {
        showToast('取消了')
      } else {
        showToast(`选择了 ${res.detail.label}`)
      }
    })
  }

  function onChange(res: SelectorModelValue) {
    console.log('change', res)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="单列">
          <TaPicker options={options} onChange={onChange} />
        </TaCell>
        <TaCell label="多列">
          <TaPicker options={multiOptions} onChange={onChange} />
        </TaCell>
        <TaCell label="级联">
          <TaPicker options={cascadeOptions} onChange={onChange} />
        </TaCell>
        <TaCell label="地区">
          <TaPicker
            options={regionOptions}
            fieldNames={{ value: 'label' }}
            onChange={onChange}
          />
        </TaCell>
        <TaCell label="formatter/parser">
          <TaPicker
            value={formatValue}
            formatter={formatter}
            parser={parser}
            options={multiOptions}
            onChange={onChange}
          ></TaPicker>
        </TaCell>
        <TaCell label="禁用">
          <TaPicker
            value={disableValue}
            options={multiOptions}
            disabled
            onChange={onChange}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="API">
        <TaCell label="showPicker" isLink onClick={() => onCallApi()} />
      </TaGroup>
    </>
  )
}
