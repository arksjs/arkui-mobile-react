import { forwardRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { PopMenuEmits, PopMenuProps } from './types'
import type { FRFC } from '../helpers'
import type { PopupRef } from '../popup/types'
import { usePopover } from '../Popover/use-popover'
import { getItemClasses, getOptions } from './util'
import { Icon } from '../Icon'

const TaPopMenu: FRFC<PopupRef, PopMenuProps & PopMenuEmits> = (
  { options = [], ...props },
  ref
) => {
  const { customConfirm, PopoverWrapper } = usePopover(props, ref)

  function onItemClick(index: number) {
    const item = options[index]

    if (!item || item.disabled) {
      return
    }

    customConfirm({
      index,
      item: {
        name: item.name
      }
    })
  }

  const renderOptions = useMemo(
    () => (
      <ul className="ta-pop-menu_list">
        {getOptions(options).map((item, index) => (
          <li
            className={classNames(getItemClasses(item))}
            key={index}
            onClick={() => onItemClick(index)}
          >
            <div className="ta-pop-menu_item-inner">
              {item.icon ? <Icon icon={item.icon} /> : <></>}
              <span>{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    ),
    [options]
  )

  return createPortal(
    <PopoverWrapper className="ta-pop-menu">{renderOptions}</PopoverWrapper>,
    document.body
  )
}

export default forwardRef(TaPopMenu)
