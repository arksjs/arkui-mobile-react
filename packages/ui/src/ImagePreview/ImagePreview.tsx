import { forwardRef, useEffect, useMemo, useRef } from 'react'
import classNames from 'classnames'
import type { ImagePreviewEmits, ImagePreviewProps } from './types'
import type { FRVFC, RenderProp } from '../helpers'
import { PopupRef } from '../popup/types'
import { usePopup } from '../popup/use-popup'
import { createPortal } from 'react-dom'
import { Button } from '../Button'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import { Swiper } from '../Swiper'
import type { SwiperOnActiveIndexChange, SwiperRef } from '../Swiper/types'
import PreviewItem from './ImagePreviewItem'
import { useStableState } from '../hooks'

const TaImagePreview: FRVFC<
  PopupRef,
  ImagePreviewProps &
    ImagePreviewEmits & {
      renderClose?: RenderProp<{ activeIndex: number }>
    }
> = (
  { urls = [], imageHighRendering = true, showClose = false, value, ...props },
  ref
) => {
  const swiperRef = useRef<SwiperRef>(null)
  const [getActiveIndex2, setActiveIndex2] = useStableState(0)
  const { popupStyles, popupClasses, customCancel, onCloseClick } = usePopup(
    props,
    ref,
    {}
  )

  const classes = classNames([
    'ta-image-preview',
    popupClasses,
    props.className
  ])

  const onSwiperChange: SwiperOnActiveIndexChange = (index, fromIndex) => {
    if (index === getActiveIndex2(true)) {
      return
    }

    setActiveIndex2(index)
    props.onChange && props.onChange(urls[index], index, fromIndex)
  }

  function onPreviewClick() {
    customCancel('previewClick')
  }

  const renderImages = useMemo(
    () =>
      urls.map((url, index) => (
        <PreviewItem
          src={url}
          active={index === getActiveIndex2()}
          imageHighRendering={imageHighRendering}
          key={index + url}
        />
      )),
    [urls, getActiveIndex2(), imageHighRendering]
  )

  useEffect(() => {
    if (value && urls.indexOf(value) !== -1) {
      const _index = urls.indexOf(value)
      setActiveIndex2(_index)
      swiperRef.current?.swipeTo(_index)
    }
  }, [value])

  return createPortal(
    <div className={classes} style={popupStyles}>
      <div className="ta-mask"></div>
      <Swiper
        ref={swiperRef}
        navigationButtons={props.navigationButtons}
        onClick={onPreviewClick}
        onActiveIndexChange={onSwiperChange}
      >
        {renderImages}
      </Swiper>
      <div className="ta-image-preview_pagination">
        {getActiveIndex2() + 1} / {urls.length}
      </div>
      <div className="ta-image-preview_close">
        {props.renderClose ? (
          props.renderClose({
            activeIndex: getActiveIndex2()
          })
        ) : showClose ? (
          <Button
            onClick={onCloseClick}
            icon={CloseOutlined}
            size="large"
            pattern="borderless"
            shape="square"
            ghost
          />
        ) : (
          <></>
        )}
      </div>
    </div>,
    document.body
  )
}

export default forwardRef(TaImagePreview)
