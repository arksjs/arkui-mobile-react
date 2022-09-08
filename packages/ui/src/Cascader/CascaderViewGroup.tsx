import classNames from 'classnames'
import type { VFC } from '../helpers/types'
import { VirtualList } from '../VirtualList'
import { Icon } from '../Icon'
import CheckOutlined from '../Icon/icons/CheckOutlined'
import type { ColRow } from '../Picker/types'

const AkCascaderViewGroup: VFC<{
  tabIndex: number
  list: ColRow[]
  listIndex: number
  onItemClick: (item: ColRow) => void
}> = ({ tabIndex, list, listIndex, onItemClick }) => {
  return (
    <div
      className="ak-cascader-view_group ak-vertical-hairline"
      style={{ zIndex: tabIndex == listIndex ? 2 : 1 }}
    >
      <VirtualList
        className="ak-cascader-view_list"
        ids={list.map(v => v.value)}
        data-index={listIndex}
        itemSize={44}
        render={({ index }) => {
          const item = list[index]
          const itemClasses = classNames(
            'ak-cascader-view_item',
            'ak-horizontal-hairline',
            {
              selected: item.selected,
              disabled: item.disabled
            }
          )

          return (
            <div
              className={itemClasses}
              key={item.value}
              data-index={index}
              onClick={() => onItemClick(item)}
            >
              <span className="ak-cascader-view_item-text">{item.label}</span>
              {item.selected ? <Icon icon={CheckOutlined} /> : <></>}
            </div>
          )
        }}
      />
    </div>
  )
}

export default AkCascaderViewGroup
