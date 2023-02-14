import { forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames'
import type { DialogEmits, DialogProps } from './types'
import type { FRFC } from '../helpers'
import { useLocale } from '../ConfigProvider/context'
import type { PopupRef } from '../popup/types'
import { Button, ButtonGroup } from '../Button'
import { Modal } from '../Modal'

const TaDialog: FRFC<PopupRef, DialogProps & DialogEmits> = (
  { showCancel = true, ...props },
  ref
) => {
  const { locale } = useLocale()
  const popupRef = useRef<PopupRef>(null)

  const classes = classNames('ta-dialog', props.className)

  function onConfirmClick() {
    popupRef.current?.customConfirm({})
  }

  function onCancelClick() {
    popupRef.current?.onCancelClick()
  }

  useImperativeHandle(ref, () => popupRef.current as PopupRef, [])

  return (
    <Modal
      ref={popupRef}
      className={classes}
      showClose={false}
      maskClosable={props.maskClosable}
      visible={props.visible}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      onVisibleStateChange={props.onVisibleStateChange}
      onUpdateVisible={props.onUpdateVisible}
    >
      {props.title ? (
        <div className="ta-dialog_header">{props.title}</div>
      ) : (
        <></>
      )}
      <div className="ta-dialog_content">
        {props.content ? (
          <div className="ta-dialog_content-text">{props.content}</div>
        ) : (
          props.children
        )}
      </div>
      <div className="ta-dialog_footer ta-horizontal-hairline">
        <ButtonGroup className="ta-dialog_footer-inner" pattern="borderless">
          {showCancel ? (
            <Button
              className="ta-dialog_button"
              type="default"
              onClick={onCancelClick}
            >
              {props.cancelText || locale.dialogCancelText}
            </Button>
          ) : (
            <></>
          )}
          <Button
            className="ta-dialog_button"
            type="primary"
            onClick={onConfirmClick}
          >
            {props.confirmText || locale.dialogConfirmText}
          </Button>
        </ButtonGroup>
      </div>
    </Modal>
  )
}

export default forwardRef(TaDialog)
