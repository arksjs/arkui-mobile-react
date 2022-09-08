import { AkButton, AkCell, AkGroup } from '@/index'
import { useState } from 'react'

export default function ExpGroup() {
  const [strongHeader, setStrongHeader] = useState(true)

  return (
    <>
      <AkGroup title="基础风格">
        <AkCell
          label="单元格"
          content="内容"
          description="网站大部分组件都由这个组件进行分组"
        />
        <AkCell label="单元格" content="内容" />
        <AkCell label="单元格" content="内容" />
        <AkCell label="单元格" content="内容" />
      </AkGroup>
      <AkGroup title="基础风格" renderHeader={() => <>右侧文案</>}>
        <AkCell label="单元格" content="内容" />
        <AkCell label="单元格" content="内容" />
        <AkCell label="单元格" content="内容" />
        <AkCell label="单元格" content="内容" />
      </AkGroup>
      <AkGroup
        title="强化标题栏"
        renderHeader={() => <AkButton size="small"> 查看更多 </AkButton>}
        strongHeader={strongHeader}
      >
        <AkCell label="单元格" content="内容" />
        <AkCell label="单元格" content="内容" />
        <AkCell label="单元格" content="内容" />
        <AkCell label="单元格" content="内容" />
      </AkGroup>
    </>
  )
}
