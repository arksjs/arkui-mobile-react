import { TaPagination, TaGroup, showToast } from '@/index'
import { useState } from 'react'

const total = 5

export default function ExpPagination() {
  const [current, setCurrent] = useState(2)

  return (
    <>
      <TaGroup title="基础用法">
        <TaPagination current={current} total={total} onChange={setCurrent} />
      </TaGroup>
      <TaGroup title="自定义展示">
        <TaPagination total={total}>
          {({ current }) => <>{`第 ${current} 页`}</>}
        </TaPagination>
      </TaGroup>
      <TaGroup title="renderPrev & renderNext">
        <TaPagination
          total={total}
          renderPrev={() => <>上一页</>}
          renderNext={() => <>下一页</>}
        />
      </TaGroup>
      <TaGroup title="CSS height=32px">
        <TaPagination style={{ height: '32px' }} total={total} />
      </TaGroup>
      <TaGroup title="事件监听 change">
        <TaPagination
          total={total}
          onChange={current => {
            showToast(`跳转到第 ${current} 页`)
          }}
        />
      </TaGroup>
    </>
  )
}
