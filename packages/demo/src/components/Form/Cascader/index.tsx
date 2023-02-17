import { cascadeOptions, regionOptions } from '../Picker/data'
import {
  showToast,
  showCascader,
  SelectorModelValue,
  SelectorValueFormatter,
  SelectorValueParser,
  TaGroup,
  TaCell,
  TaCascader
} from '@/index'
import { useState } from 'react'

const separator = '-'
const placeholder = '选择家电'

export default function ExpCascader() {
  const [disableValue] = useState(['bingxiang', 'sanmen'])
  const [formatValue] = useState(`bingxiang${separator}duikaimen`)

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
    showCascader({
      options: cascadeOptions
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
        <TaCell label="家电">
          <TaCascader
            options={cascadeOptions}
            onChange={onChange}
            placeholder={placeholder}
          />
        </TaCell>
        <TaCell label="地区">
          <TaCascader
            options={regionOptions}
            fieldNames={{ value: 'label' }}
            onChange={onChange}
          />
        </TaCell>
        <TaCell label="formatter/parser">
          <TaCascader
            value={formatValue}
            formatter={formatter}
            parser={parser}
            options={cascadeOptions}
            onChange={onChange}
          ></TaCascader>
        </TaCell>
        <TaCell label="禁用">
          <TaCascader
            value={disableValue}
            options={cascadeOptions}
            disabled
            onChange={onChange}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="API">
        <TaCell label="showCascader" isLink onClick={() => onCallApi()} />
      </TaGroup>
    </>
  )
}
