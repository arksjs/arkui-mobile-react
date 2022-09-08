import {
  showToast,
  PopupOnVisibleStateChange,
  AkCell,
  AkGroup,
  AkDropdown
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  selector?: string
  visibleEvent?: boolean
}

export default function ExpDropdown() {
  const [visible, setVisible] = useState(false)
  const [selector, setSelector] = useState('')

  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setSelector(args.selector ?? '')

    visibleEvent.current = !!args.visibleEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', res)
      showToast(`${res.state} 事件触发`)
    }

    if (res.state === 'hidden') {
      visibleEvent.current = false
    }
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkCell
          label="基础"
          isLink
          id="dropdownCell"
          onClick={() => onShow({ selector: '#dropdownCell' })}
        />
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell
          label="onVisibleStateChange"
          id="dropdownCellEvent"
          onClick={() =>
            onShow({ selector: '#dropdownCellEvent', visibleEvent: true })
          }
        />
      </AkGroup>
      <AkDropdown
        selector={selector}
        visible={visible}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
      ></AkDropdown>
    </>
  )
}
