import {
  AkCell,
  AkGroup,
  AkNotify,
  PopupOnVisibleStateChange,
  PopupOnCancel,
  showNotify,
  hideNotify,
  StateType
} from '@/index'
import { useState } from 'react'

interface showArgs {
  icon?: string
  title?: string
  color?: string
  type?: StateType
  duration?: number
  closable?: boolean
}

export default function ExpNotify() {
  const [icon, setIcon] = useState<string>()
  const [title, setTitle] = useState('')
  const [color, setColor] = useState<string>()
  const [type, setType] = useState<StateType>()
  const [duration, setDuration] = useState(0)
  const [closable, setClosable] = useState(false)
  const [visible, setVisible] = useState(false)

  function onShow(args: showArgs) {
    setIcon(args.icon)
    setTitle(args.title ?? '')
    setColor(args.color)
    setType(args.type)
    setDuration(args.duration ?? 1500)
    setClosable(!!args.closable)
    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    console.log('onVisibleStateChange', res)
  }

  const onCancel: PopupOnCancel = res => {
    console.log('onCancel', res)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkCell
          label="主要"
          isLink
          onClick={() => onShow({ title: '通知文本' })}
        />
        <AkCell
          label="成功"
          isLink
          onClick={() => onShow({ title: '成功文本', type: 'success' })}
        />
        <AkCell
          label="警告"
          isLink
          onClick={() => onShow({ title: '警告文本', type: 'warning' })}
        />
        <AkCell
          label="危险"
          isLink
          onClick={() => onShow({ title: '危险文本', type: 'danger' })}
        />
      </AkGroup>
      <AkGroup title="自定义图标">
        <AkCell
          label="成功"
          isLink
          onClick={() =>
            onShow({
              title: '成功文本',
              type: 'success',
              icon: 'CheckCircleOutlined'
            })
          }
        />
        <AkCell
          label="警告"
          isLink
          onClick={() =>
            onShow({
              title: '警告文本',
              type: 'warning',
              icon: 'ExclamationCircleOutlined'
            })
          }
        />
        <AkCell
          label="危险"
          isLink
          onClick={() =>
            onShow({
              title: '危险文本',
              type: 'danger',
              icon: 'CloseCircleOutlined'
            })
          }
        />
      </AkGroup>
      <AkGroup title="其他">
        <AkCell
          label="自定义时长"
          isLink
          onClick={() => onShow({ title: '5秒后消失', duration: 5000 })}
        />
        <AkCell
          label="自定义颜色"
          isLink
          onClick={() =>
            onShow({
              title: '深色调',
              icon: 'InfoCircleOutlined',
              color: '#ff4d4f'
            })
          }
        />
        <AkCell
          label="手动关闭"
          isLink
          onClick={() =>
            onShow({ title: '常驻可手动关闭', duration: 0, closable: true })
          }
        />
      </AkGroup>
      <AkGroup title="API">
        <AkCell
          label="showNotify"
          isLink
          onClick={() =>
            showNotify({
              title: '通知文本',
              duration: 5000,
              closable: true
            })
          }
        />
        <AkCell label="hideNotify" isLink onClick={() => hideNotify()} />
      </AkGroup>
      <AkNotify
        visible={visible}
        title={title}
        type={type}
        color={color}
        icon={icon}
        duration={duration}
        closable={closable}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
        onUpdateVisible={v => setVisible(v)}
      />
    </>
  )
}
