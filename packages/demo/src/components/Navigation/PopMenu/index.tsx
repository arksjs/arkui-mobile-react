import {
  TaButton,
  TaCell,
  TaGroup,
  TaPopMenu,
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
      <TaGroup title="基础用法">
        <TaCell label="基础">
          <TaButton
            size="small"
            id="popMenu"
            shape="circle"
            icon="MenuOutlined"
            onClick={() => onShow({ selector: '#popMenu' })}
          ></TaButton>
        </TaCell>
        <TaCell label="不展示蒙层">
          <TaButton
            size="small"
            id="popMenuNoMask"
            shape="circle"
            icon="MenuOutlined"
            onClick={() => setVisible2(true)}
          ></TaButton>
        </TaCell>
      </TaGroup>
      <TaGroup title="方向 placement=top/bottom/left/right">
        <div className="exp-popover-box2">
          <div>
            <TaButton
              size="small"
              id="popMenuTop2"
              shape="circle"
              icon="UpOutlined"
              onClick={() =>
                onShow({ placement: 'top', selector: '#popMenuTop2' })
              }
            >
              上
            </TaButton>
          </div>
          <div>
            <TaButton
              size="small"
              id="popMenuLeft2"
              shape="circle"
              icon="LeftOutlined"
              onClick={() =>
                onShow({ placement: 'left', selector: '#popMenuLeft2' })
              }
            >
              左
            </TaButton>
            <TaButton
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
            </TaButton>
          </div>
          <div>
            <TaButton
              size="small"
              id="popMenuBottom2"
              shape="circle"
              icon="DownOutlined"
              onClick={() =>
                onShow({ placement: 'bottom', selector: '#popMenuBottom2' })
              }
            >
              下
            </TaButton>
          </div>
        </div>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="confirm/cancel">
          <TaButton
            size="small"
            id="popMenuEvent"
            shape="circle"
            icon="MenuOutlined"
            onClick={() =>
              onShow({ confirmEvent: true, selector: '#popMenuEvent' })
            }
          ></TaButton>
        </TaCell>
        <TaCell label="onVisibleStateChange">
          <TaButton
            size="small"
            id="popMenuEvent2"
            shape="circle"
            icon="MenuOutlined"
            onClick={() =>
              onShow({ visibleEvent: true, selector: '#popMenuEvent2' })
            }
          ></TaButton>
        </TaCell>
      </TaGroup>
      <TaGroup title="API">
        <TaCell label="showPopMenu">
          <TaButton
            size="small"
            id="popMenuApi"
            shape="circle"
            icon="MenuOutlined"
            onClick={() => onCallApi('#popMenuApi')}
          ></TaButton>
        </TaCell>
      </TaGroup>
      <TaPopMenu
        options={options}
        placement={placement}
        selector={selector}
        visible={visible}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
      <TaPopMenu
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
