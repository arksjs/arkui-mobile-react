import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ForwardedRef
} from 'react'
import classNames from 'classnames'
import { querySelector, type FC } from '../helpers'
import { usePopup } from '../popup/use-popup'
import {
  getDefaultPos,
  getArrowStyles,
  getInnerStyles,
  getShowPos
} from './util'
import type { PopoverProps } from './types'
import type { PopupRef } from '../popup/types'
import { useResizeObserver } from '../hooks'

export function usePopover(
  {
    showMask = true,
    ...props
  }: PopoverProps & {
    className?: string
  },
  ref: ForwardedRef<PopupRef>
) {
  const docEl = useRef(document.documentElement)
  const container = useRef<HTMLElement | null>(null)
  const innerEl = useRef<HTMLDivElement>(null)
  const isShow = useRef(false)
  const [showPos, setShowPos] = useState(getDefaultPos())

  const updatePos = useCallback(
    (source?: string) => {
      if (!container.current || !innerEl.current || !isShow.current) {
        setShowPos(getDefaultPos())
        return
      }

      setShowPos(
        getShowPos(container.current, innerEl.current, props.placement)
      )
    },
    [props.placement]
  )

  const popup = usePopup(props, ref, {
    afterShow() {
      isShow.current = true
      updatePos('show')
    },
    afterHidden() {
      isShow.current = false
      updatePos('show')
    },
    initialForbidScroll: showMask,
    initialEnableBlurCancel: !showMask
  })

  const arrowStyles = useMemo(
    () => getArrowStyles(isShow.current, showPos),
    [showPos]
  )
  const innerStyles = useMemo(
    () => getInnerStyles(isShow.current, showPos),
    [showPos]
  )

  useEffect(() => {
    popup.setForbidScroll(showMask)
    popup.setEnableBlurCancel(!showMask)
  }, [showMask])

  const { elChange: containerChange } = useResizeObserver(container, () =>
    updatePos('container resize')
  )
  useResizeObserver(docEl, () => updatePos('window resize'))

  useEffect(() => {
    const newEl = querySelector(props.selector)
    if (newEl !== container.current) {
      container.current = newEl
      containerChange()
      updatePos('selector change')
    }
  }, [props.selector])

  const PopoverWrapper: FC = ({ children, className }) => {
    const classes = classNames([
      'ta-popover',
      popup.popupClasses,
      props.className,
      className,
      { 'no--mask': !showMask }
    ])

    return (
      <div className={classes} style={popup.popupStyles}>
        <div className="ta-mask" onClick={popup.onMaskClick}></div>
        <div
          className="ta-popover_inner"
          ref={innerEl}
          style={innerStyles}
          onClick={popup.onStopBlur}
        >
          <i className="ta-popover_arrow" style={arrowStyles}></i>
          <div className="ta-popover_content">{children}</div>
        </div>
      </div>
    )
  }

  return {
    ...popup,
    PopoverWrapper
  }
}
