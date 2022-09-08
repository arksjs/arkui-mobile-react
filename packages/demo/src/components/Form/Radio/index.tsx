import { AkRadio, AkCell, AkGroup, showToast } from '@/index'

const groups = [
  { value: 'man', label: '男' },
  { value: 'woman', label: '女' }
]

export default function ExpRadio() {
  function renderItems() {
    return groups.map(item => (
      <AkRadio key={item.value} value={item.value}>
        {item.label}
      </AkRadio>
    ))
  }

  function onChange(value: string | number) {
    console.log('change', value)
    showToast(`Change Value: ${value}`)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="默认">
          <AkRadio />
        </AkCell>
        <AkCell label="带文案">
          <AkRadio>勾选</AkRadio>
        </AkCell>
        <AkCell label="默认激活">
          <AkRadio checked>勾选</AkRadio>
        </AkCell>
        <AkCell label="自定义颜色">
          <AkRadio checked activeColor="#8b1721">
            勾选
          </AkRadio>
        </AkCell>
        <AkCell label="禁用">
          <AkRadio disabled>勾选</AkRadio>
        </AkCell>
      </AkGroup>
      <AkGroup title="CheckboxGroup">
        <AkCell label="默认">
          <AkRadio.Group>{renderItems()}</AkRadio.Group>
        </AkCell>
        <AkCell label="内联">
          <AkRadio.Group inline value="woman" activeColor="#8b1721">
            {renderItems()}
          </AkRadio.Group>
        </AkCell>
        <AkCell label="禁用">
          <AkRadio.Group value="man" disabled>
            {renderItems()}
          </AkRadio.Group>
        </AkCell>
        <AkCell label="通过options设置">
          <AkRadio.Group options={groups} />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="change">
          <AkRadio.Group onChange={onChange}>{renderItems()}</AkRadio.Group>
        </AkCell>
      </AkGroup>
    </>
  )
}
