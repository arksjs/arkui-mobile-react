import classNames from 'classnames'
import type { DialogEmits, DialogProps } from './types'
import type { FRFC } from '../helpers/types'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useLocale } from '../ConfigProvider/context'
import type { PopupRef } from '../popup/types'
import { Button, ButtonGroup } from '../Button'
import { Modal } from '../Modal'

const AkDialog: FRFC<PopupRef, DialogProps & DialogEmits> = (
  { showCancel = true, ...props },
  ref
) => {
  const { locale } = useLocale()
  const popupRef = useRef<PopupRef>(null)

  const classes = classNames('ak-dialog', props.className)

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
        <div className="ak-dialog_header">{props.title}</div>
      ) : (
        <></>
      )}
      <div className="ak-dialog_content">
        {props.content ? (
          <div className="ak-dialog_content-text">{props.content}</div>
        ) : (
          props.children
        )}
      </div>
      <div className="ak-dialog_footer ak-horizontal-hairline">
        <ButtonGroup className="ak-dialog_footer-inner" pattern="borderless">
          {showCancel ? (
            <Button
              className="ak-dialog_button"
              type="default"
              onClick={onCancelClick}
            >
              {props.cancelText || locale.dialogCancelText}
            </Button>
          ) : (
            <></>
          )}
          <Button
            className="ak-dialog_button"
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

export default forwardRef(AkDialog)
