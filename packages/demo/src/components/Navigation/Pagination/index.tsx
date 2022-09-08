import { AkPagination, AkGroup, showToast } from '@/index'
import { useState } from 'react'

const total = 5

export default function ExpPagination() {
  const [current, setCurrent] = useState(2)

  return (
    <>
      <AkGroup title="基础用法">
        <AkPagination current={current} total={total} onChange={setCurrent} />
      </AkGroup>
      <AkGroup title="自定义展示">
        <AkPagination total={total}>
          {({ current }) => <>{`第 ${current} 页`}</>}
        </AkPagination>
      </AkGroup>
      <AkGroup title="renderPrev & renderNext">
        <AkPagination
          total={total}
          renderPrev={() => <>上一页</>}
          renderNext={() => <>下一页</>}
        />
      </AkGroup>
      <AkGroup title="CSS height=32px">
        <AkPagination style={{ height: '32px' }} total={total} />
      </AkGroup>
      <AkGroup title="事件监听 change">
        <AkPagination
          total={total}
          onChange={current => {
            showToast(`跳转到第 ${current} 页`)
          }}
        />
      </AkGroup>
    </>
  )
}
