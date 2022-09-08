import {
  AkButton,
  AkCell,
  AkGroup,
  AkPopover,
  PlacementType,
  PopupOnVisibleStateChange,
  showPopover,
  showToast
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  selector?: string
  content?: string
  placement?: PlacementType
  visibleEvent?: boolean
}

export default function ExpPopover() {
  const [selector, setSelector] = useState<string>()
  const [content, setContent] = useState('')
  const [placement, setPlacement] = useState<PlacementType>()
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setSelector(args.selector)
    setContent(args.content || '这是气泡内容')
    setPlacement(args.placement)

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
    }
  }

  function onCallApi(selector: string) {
    showPopover({
      selector,
      content: '这是气泡内容',
      placement: 'top',
      success: res => {
        console.log('success', res)
      }
    })
  }

  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-popover-box">
          <AkButton
            size="small"
            id="popoverLeft"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => onShow({ selector: '#popoverLeft' })}
          >
            左
          </AkButton>
          <AkButton
            size="small"
            id="popoverCenter"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => onShow({ selector: '#popoverCenter' })}
          >
            中
          </AkButton>
          <AkButton
            size="small"
            id="popoverRight"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => onShow({ selector: '#popoverRight' })}
          >
            右
          </AkButton>
        </div>
      </AkGroup>
      <AkGroup title="方向 placement=top/bottom/left/right">
        <div className="exp-popover-box2">
          <div>
            <AkButton
              size="small"
              id="popoverTop2"
              shape="circle"
              icon="UpOutlined"
              onClick={() =>
                onShow({ placement: 'top', selector: '#popoverTop2' })
              }
            >
              上
            </AkButton>
          </div>
          <div>
            <AkButton
              size="small"
              id="popoverLeft2"
              shape="circle"
              icon="LeftOutlined"
              onClick={() =>
                onShow({ placement: 'left', selector: '#popoverLeft2' })
              }
            >
              左
            </AkButton>
            <AkButton
              className="exp-popover-box2-ml"
              size="small"
              id="popoverRight2"
              shape="circle"
              icon="RightOutlined"
              onClick={() =>
                onShow({ placement: 'right', selector: '#popoverRight2' })
              }
            >
              右
            </AkButton>
          </div>
          <div>
            <AkButton
              size="small"
              id="popoverBottom2"
              shape="circle"
              icon="DownOutlined"
              onClick={() =>
                onShow({ placement: 'bottom', selector: '#popoverBottom2' })
              }
            >
              下
            </AkButton>
          </div>
        </div>
      </AkGroup>
      <AkGroup title="带选项">
        <AkCell label="长文案">
          <AkButton
            size="small"
            id="popoverLongContent"
            shape="circle"
            icon="PlusOutlined"
            onClick={() =>
              onShow({
                content:
                  '这是气泡内容这是气泡内容这是气泡内容这是气泡内容这是气泡内容这是气泡内容',
                selector: '#popoverLongContent'
              })
            }
          ></AkButton>
        </AkCell>
        <AkCell label="不展示蒙层">
          <AkButton
            size="small"
            id="popoverNoMask"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => setVisible2(true)}
          ></AkButton>
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="onVisibleStateChange">
          <AkButton
            size="small"
            id="popoverEvent"
            shape="circle"
            icon="PlusOutlined"
            onClick={() =>
              onShow({ visibleEvent: true, selector: '#popoverEvent' })
            }
          ></AkButton>
        </AkCell>
      </AkGroup>
      <AkGroup title="API">
        <AkCell label="showPopover">
          <AkButton
            size="small"
            id="popoverApi"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => onCallApi('#popoverApi')}
          ></AkButton>
        </AkCell>
      </AkGroup>
      <AkPopover
        placement={placement}
        content={content}
        selector={selector}
        visible={visible}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
      ></AkPopover>
      <AkPopover
        visible={visible2}
        selector="#popoverNoMask"
        showMask={false}
        content="无蒙层气泡内容"
        onUpdateVisible={v => setVisible2(v)}
      ></AkPopover>
    </>
  )
}
