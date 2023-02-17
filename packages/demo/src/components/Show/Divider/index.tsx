import { TaDivider, TaGroup } from '@/index'

export default function ExpDivider() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaDivider />
      </TaGroup>
      <TaGroup title="带文本">
        <TaDivider title="文本" />
      </TaGroup>
      <TaGroup title="虚线">
        <TaDivider title="文本" dashed />
      </TaGroup>
      <TaGroup title="自定义颜色">
        <TaDivider className="exp-divider-custom-color" title="蓝色" />
      </TaGroup>
    </>
  )
}
