import { AkRate, AkCell, AkGroup, showToast } from '@/index'

export default function ExpRate() {
  function onChange(value: number) {
    console.log('change', value)
    showToast(`Value: ${value}`)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="默认">
          <AkRate />
        </AkCell>
        <AkCell label="value=3">
          <AkRate value="3" />
        </AkCell>
      </AkGroup>
      <AkGroup title="风格">
        <AkCell label="爱心 icon='HeartOutlined' activeIcon='HeartFilled'">
          <AkRate icon="HeartOutlined" activeIcon="HeartFilled" value="3" />
        </AkCell>
        <AkCell label="换色 activeColor='#F5A511'">
          <AkRate value="3" activeColor="#F5A511" />
        </AkCell>
        <AkCell label="变小 size='16px'">
          <AkRate value="3" size="16" />
        </AkCell>
      </AkGroup>
      <AkGroup title="自定义数量">
        <AkCell label="count=8">
          <AkRate count="8" />
        </AkCell>
      </AkGroup>
      <AkGroup title="半星">
        <AkCell label="value=2.5">
          <AkRate allowHalf value={2.5} />
        </AkCell>
      </AkGroup>
      <AkGroup title="状态">
        <AkCell label="只读">
          <AkRate readonly value="3" />
        </AkCell>
        <AkCell label="禁用">
          <AkRate disabled value="3" />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="change">
          <AkRate allow-half onChange={onChange} />
        </AkCell>
      </AkGroup>
    </>
  )
}
