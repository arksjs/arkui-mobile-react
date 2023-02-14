import { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import type { PopoverEmits, PopoverProps } from './types'
import type { FRFC } from '../helpers'
import type { PopupRef } from '../popup/types'
import { usePopover } from './use-popover'

const TaPopover: FRFC<PopupRef, PopoverProps & PopoverEmits> = (
  { content = '', ...props },
  ref
) => {
  const { PopoverWrapper } = usePopover(props, ref)

  return createPortal(
    <PopoverWrapper>
      {props.children || <div className="ta-popover_text">{content}</div>}
    </PopoverWrapper>,
    document.body
  )
}

export default forwardRef(TaPopover)
