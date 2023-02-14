import { TaRadio, TaCell, TaGroup, showToast } from '@/index'

const groups = [
  { value: 'man', label: '男' },
  { value: 'woman', label: '女' }
]

export default function ExpRadio() {
  function renderItems() {
    return groups.map(item => (
      <TaRadio key={item.value} checkedValue={item.value}>
        {item.label}
      </TaRadio>
    ))
  }

  function onChange(value: string | number) {
    console.log('change', value)
    showToast(`Change Value: ${value}`)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="默认">
          <TaRadio />
        </TaCell>
        <TaCell label="带文案">
          <TaRadio>勾选</TaRadio>
        </TaCell>
        <TaCell label="默认激活">
          <TaRadio checked>勾选</TaRadio>
        </TaCell>
        <TaCell label="自定义颜色">
          <TaRadio checked activeColor="#8b1721">
            勾选
          </TaRadio>
        </TaCell>
        <TaCell label="禁用">
          <TaRadio disabled>勾选</TaRadio>
        </TaCell>
      </TaGroup>
      <TaGroup title="CheckboxGroup">
        <TaCell label="默认">
          <TaRadio.Group>{renderItems()}</TaRadio.Group>
        </TaCell>
        <TaCell label="内联">
          <TaRadio.Group inline value="woman" activeColor="#8b1721">
            {renderItems()}
          </TaRadio.Group>
        </TaCell>
        <TaCell label="禁用">
          <TaRadio.Group value="man" disabled>
            {renderItems()}
          </TaRadio.Group>
        </TaCell>
        <TaCell label="通过options设置">
          <TaRadio.Group options={groups} />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="change">
          <TaRadio.Group onChange={onChange}>{renderItems()}</TaRadio.Group>
        </TaCell>
      </TaGroup>
    </>
  )
}
