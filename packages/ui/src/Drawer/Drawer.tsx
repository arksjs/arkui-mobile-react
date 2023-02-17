import { forwardRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { DrawerEmits, DrawerProps } from './types'
import type { FRFC, RenderProp } from '../helpers'
import { usePopup } from '../popup/use-popup'
import { getInnerClasses, getInnerStyles } from './util'
import { NavBar } from '../NavBar'
import { useSafeAreaInsets } from '../hooks'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import type { PopupRef } from '../popup/types'

const TaDrawer: FRFC<
  PopupRef,
  DrawerProps &
    DrawerEmits & {
      renderHeader?: RenderProp
    }
> = ({ showMask = true, ...props }, ref) => {
  const {
    popupStyles,
    popupClasses,
    onMaskClick,
    onCloseClick,
    setEnableBlurCancel,
    onStopBlur
  } = usePopup(props, ref, {})
  const { safeAreaInsets } = useSafeAreaInsets(props.enableSafeAreaInsets)

  const hasHeader = !!(props.title || props.showClose || props.renderHeader)

  const classes = classNames(['ta-drawer', popupClasses, props.className])
  const innerClasses = classNames(
    getInnerClasses({ placement: props.placement, hasHeader })
  )
  const innerStyles = getInnerStyles({
    placement: props.placement,
    safeAreaInsets
  })

  useEffect(() => {
    setEnableBlurCancel(!showMask)
  }, [showMask])

  return createPortal(
    <div className={classes} style={popupStyles}>
      {showMask ? <div className="ta-mask" onClick={onMaskClick}></div> : <></>}
      <div className={innerClasses} style={innerStyles} onClick={onStopBlur}>
        {props.renderHeader ? (
          props.renderHeader()
        ) : hasHeader ? (
          <NavBar
            className="ta-drawer_header"
            title={props.title}
            rightButtons={
              props.showClose ? [{ icon: CloseOutlined, text: 'close' }] : []
            }
            iconOnly
            onRightButtonClick={onCloseClick}
          ></NavBar>
        ) : (
          <></>
        )}
        <div className="ta-drawer_body">{props.children}</div>
      </div>
    </div>,
    document.body
  )
}

export default forwardRef(TaDrawer)
