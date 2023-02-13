import {
  showToast,
  PopupOnVisibleStateChange,
  TaCell,
  TaGroup,
  TaDropdown
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
      <TaGroup title="基础用法">
        <TaCell
          label="基础"
          isLink
          id="dropdownCell"
          onClick={() => onShow({ selector: '#dropdownCell' })}
        />
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell
          label="onVisibleStateChange"
          id="dropdownCellEvent"
          onClick={() =>
            onShow({ selector: '#dropdownCellEvent', visibleEvent: true })
          }
        />
      </TaGroup>
      <TaDropdown
        selector={selector}
        visible={visible}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
      ></TaDropdown>
    </>
  )
}
