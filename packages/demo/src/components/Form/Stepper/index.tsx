import { TaStepper, TaCell, TaGroup, showToast } from '@/index'

export default function ExpStepper() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="默认">
          <TaStepper />
        </TaCell>
        <TaCell label="步长设置">
          <TaStepper step="2" />
        </TaCell>
        <TaCell label="限制输入范围">
          <TaStepper min="5" max="10" />
        </TaCell>
        <TaCell label="限制输入整数">
          <TaStepper decimalLength="0" />
        </TaCell>
        <TaCell label="禁用状态">
          <TaStepper disabled />
        </TaCell>
        <TaCell label="禁用输入框">
          <TaStepper disabledInput />
        </TaCell>
        <TaCell label="固定小数位">
          <TaStepper decimalLength="1" step="0.2" />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="onChange">
          <TaStepper onChange={value => showToast(`值改变为：${value}`)} />
        </TaCell>
        <TaCell label="onFocus/onBlur/onPlusClick/onMinusClick">
          <TaStepper
            onPlusClick={() => showToast('点击 + 按钮')}
            onMinusClick={() => showToast('点击 - 按钮')}
            onFocus={() => showToast('聚焦 focus')}
            onBlur={() => showToast('失焦 blur')}
          />
        </TaCell>
      </TaGroup>
    </>
  )
}
