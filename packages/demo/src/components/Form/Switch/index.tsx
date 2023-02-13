import { TaSwitch, TaCell, TaGroup, showToast } from '@/index'

export default function ExpSwitch() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="开关">
          <TaSwitch />
        </TaCell>
      </TaGroup>
      <TaGroup title="自定义颜色/大小">
        <TaCell label="红色">
          <TaSwitch activeColor="#8b1721" color="#d79996" />
        </TaCell>
        <TaCell label="40px">
          <TaSwitch size="40" />
        </TaCell>
      </TaGroup>
      <TaGroup title="禁用">
        <TaCell label="关">
          <TaSwitch disabled />
        </TaCell>
        <TaCell label="开">
          <TaSwitch disabled value={true} />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="change">
          <TaSwitch
            v-model="value"
            onChange={value => showToast(value ? '开' : '关')}
          />
        </TaCell>
      </TaGroup>
    </>
  )
}
