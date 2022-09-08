import { AkDivider, AkGroup } from '@/index'

export default function ExpDivider() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkDivider />
      </AkGroup>
      <AkGroup title="带文本">
        <AkDivider title="文本" />
      </AkGroup>
      <AkGroup title="虚线">
        <AkDivider title="文本" dashed />
      </AkGroup>
      <AkGroup title="自定义颜色">
        <AkDivider className="exp-divider-custom-color" title="蓝色" />
      </AkGroup>
    </>
  )
}
