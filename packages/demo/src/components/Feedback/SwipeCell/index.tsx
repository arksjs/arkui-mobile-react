import {
  AkSwipeCell,
  AkCell,
  AkGroup,
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
      <AkGroup title="基础用法">
        <AkSwipeCell buttons={buttons}>
          <AkCell label="单元格" content="向左划"></AkCell>
        </AkSwipeCell>
      </AkGroup>
      <AkGroup title=" 事件监听">
        <AkSwipeCell buttons={buttons} onButtonClick={onButtonClick}>
          <AkCell label="单元格" content="向左划"></AkCell>
        </AkSwipeCell>
      </AkGroup>
    </>
  )
}
