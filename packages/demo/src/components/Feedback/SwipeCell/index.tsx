import {
  TaSwipeCell,
  TaCell,
  TaGroup,
  showToast,
  SwipeCellButtonOption,
  SwipeCellOnButtonClick
} from '@/index'

const buttons: SwipeCellButtonOption[] = [
  {
    text: '加入收藏',
    type: 'warning'
  },
  {
    text: '删除',
    type: 'danger'
  }
]

export default function ExpSwipeCell() {
  const onButtonClick: SwipeCellOnButtonClick = e => {
    console.log('onButtonClick', e)
    showToast(`点击了 ${e.item.text}`)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaSwipeCell buttons={buttons}>
          <TaCell label="单元格" content="向左划"></TaCell>
        </TaSwipeCell>
      </TaGroup>
      <TaGroup title=" 事件监听">
        <TaSwipeCell buttons={buttons} onButtonClick={onButtonClick}>
          <TaCell label="单元格" content="向左划"></TaCell>
        </TaSwipeCell>
      </TaGroup>
    </>
  )
}
