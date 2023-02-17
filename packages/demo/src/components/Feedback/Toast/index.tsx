import {
  TaCell,
  TaGroup,
  TaToast,
  ToastType,
  PopupOnVisibleStateChange,
  showToast,
  showLoading,
  hideToast,
  hideLoading
} from '@/index'
import { useState } from 'react'

interface showArgs {
  icon?: string
  title?: string
  showMask?: boolean
  type?: ToastType
  duration?: number
}

export default function ExpToast() {
  const [icon, setIcon] = useState<string>()
  const [title, setTitle] = useState('')
  const [showMask, setShowMask] = useState(false)
  const [type, setType] = useState<ToastType>()
  const [duration, setDuration] = useState(0)
  const [visible, setVisible] = useState(false)

  function onShow(args: showArgs) {
    setIcon(args.icon)
    setTitle(args.title ?? '')
    setShowMask(!!args.showMask)
    setType(args.type)
    setDuration(args.duration ?? 1500)
    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    console.log('onVisibleStateChange', res)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell
          label="纯文字"
          isLink
          onClick={() => onShow({ title: '提示文本' })}
        />
        <TaCell
          label="长文字"
          isLink
          onClick={() =>
            onShow({ title: '提示文本提示文本提示文本提示文本提示文本' })
          }
        />
        <TaCell
          label="成功"
          isLink
          onClick={() => onShow({ title: '成功文本', type: 'success' })}
        />
        <TaCell
          label="失败"
          isLink
          onClick={() => onShow({ title: '失败文本', type: 'fail' })}
        />
        <TaCell
          label="加载中"
          isLink
          onClick={() => onShow({ title: '加载文本', type: 'loading' })}
        />
      </TaGroup>
      <TaGroup title="自定义图标">
        <TaCell
          label="收藏"
          isLink
          onClick={() => onShow({ title: '已收藏', icon: 'StarFilled' })}
        />
        <TaCell
          label="警告"
          isLink
          onClick={() =>
            onShow({
              title: '警告文本',
              icon: 'ExclamationCircleOutlined'
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
          label="展示透明蒙层"
          isLink
          onClick={() => onShow({ title: '不可穿透', showMask: true })}
        />
      </TaGroup>
      <TaGroup title="API">
        <TaCell
          label="showToast"
          isLink
          onClick={() => showToast({ title: '提示文本', duration: 5000 })}
        />
        <TaCell label="hideToast" isLink onClick={() => hideToast()} />
        <TaCell
          label="showLoading"
          isLink
          onClick={() => showLoading({ title: '加载中' })}
        />
        <TaCell label="hideLoading" isLink onClick={() => hideLoading()} />
      </TaGroup>
      <TaToast
        visible={visible}
        title={title}
        type={type}
        showMask={showMask}
        icon={icon}
        duration={duration}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
      ></TaToast>
    </>
  )
}
