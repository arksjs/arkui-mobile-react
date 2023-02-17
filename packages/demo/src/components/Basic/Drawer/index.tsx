import {
  TaDrawer,
  TaCell,
  TaGroup,
  PlacementType,
  showToast,
  PopupOnVisibleStateChange,
  PopupOnCancel
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  title?: string
  placement?: PlacementType
  showClose?: boolean
  visibleEvent?: boolean
  cancelEvent?: boolean
}

export default function ExpDrawer() {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [placement, setPlacement] = useState<PlacementType>()
  const [showClose, setShowClose] = useState(false)

  const visibleEvent = useRef(false)
  const cancelEvent = useRef(false)

  function onShow(args: showArgs) {
    setTitle(args.title ?? '')
    setPlacement(args.placement)
    setShowClose(!!args.showClose)

    visibleEvent.current = !!args.visibleEvent
    cancelEvent.current = !!args.cancelEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = ({ state }) => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', state)
      showToast(`${state} 事件触发`)
    }
    if (state === 'hidden') {
      visibleEvent.current = false
      cancelEvent.current = false
    }
  }

  const onCancel: PopupOnCancel = res => {
    if (cancelEvent.current) {
      console.log('cancel', res)
      showToast('取消')
    }
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell
          label="顶部弹出"
          isLink
          onClick={() => onShow({ title: '顶部弹出', placement: 'top' })}
        ></TaCell>
        <TaCell
          label="底部弹出"
          isLink
          onClick={() => onShow({ title: '底部弹出', placement: 'bottom' })}
        ></TaCell>
        <TaCell
          label="左侧弹出"
          isLink
          onClick={() => onShow({ title: '左侧弹出', placement: 'left' })}
        ></TaCell>
        <TaCell
          label="右侧弹出"
          isLink
          onClick={() => onShow({ title: '右侧弹出', placement: 'right' })}
        ></TaCell>
      </TaGroup>
      <TaGroup title="无标题">
        <TaCell
          label="底部弹出"
          isLink
          onClick={() => onShow({ placement: 'bottom' })}
        ></TaCell>
        <TaCell
          label="右侧弹出"
          isLink
          onClick={() => onShow({ placement: 'right' })}
        ></TaCell>
      </TaGroup>
      <TaGroup title="展示关闭按钮">
        <TaCell
          label="有标题-底部"
          isLink
          onClick={() =>
            onShow({ title: '标题', placement: 'bottom', showClose: true })
          }
        ></TaCell>
        <TaCell
          label="有标题-右侧"
          isLink
          onClick={() =>
            onShow({ title: '标题', placement: 'right', showClose: true })
          }
        ></TaCell>
        <TaCell
          label="无标题"
          isLink
          onClick={() => onShow({ placement: 'bottom', showClose: true })}
        ></TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell
          label="onVisibleStateChange"
          isLink
          onClick={() =>
            onShow({
              title: '标题',
              placement: 'bottom',
              showClose: true,
              visibleEvent: true
            })
          }
        ></TaCell>
        <TaCell
          label="cancel"
          isLink
          onClick={() =>
            onShow({
              title: '标题',
              placement: 'bottom',
              showClose: true,
              cancelEvent: true
            })
          }
        ></TaCell>
      </TaGroup>
      <TaDrawer
        visible={visible}
        title={title}
        placement={placement}
        showClose={showClose}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
      />
    </>
  )
}
