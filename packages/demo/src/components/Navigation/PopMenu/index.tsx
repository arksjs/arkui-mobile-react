import {
  AkButton,
  AkCell,
  AkGroup,
  AkPopMenu,
  PlacementType,
  PopupOnCancel,
  PopupOnVisibleStateChange,
  showPopMenu,
  showToast,
  showDialog,
  PopMenuOnConfirm
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  selector?: string
  placement?: PlacementType
  visibleEvent?: boolean
  confirmEvent?: boolean
}

const options = [
  {
    icon: 'HeartOutlined',
    name: '爱心'
  },
  {
    icon: 'StarOutlined',
    name: '星星'
  },
  {
    icon: 'CircleOutlined',
    name: '圈圈',
    disabled: true
  }
]

export default function ExpPopMenu() {
  const [selector, setSelector] = useState<string>()
  const [placement, setPlacement] = useState<PlacementType>()

  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const confirmEvent = useRef(false)
  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setSelector(args.selector)
    setPlacement(args.placement)

    visibleEvent.current = !!args.visibleEvent
    confirmEvent.current = !!args.confirmEvent

    visibleEvent.current = !!args.visibleEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = ({ state }) => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', state)
      showToast(`${state} 事件触发`)
    }
    if (state === 'hidden') {
      visibleEvent.current = false
      confirmEvent.current = false
    }
  }

  const onConfirm: PopMenuOnConfirm = res => {
    if (confirmEvent.current) {
      console.log('confirm')
      showDialog({
        title: '选择了',
        showCancel: false,
        content: `item.name: '${res.item.name}'\nindex: ${res.index}`
      })
    }
  }

  const onCancel: PopupOnCancel = res => {
    if (confirmEvent.current) {
      console.log('cancel', res)
      showToast('取消了')
    }
  }

  function onCallApi(selector: string) {
    showPopMenu({
      selector,
      options: options,
      placement: 'top',
      success: res => {
        console.log('success', res)
        if (res.confirm) {
          showToast(`选择了 ${res.detail.item.name}`)
        } else {
          showToast('取消了')
        }
      }
    })
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="基础">
          <AkButton
            size="small"
            id="popMenu"
            shape="circle"
            icon="MenuOutlined"
            onClick={() => onShow({ selector: '#popMenu' })}
          ></AkButton>
        </AkCell>
        <AkCell label="不展示蒙层">
          <AkButton
            size="small"
            id="popMenuNoMask"
            shape="circle"
            icon="MenuOutlined"
            onClick={() => setVisible2(true)}
          ></AkButton>
        </AkCell>
      </AkGroup>
      <AkGroup title="方向 placement=top/bottom/left/right">
        <div className="exp-popover-box2">
          <div>
            <AkButton
              size="small"
              id="popMenuTop2"
              shape="circle"
              icon="UpOutlined"
              onClick={() =>
                onShow({ placement: 'top', selector: '#popMenuTop2' })
              }
            >
              上
            </AkButton>
          </div>
          <div>
            <AkButton
              size="small"
              id="popMenuLeft2"
              shape="circle"
              icon="LeftOutlined"
              onClick={() =>
                onShow({ placement: 'left', selector: '#popMenuLeft2' })
              }
            >
              左
            </AkButton>
            <AkButton
              className="exp-popover-box2-ml"
              size="small"
              id="popMenuRight2"
              shape="circle"
              icon="RightOutlined"
              onClick={() =>
                onShow({ placement: 'right', selector: '#popMenuRight2' })
              }
            >
              右
            </AkButton>
          </div>
          <div>
            <AkButton
              size="small"
              id="popMenuBottom2"
              shape="circle"
              icon="DownOutlined"
              onClick={() =>
                onShow({ placement: 'bottom', selector: '#popMenuBottom2' })
              }
            >
              下
            </AkButton>
          </div>
        </div>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="confirm/cancel">
          <AkButton
            size="small"
            id="popMenuEvent"
            shape="circle"
            icon="MenuOutlined"
            onClick={() =>
              onShow({ confirmEvent: true, selector: '#popMenuEvent' })
            }
          ></AkButton>
        </AkCell>
        <AkCell label="onVisibleStateChange">
          <AkButton
            size="small"
            id="popMenuEvent2"
            shape="circle"
            icon="MenuOutlined"
            onClick={() =>
              onShow({ visibleEvent: true, selector: '#popMenuEvent2' })
            }
          ></AkButton>
        </AkCell>
      </AkGroup>
      <AkGroup title="API">
        <AkCell label="showPopMenu">
          <AkButton
            size="small"
            id="popMenuApi"
            shape="circle"
            icon="MenuOutlined"
            onClick={() => onCallApi('#popMenuApi')}
          ></AkButton>
        </AkCell>
      </AkGroup>
      <AkPopMenu
        options={options}
        placement={placement}
        selector={selector}
        visible={visible}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
      <AkPopMenu
        options={options}
        visible={visible2}
        selector="#popMenuNoMask"
        showMask={false}
        content="无蒙层气泡内容"
        onUpdateVisible={v => setVisible2(v)}
      />
    </>
  )
}
