import { AkSwitch, AkCell, AkGroup, showToast } from '@/index'

export default function ExpSwitch() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="开关">
          <AkSwitch />
        </AkCell>
      </AkGroup>
      <AkGroup title="自定义颜色/大小">
        <AkCell label="红色">
          <AkSwitch activeColor="#8b1721" color="#d79996" />
        </AkCell>
        <AkCell label="40px">
          <AkSwitch size="40" />
        </AkCell>
      </AkGroup>
      <AkGroup title="禁用">
        <AkCell label="关">
          <AkSwitch disabled />
        </AkCell>
        <AkCell label="开">
          <AkSwitch disabled value={true} />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="change">
          <AkSwitch
            v-model="value"
            onChange={value => showToast(value ? '开' : '关')}
          />
        </AkCell>
      </AkGroup>
    </>
  )
}
