import { AkFixed, AkButton, AkGroup } from '@/index'
import { useState } from 'react'

export default function ExpFixed() {
  const [fixed, setFixed] = useState(true)

  return (
    <>
      <AkGroup title="基本用法">
        <AkFixed fixed={fixed}>
          <div className="exp-fixed-box">
            <AkButton type="primary" onClick={() => setFixed(!fixed)}>
              {fixed ? '点击取消固定' : '点击固定布局'}
            </AkButton>
          </div>
        </AkFixed>
      </AkGroup>
    </>
  )
}
