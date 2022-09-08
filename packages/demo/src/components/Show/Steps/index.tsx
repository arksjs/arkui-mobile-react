import { AkSteps, AkIcon, AkFixed, AkButton, AkGroup } from '@/index'
import { useState } from 'react'

const steps = [
  {
    title: '已完成',
    content: '这一步过了哈'
  },
  {
    title: '进行中',
    content: '目前到这一步'
  },
  {
    title: '待处理',
    content: '还没到这一步'
  }
]

const orderSteps = [
  {
    content: '买家下单'
  },
  {
    content: '商家接单'
  },
  {
    content: '商家发货'
  },
  {
    content: '买家提货'
  },
  {
    content: '交易完成'
  }
]

export default function ExpSteps() {
  const [stepIndex, setStepIndex] = useState(1)

  const renderItems = () => {
    return steps.map((item, index) => (
      <AkSteps.Step key={index} title={item.title}>
        {item.content}
      </AkSteps.Step>
    ))
  }

  const renderOrderItems = () => {
    return orderSteps.map((item, index) => (
      <AkSteps.Step key={index}>{item.content}</AkSteps.Step>
    ))
  }

  const renderIconItems = () => {
    return steps.map((item, index) => (
      <AkSteps.Step
        key={index}
        title={item.title}
        renderStep={({ finish, active }) => (
          <>
            {finish ? (
              <AkIcon icon="CheckOutlined"></AkIcon>
            ) : active ? (
              <AkIcon icon="LoadingOutlined" spin></AkIcon>
            ) : (
              <></>
            )}
          </>
        )}
      >
        {item.content}
      </AkSteps.Step>
    ))
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkSteps activeIndex={stepIndex}>{renderItems()}</AkSteps>
      </AkGroup>
      <AkGroup title="小点模式">
        <AkSteps activeIndex={stepIndex} dot>
          {renderItems()}
        </AkSteps>
      </AkGroup>
      <AkGroup title="自定义图标">
        <AkSteps activeIndex={stepIndex}>{renderIconItems()}</AkSteps>
      </AkGroup>
      <AkGroup title="横向">
        <AkSteps activeIndex={stepIndex} horizontal>
          {renderItems()}
        </AkSteps>
      </AkGroup>
      <AkGroup title="横向（不要标题 & 小点）">
        <AkSteps activeIndex={1} horizontal dot>
          {renderOrderItems()}
        </AkSteps>
      </AkGroup>
      <AkGroup title="renderTitle">
        <AkSteps>
          <AkSteps.Step title="【珠海市】快件已送达【正方云创园】，感谢您使用中通快递">
            2021-04-13 12:42:57
          </AkSteps.Step>
          <AkSteps.Step
            renderTitle={() => (
              <>
                【珠海市】【珠海一部】快递小哥正在派件（
                <a href="tel:10000">10000</a>）
              </>
            )}
          >
            2021-04-13 11:22:16
          </AkSteps.Step>
          <AkSteps.Step title="【珠海市】快件离开【珠海中心】已发往【珠海一部】">
            2021-04-13 09:04:03
          </AkSteps.Step>
        </AkSteps>
      </AkGroup>
      <AkFixed>
        <div className="exp-steps-next">
          <AkButton
            onClick={() =>
              setStepIndex(stepIndex => (stepIndex + 1) % steps.length)
            }
            type="primary"
          >
            下一步
          </AkButton>
        </div>
      </AkFixed>
    </>
  )
}
