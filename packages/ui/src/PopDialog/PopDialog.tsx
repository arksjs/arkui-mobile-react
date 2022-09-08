import { createPortal } from 'react-dom'
import type { PopDialogEmits, PopDialogProps } from './types'
import type { FRFC } from '../helpers/types'
import type { PopupRef } from '../popup/types'
import { forwardRef } from 'react'
import { usePopover } from '../Popover/use-popover'
import { Button } from '../Button'
import { useLocale } from '../ConfigProvider/context'

const AkPopDialog: FRFC<PopupRef, PopDialogProps & PopDialogEmits> = (
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
    <PopoverWrapper className="ak-pop-dialog">
      <div className="ak-pop-dialog_body">
        {props.children || <div className="ak-popover_text">{content}</div>}
      </div>
      <div className="ak-pop-dialog_footer ak-horizontal-hairline">
        <Button.Group
          className="ak-pop-dialog_footer-inner"
          pattern="borderless"
          size="middle"
        >
          {showCancel ? (
            <Button
              className="ak-dialog_button"
              type="default"
              onClick={onCancelClick}
            >
              {props.cancelText || locale.popDialogCancelText}
            </Button>
          ) : (
            <></>
          )}
          <Button
            className="ak-dialog_button"
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

export default forwardRef(AkPopDialog)
