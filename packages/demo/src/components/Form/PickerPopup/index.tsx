import { multiOptions } from '../Picker/data'
import {
  showToast,
  SelectorModelValue,
  PickerOnConfirm,
  PopupOnVisibleStateChange,
  PopupOnCancel,
  AkCell,
  AkGroup,
  AkNoticeBar,
  AkPicker
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  visibleEvent?: boolean
  changeEvent?: boolean
  clickEvent?: boolean
}

export default function ExpPickerPopup() {
  const [popupValue, setPopupValue] = useState([2000, '夏'])
  const [visible, setVisible] = useState(false)
  const clickEvent = useRef(false)
  const changeEvent = useRef(false)
  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    visibleEvent.current = !!args.visibleEvent
    changeEvent.current = !!args.changeEvent
    clickEvent.current = !!args.clickEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', res)
      showToast(`${res.state} 事件触发`)
    }

    if (res.state === 'hidden') {
      clickEvent.current = false
      visibleEvent.current = false
      changeEvent.current = false
    }
  }

  const onConfirm: PickerOnConfirm = res => {
    if (clickEvent.current) {
      console.log('onConfirm', res)
      showToast(`点击确定按钮`)
    }
  }

  function onChange(res: SelectorModelValue) {
    if (changeEvent.current) {
      console.log('onChange', res)
      showToast(`值改为 ${res}`)
    }

    setPopupValue(res as (string | number)[])
  }

  const onCancel: PopupOnCancel = res => {
    if (clickEvent.current) {
      console.log('onCancel', res)

      if (res.source === 'cancelClick') {
        showToast('点击了取消按钮')
      } else if (res.source === 'maskClick') {
        showToast('点击了蒙层')
      }
    }
  }

  return (
    <>
      <AkNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Picker"
      />
      <AkGroup title="基础用法">
        <AkCell label="默认" isLink onClick={() => onShow({})}>
          {popupValue}
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell
          label="onChange"
          isLink
          onClick={() => onShow({ changeEvent: true })}
        />
        <AkCell
          label="onConfirm/onCancel"
          isLink
          onClick={() => onShow({ clickEvent: true })}
        />
        <AkCell
          label="onVisibleStateChange"
          isLink
          onClick={() => onShow({ visibleEvent: true })}
        />
      </AkGroup>
      <AkPicker.Popup
        visible={visible}
        title="PickerPopup"
        options={multiOptions}
        value={popupValue}
        onChange={onChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
        onVisibleStateChange={onVisibleStateChange}
        onUpdateVisible={v => setVisible(v)}
      />
    </>
  )
}
