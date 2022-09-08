import { cascadeOptions, regionOptions } from '../Picker/data'
import {
  showToast,
  showCascader,
  SelectorModelValue,
  SelectorValueFormatter,
  SelectorValueParser,
  AkGroup,
  AkCell,
  AkCascader
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
      <AkGroup title="基础用法">
        <AkCell label="家电">
          <AkCascader
            options={cascadeOptions}
            onChange={onChange}
            placeholder={placeholder}
          />
        </AkCell>
        <AkCell label="地区">
          <AkCascader
            options={regionOptions}
            fieldNames={{ value: 'label' }}
            onChange={onChange}
          />
        </AkCell>
        <AkCell label="formatter/parser">
          <AkCascader
            value={formatValue}
            formatter={formatter}
            parser={parser}
            options={cascadeOptions}
            onChange={onChange}
          ></AkCascader>
        </AkCell>
        <AkCell label="禁用">
          <AkCascader
            value={disableValue}
            options={cascadeOptions}
            disabled
            onChange={onChange}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="API">
        <AkCell label="showCascader" isLink onClick={() => onCallApi()} />
      </AkGroup>
    </>
  )
}
