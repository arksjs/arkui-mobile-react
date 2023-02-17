import { TaRate, TaCell, TaGroup, showToast } from '@/index'

export default function ExpRate() {
  function onChange(value: number) {
    console.log('change', value)
    showToast(`Value: ${value}`)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="默认">
          <TaRate />
        </TaCell>
        <TaCell label="value=3">
          <TaRate value="3" />
        </TaCell>
      </TaGroup>
      <TaGroup title="风格">
        <TaCell label="爱心 icon='HeartOutlined' activeIcon='HeartFilled'">
          <TaRate icon="HeartOutlined" activeIcon="HeartFilled" value="3" />
        </TaCell>
        <TaCell label="换色 activeColor='#F5A511'">
          <TaRate value="3" activeColor="#F5A511" />
        </TaCell>
        <TaCell label="变小 size='16px'">
          <TaRate value="3" size="16" />
        </TaCell>
      </TaGroup>
      <TaGroup title="自定义数量">
        <TaCell label="count=8">
          <TaRate count="8" />
        </TaCell>
      </TaGroup>
      <TaGroup title="半星">
        <TaCell label="value=2.5">
          <TaRate allowHalf value={2.5} />
        </TaCell>
      </TaGroup>
      <TaGroup title="状态">
        <TaCell label="只读">
          <TaRate readonly value="3" />
        </TaCell>
        <TaCell label="禁用">
          <TaRate disabled value="3" />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="change">
          <TaRate allow-half onChange={onChange} />
        </TaCell>
      </TaGroup>
    </>
  )
}
