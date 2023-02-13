import { TaSteps, TaIcon, TaFixed, TaButton, TaGroup } from '@/index'
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
      <TaSteps.Step key={index} title={item.title}>
        {item.content}
      </TaSteps.Step>
    ))
  }

  const renderOrderItems = () => {
    return orderSteps.map((item, index) => (
      <TaSteps.Step key={index}>{item.content}</TaSteps.Step>
    ))
  }

  const renderIconItems = () => {
    return steps.map((item, index) => (
      <TaSteps.Step
        key={index}
        title={item.title}
        renderStep={({ finish, active }) => (
          <>
            {finish ? (
              <TaIcon icon="CheckOutlined"></TaIcon>
            ) : active ? (
              <TaIcon icon="LoadingOutlined" spin></TaIcon>
            ) : (
              <></>
            )}
          </>
        )}
      >
        {item.content}
      </TaSteps.Step>
    ))
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaSteps activeIndex={stepIndex}>{renderItems()}</TaSteps>
      </TaGroup>
      <TaGroup title="小点模式">
        <TaSteps activeIndex={stepIndex} dot>
          {renderItems()}
        </TaSteps>
      </TaGroup>
      <TaGroup title="自定义图标">
        <TaSteps activeIndex={stepIndex}>{renderIconItems()}</TaSteps>
      </TaGroup>
      <TaGroup title="横向">
        <TaSteps activeIndex={stepIndex} horizontal>
          {renderItems()}
        </TaSteps>
      </TaGroup>
      <TaGroup title="横向（不要标题 & 小点）">
        <TaSteps activeIndex={1} horizontal dot>
          {renderOrderItems()}
        </TaSteps>
      </TaGroup>
      <TaGroup title="renderTitle">
        <TaSteps>
          <TaSteps.Step title="【珠海市】快件已送达【正方云创园】，感谢您使用中通快递">
            2021-04-13 12:42:57
          </TaSteps.Step>
          <TaSteps.Step
            renderTitle={() => (
              <>
                【珠海市】【珠海一部】快递小哥正在派件（
                <a href="tel:10000">10000</a>）
              </>
            )}
          >
            2021-04-13 11:22:16
          </TaSteps.Step>
          <TaSteps.Step title="【珠海市】快件离开【珠海中心】已发往【珠海一部】">
            2021-04-13 09:04:03
          </TaSteps.Step>
        </TaSteps>
      </TaGroup>
      <TaFixed>
        <div className="exp-steps-next">
          <TaButton
            onClick={() =>
              setStepIndex(stepIndex => (stepIndex + 1) % steps.length)
            }
            type="primary"
          >
            下一步
          </TaButton>
        </div>
      </TaFixed>
    </>
  )
}
