import { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import type { PopDialogEmits, PopDialogProps } from './types'
import type { FRFC } from '../helpers'
import type { PopupRef } from '../popup/types'
import { usePopover } from '../Popover/use-popover'
import { Button } from '../Button'
import { useLocale } from '../ConfigProvider/context'

const TaPopDialog: FRFC<PopupRef, PopDialogProps & PopDialogEmits> = (
  { content = '', showCancel = true, ...props },
  ref
) => {
  const { locale } = useLocale()

  const { customConfirm, onCancelClick, PopoverWrapper } = usePopover(
    props,
    ref
  )

  function onConfirmClick() {
    customConfirm({})
  }

  return createPortal(
    <PopoverWrapper className="ta-pop-dialog">
      <div className="ta-pop-dialog_body">
        {props.children || <div className="ta-popover_text">{content}</div>}
      </div>
      <div className="ta-pop-dialog_footer ta-horizontal-hairline">
        <Button.Group
          className="ta-pop-dialog_footer-inner"
          pattern="borderless"
          size="middle"
        >
          {showCancel ? (
            <Button
              className="ta-dialog_button"
              type="default"
              onClick={onCancelClick}
            >
              {props.cancelText || locale.popDialogCancelText}
            </Button>
          ) : (
            <></>
          )}
          <Button
            className="ta-dialog_button"
            type="primary"
            onClick={onConfirmClick}
          >
            {props.confirmText || locale.popDialogConfirmText}
          </Button>
        </Button.Group>
      </div>
    </PopoverWrapper>,
    document.body
  )
}

export default forwardRef(TaPopDialog)
