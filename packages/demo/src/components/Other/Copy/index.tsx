import { AkCopy, AkButton, AkGroup, showToast } from '@/index'

export default function ExpCopy() {
  const onSuccess = (text: string) => {
    showToast({
      title: `${text}`,
      type: 'success'
    })
  }

  const onError = (error: Error) => {
    showToast({
      title: error.message,
      type: 'fail'
    })
  }

  return (
    <>
      <AkGroup title="基本用法">
        <div className="exp-copy-pad">
          <AkCopy className="exp-copy-box" text="复制的文本">
            <AkButton type="primary">点击复制</AkButton>
          </AkCopy>
        </div>
      </AkGroup>
      <AkGroup title="事件监听">
        <div className="exp-copy-pad">
          <AkCopy
            className="exp-copy-box"
            text="复制的文本2"
            onSuccess={onSuccess}
            onError={onError}
          >
            <AkButton type="primary">点击复制</AkButton>
          </AkCopy>
        </div>
      </AkGroup>
    </>
  )
}
