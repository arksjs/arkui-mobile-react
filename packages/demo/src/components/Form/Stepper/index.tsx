import { AkStepper, AkCell, AkGroup, showToast } from '@/index'

export default function ExpStepper() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="默认">
          <AkStepper />
        </AkCell>
        <AkCell label="步长设置">
          <AkStepper step="2" />
        </AkCell>
        <AkCell label="限制输入范围">
          <AkStepper min="5" max="10" />
        </AkCell>
        <AkCell label="限制输入整数">
          <AkStepper allowDecimal={false} />
        </AkCell>
        <AkCell label="禁用状态">
          <AkStepper disabled />
        </AkCell>
        <AkCell label="禁用输入框">
          <AkStepper disabledInput />
        </AkCell>
        <AkCell label="固定小数位">
          <AkStepper decimalLength="1" step="0.2" />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="onChange">
          <AkStepper onChange={value => showToast(`值改变为：${value}`)} />
        </AkCell>
        <AkCell label="onFocus/onBlur/onPlusClick/onMinusClick">
          <AkStepper
            onPlusClick={() => showToast('点击 + 按钮')}
            onMinusClick={() => showToast('点击 - 按钮')}
            onFocus={() => showToast('聚焦 focus')}
            onBlur={() => showToast('失焦 blur')}
          />
        </AkCell>
      </AkGroup>
    </>
  )
}
