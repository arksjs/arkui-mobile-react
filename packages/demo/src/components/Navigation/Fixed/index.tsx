import { TaFixed, TaButton, TaGroup } from '@/index'
import { useState } from 'react'

export default function ExpFixed() {
  const [fixed, setFixed] = useState(true)

  return (
    <>
      <TaGroup title="基本用法">
        <TaFixed fixed={fixed}>
          <div className="exp-fixed-box">
            <TaButton type="primary" onClick={() => setFixed(!fixed)}>
              {fixed ? '点击取消固定' : '点击固定布局'}
            </TaButton>
          </div>
        </TaFixed>
      </TaGroup>
    </>
  )
}
