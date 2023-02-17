import type { UIEventHandler } from 'react'
import classNames from 'classnames'
import type { ColRow } from './types'
import type { VFC } from '../helpers'
import { VirtualList } from '../VirtualList'
import { DEFAULT_ITEM_HEIGHT } from './util'

const TaPickerViewCol: VFC<{
  list: ColRow[]
  listIndex: number
  onListScroll: ($el: HTMLElement, index: number) => void
}> = ({ list, listIndex, onListScroll }) => {
  const onScroll: UIEventHandler<HTMLDivElement> = e => {
    onListScroll(e.currentTarget as HTMLElement, listIndex)
  }

  function getItemSize(index: number) {
    if (list.length === 1) {
      return DEFAULT_ITEM_HEIGHT * 5
    }

    if (index === 0 || index >= list.length - 1) {
      return DEFAULT_ITEM_HEIGHT * 3
    }

    return DEFAULT_ITEM_HEIGHT
  }

  return (
    <div className="ta-picker-view_col">
      <VirtualList
        className="ta-picker-view_list"
        ids={list.map(v => v.value)}
        data-index={listIndex}
        itemSize={getItemSize}
        onScroll={onScroll}
        render={({ index }) => {
          const item = list[index]
          const itemClasses = classNames('ta-picker-view_item', {
            selected: item.selected,
            disabled: item.disabled
          })

          return (
            <div className={itemClasses} key={item.value} data-index={index}>
              {item.label}
            </div>
          )
        }}
      ></VirtualList>
    </div>
  )
}

export default TaPickerViewCol
