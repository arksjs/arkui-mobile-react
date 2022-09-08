import { AkResult, AkGroup, showToast } from '@/index'

export default function ExpResult() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkResult
          type="info"
          title="标题"
          description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现。"
        />
      </AkGroup>
      <AkGroup title="type=success & showBack=false">
        <AkResult
          type="success"
          title="支付成功"
          description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现。"
          showBack
        />
      </AkGroup>
      <AkGroup title="type=warning & 自定义按钮文案">
        <AkResult
          type="warning"
          title="遇到问题"
          description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现。"
          confirmText="自定义确定"
          backText="自定义返回"
          onConfirm={() => showToast('点击了确定')}
          onBack={() => showToast('点击了返回')}
        />
      </AkGroup>
      <AkGroup title="type=fail & 自定义内容">
        <AkResult
          type="fail"
          title="支付失败"
          description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现。"
        >
          <div className="exp-result-extra">
            在这里可以附加组件元素或者相应的提示文案，样式自定。
          </div>
        </AkResult>
      </AkGroup>
    </>
  )
}
