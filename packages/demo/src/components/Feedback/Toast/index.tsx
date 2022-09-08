import {
  AkCell,
  AkGroup,
  AkToast,
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
      <AkGroup title="基础用法">
        <AkCell
          label="纯文字"
          isLink
          onClick={() => onShow({ title: '提示文本' })}
        />
        <AkCell
          label="长文字"
          isLink
          onClick={() =>
            onShow({ title: '提示文本提示文本提示文本提示文本提示文本' })
          }
        />
        <AkCell
          label="成功"
          isLink
          onClick={() => onShow({ title: '成功文本', type: 'success' })}
        />
        <AkCell
          label="失败"
          isLink
          onClick={() => onShow({ title: '失败文本', type: 'fail' })}
        />
        <AkCell
          label="加载中"
          isLink
          onClick={() => onShow({ title: '加载文本', type: 'loading' })}
        />
      </AkGroup>
      <AkGroup title="自定义图标">
        <AkCell
          label="收藏"
          isLink
          onClick={() => onShow({ title: '已收藏', icon: 'StarFilled' })}
        />
        <AkCell
          label="警告"
          isLink
          onClick={() =>
            onShow({
              title: '警告文本',
              icon: 'ExclamationCircleOutlined'
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
          label="展示透明蒙层"
          isLink
          onClick={() => onShow({ title: '不可穿透', showMask: true })}
        />
      </AkGroup>
      <AkGroup title="API">
        <AkCell
          label="showToast"
          isLink
          onClick={() => showToast({ title: '提示文本', duration: 5000 })}
        />
        <AkCell label="hideToast" isLink onClick={() => hideToast()} />
        <AkCell
          label="showLoading"
          isLink
          onClick={() => showLoading({ title: '加载中' })}
        />
        <AkCell label="hideLoading" isLink onClick={() => hideLoading()} />
      </AkGroup>
      <AkToast
        visible={visible}
        title={title}
        type={type}
        showMask={showMask}
        icon={icon}
        duration={duration}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
      ></AkToast>
    </>
  )
}
