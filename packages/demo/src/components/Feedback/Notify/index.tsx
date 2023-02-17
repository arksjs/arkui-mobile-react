import {
  TaCell,
  TaGroup,
  TaNotify,
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
      <TaGroup title="基础用法">
        <TaCell
          label="主要"
          isLink
          onClick={() => onShow({ title: '通知文本' })}
        />
        <TaCell
          label="成功"
          isLink
          onClick={() => onShow({ title: '成功文本', type: 'success' })}
        />
        <TaCell
          label="警告"
          isLink
          onClick={() => onShow({ title: '警告文本', type: 'warning' })}
        />
        <TaCell
          label="危险"
          isLink
          onClick={() => onShow({ title: '危险文本', type: 'danger' })}
        />
      </TaGroup>
      <TaGroup title="自定义图标">
        <TaCell
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
        <TaCell
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
        <TaCell
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
      </TaGroup>
      <TaGroup title="其他">
        <TaCell
          label="自定义时长"
          isLink
          onClick={() => onShow({ title: '5秒后消失', duration: 5000 })}
        />
        <TaCell
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
        <TaCell
          label="手动关闭"
          isLink
          onClick={() =>
            onShow({ title: '常驻可手动关闭', duration: 0, closable: true })
          }
        />
      </TaGroup>
      <TaGroup title="API">
        <TaCell
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
        <TaCell label="hideNotify" isLink onClick={() => hideNotify()} />
      </TaGroup>
      <TaNotify
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
