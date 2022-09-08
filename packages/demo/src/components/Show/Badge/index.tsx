import { AkRow, AkCol, AkIcon, AkGroup, AkBadge } from '@/index'
import { useState } from 'react'

export default function ExpBadge() {
  const [count] = useState(0)
  const [count2] = useState(0)

  // function onSwitch(checked: boolean) {
  //   count.value = checked ? 1000 : 0
  // }

  // function onSwitch2(checked: boolean) {
  //   count2.value = checked ? 1000 : 0
  // }

  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-badge-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge content={1}>
                {' '}
                <div className="exp-badge-slot"></div>{' '}
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              <AkBadge content={99}>
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="小红点">
        <div className="exp-badge-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge content={1} dot>
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="图标 renderBadge">
        <div className="exp-badge-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge
                content={1}
                renderBadge={() => <AkIcon icon="CheckOutlined" />}
              >
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="文本">
        <div className="exp-badge-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge content="惠">
                {' '}
                <div className="exp-badge-slot"></div>{' '}
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              <AkBadge content="热">
                {' '}
                <div className="exp-badge-slot"></div>{' '}
              </AkBadge>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="自定义颜色">
        <div className="exp-badge-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge content={99} color="#6667AB">
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              <AkBadge content={1} dot color="#6667AB">
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              <AkBadge
                content={1}
                color="#E2C0BF"
                renderBadge={() => <AkIcon icon="CheckOutlined" />}
              >
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              <AkBadge content="惠" color="#E2C0BF">
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="限制最大数">
        <div className="exp-badge-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge content={1000} maxCount="9">
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              <AkBadge content={1000} maxCount="10">
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              <AkBadge content={1000} maxCount="99">
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="展示 0">
        <div className="exp-badge-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge content={0} showZero>
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              <AkBadge content={0} dot showZero>
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="偏移">
        <div className="exp-badge-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge content={1} offset={[10, -10]}>
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              <AkBadge content={1} dot offset={[-20, 20]}>
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="展示动画">
        <div className="exp-badge-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge content={count} showZero animated>
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              {/* <AkSwitch @change="onSwitch"></AkSwitch> */}
            </AkCol>
          </AkRow>
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkBadge content={count2} dot animated>
                <div className="exp-badge-slot"></div>
              </AkBadge>
            </AkCol>
            <AkCol span="6">
              {/* <AkSwitch @change="onSwitch2"></AkSwitch> */}
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
    </>
  )
}
