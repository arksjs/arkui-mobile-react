import { TaCheckbox, TaCell, TaGroup, showToast } from '@/index'

const groups = ['A', 'B', 'C']

export default function ExpCheckbox() {
  function renderItems() {
    return groups.map(item => (
      <TaCheckbox key={item} checkedValue={item}>
        {item}
      </TaCheckbox>
    ))
  }

  function renderCellItems() {
    return groups.map(item => (
      <TaCell
        key={item}
        label={'单元格 ' + item}
        renderIcon={() => <TaCheckbox circle checkedValue={item} />}
      />
    ))
  }

  function onChange(value: (string | number)[]) {
    console.log('change', value)
    showToast(`Change Value: ${value}`)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="默认">
          <TaCheckbox />
        </TaCell>
        <TaCell label="带文案">
          <TaCheckbox>勾选</TaCheckbox>
        </TaCell>
        <TaCell label="默认激活">
          <TaCheckbox checked>勾选</TaCheckbox>
        </TaCell>
        <TaCell label="自定义颜色">
          <TaCheckbox checked activeColor="#8b1721">
            勾选
          </TaCheckbox>
        </TaCell>
        <TaCell label="禁用">
          <TaCheckbox disabled>勾选</TaCheckbox>
        </TaCell>
      </TaGroup>
      <TaGroup title="CheckboxGroup">
        <TaCell label="默认">
          <TaCheckbox.Group>{renderItems()}</TaCheckbox.Group>
        </TaCell>
        <TaCell label="内联">
          <TaCheckbox.Group inline activeColor="#8b1721">
            {renderItems()}
          </TaCheckbox.Group>
        </TaCell>
        <TaCell label="禁用">
          <TaCheckbox.Group value={['A']} disabled>
            {renderItems()}
          </TaCheckbox.Group>
        </TaCell>
        <TaCell label="通过options设置">
          <TaCheckbox.Group options={groups} />
        </TaCell>
      </TaGroup>
      <TaGroup title="CheckboxGroup + Cell">
        <TaCheckbox.Group>{renderCellItems()}</TaCheckbox.Group>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="change">
          <TaCheckbox.Group onChange={onChange}>
            <TaCheckbox checkedValue="A">A</TaCheckbox>
            <TaCheckbox checkedValue="B">B</TaCheckbox>
            <TaCheckbox checkedValue="C">C</TaCheckbox>
          </TaCheckbox.Group>
        </TaCell>
      </TaGroup>
    </>
  )
}
