import { forwardRef } from 'react'
import classNames from 'classnames'
import type {
  CascaderPopupEmits,
  CascaderPopupProps,
  CascaderPopupRef
} from './types'
import type { FRVFC } from '../helpers'
import CascaderView from './CascaderView'
import { Drawer } from '../Drawer'
import type { OnVisibleStateChange } from '../popup/types'
import { usePickerPopup } from '../Picker/use-picker'
import { mergeHandlers } from '../Picker/util'

const TaCascaderPopup: FRVFC<
  CascaderPopupRef,
  CascaderPopupProps & CascaderPopupEmits
> = (props, ref) => {
  const classes = classNames('ta-cascader-popup', props.className)

  const { popupRef, viewRef, onConfirmClick } = usePickerPopup(props, ref, {
    handlers: mergeHandlers({
      formatter: props.formatter,
      parser: props.parser
    })
  })

  const onVisibleStateChange: OnVisibleStateChange = res => {
    if (res.state === 'show') {
      viewRef.current?.resize()
    }
    props.onVisibleStateChange && props.onVisibleStateChange(res)
  }

  return (
    <Drawer
      ref={popupRef}
      className={classes}
      placement="bottom"
      visible={props.visible}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      onVisibleStateChange={onVisibleStateChange}
      onUpdateVisible={props.onUpdateVisible}
    >
      <CascaderView
        ref={viewRef}
        value={props.value}
        options={props.options}
        fieldNames={props.fieldNames}
        formatter={props.formatter}
        parser={props.parser}
        onSelect={onConfirmClick}
      />
    </Drawer>
  )
}

export default forwardRef(TaCascaderPopup)
