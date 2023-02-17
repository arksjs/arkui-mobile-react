import { TaCopy, TaButton, TaGroup, showToast } from '@/index'

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
      <TaGroup title="基本用法">
        <div className="exp-copy-pad">
          <TaCopy className="exp-copy-box" text="复制的文本">
            <TaButton type="primary">点击复制</TaButton>
          </TaCopy>
        </div>
      </TaGroup>
      <TaGroup title="事件监听">
        <div className="exp-copy-pad">
          <TaCopy
            className="exp-copy-box"
            text="复制的文本2"
            onSuccess={onSuccess}
            onError={onError}
          >
            <TaButton type="primary">点击复制</TaButton>
          </TaCopy>
        </div>
      </TaGroup>
    </>
  )
}
