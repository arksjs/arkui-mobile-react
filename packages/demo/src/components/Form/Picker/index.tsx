import { cascadeOptions, multiOptions, options, regionOptions } from './data'
import {
  showToast,
  showPicker,
  SelectorModelValue,
  SelectorValueFormatter,
  SelectorValueParser,
  AkGroup,
  AkCell,
  AkPicker
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
      <AkGroup title="基础用法">
        <AkCell label="单列">
          <AkPicker options={options} onChange={onChange} />
        </AkCell>
        <AkCell label="多列">
          <AkPicker options={multiOptions} onChange={onChange} />
        </AkCell>
        <AkCell label="级联">
          <AkPicker options={cascadeOptions} onChange={onChange} />
        </AkCell>
        <AkCell label="地区">
          <AkPicker
            options={regionOptions}
            fieldNames={{ value: 'label' }}
            onChange={onChange}
          />
        </AkCell>
        <AkCell label="formatter/parser">
          <AkPicker
            value={formatValue}
            formatter={formatter}
            parser={parser}
            options={multiOptions}
            onChange={onChange}
          ></AkPicker>
        </AkCell>
        <AkCell label="禁用">
          <AkPicker
            value={disableValue}
            options={multiOptions}
            disabled
            onChange={onChange}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="API">
        <AkCell label="showPicker" isLink onClick={() => onCallApi()} />
      </AkGroup>
    </>
  )
}
