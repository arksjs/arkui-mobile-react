import { AkCheckbox, AkCell, AkGroup, showToast } from '@/index'

const groups = ['A', 'B', 'C']

export default function ExpCheckbox() {
  function renderItems() {
    return groups.map(item => (
      <AkCheckbox key={item} value={item}>
        {item}
      </AkCheckbox>
    ))
  }

  function renderCellItems() {
    return groups.map(item => (
      <AkCell
        key={item}
        label={'单元格 ' + item}
        renderIcon={() => <AkCheckbox circle value={item} />}
      />
    ))
  }

  function onChange(value: (string | number)[]) {
    console.log('change', value)
    showToast(`Change Value: ${value}`)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="默认">
          <AkCheckbox />
        </AkCell>
        <AkCell label="带文案">
          <AkCheckbox>勾选</AkCheckbox>
        </AkCell>
        <AkCell label="默认激活">
          <AkCheckbox checked>勾选</AkCheckbox>
        </AkCell>
        <AkCell label="自定义颜色">
          <AkCheckbox checked activeColor="#8b1721">
            勾选
          </AkCheckbox>
        </AkCell>
        <AkCell label="禁用">
          <AkCheckbox disabled>勾选</AkCheckbox>
        </AkCell>
      </AkGroup>
      <AkGroup title="CheckboxGroup">
        <AkCell label="默认">
          <AkCheckbox.Group>{renderItems()}</AkCheckbox.Group>
        </AkCell>
        <AkCell label="内联">
          <AkCheckbox.Group inline activeColor="#8b1721">
            {renderItems()}
          </AkCheckbox.Group>
        </AkCell>
        <AkCell label="禁用">
          <AkCheckbox.Group value={['A']} disabled>
            {renderItems()}
          </AkCheckbox.Group>
        </AkCell>
        <AkCell label="通过options设置">
          <AkCheckbox.Group options={groups} />
        </AkCell>
      </AkGroup>
      <AkGroup title="CheckboxGroup + Cell">
        <AkCheckbox.Group>{renderCellItems()}</AkCheckbox.Group>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="change">
          <AkCheckbox.Group onChange={onChange}>
            <AkCheckbox value="A">A</AkCheckbox>
            <AkCheckbox value="B">B</AkCheckbox>
            <AkCheckbox value="C">C</AkCheckbox>
          </AkCheckbox.Group>
        </AkCell>
      </AkGroup>
    </>
  )
}
