import { TaButton, TaCell, TaGroup } from '@/index'
import { useState } from 'react'

export default function ExpGroup() {
  const [strongHeader, setStrongHeader] = useState(true)

  return (
    <>
      <TaGroup title="基础风格">
        <TaCell
          label="单元格"
          content="内容"
          description="网站大部分组件都由这个组件进行分组"
        />
        <TaCell label="单元格" content="内容" />
        <TaCell label="单元格" content="内容" />
        <TaCell label="单元格" content="内容" />
      </TaGroup>
      <TaGroup title="基础风格" renderHeader={() => <>右侧文案</>}>
        <TaCell label="单元格" content="内容" />
        <TaCell label="单元格" content="内容" />
        <TaCell label="单元格" content="内容" />
        <TaCell label="单元格" content="内容" />
      </TaGroup>
      <TaGroup
        title="强化标题栏"
        renderHeader={() => <TaButton size="small"> 查看更多 </TaButton>}
        strongHeader={strongHeader}
      >
        <TaCell label="单元格" content="内容" />
        <TaCell label="单元格" content="内容" />
        <TaCell label="单元格" content="内容" />
        <TaCell label="单元格" content="内容" />
      </TaGroup>
    </>
  )
}
