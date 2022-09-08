import { AkButton, AkGroup } from '@/index'

export default function ExpButton() {
  return (
    <>
      <AkGroup title="标准 & 渐变 & 实线 & 虚线 & 无边框">
        <ul className="exp-button-group">
          <li>
            <AkButton type="default">默认</AkButton>
            <AkButton type="primary">主要</AkButton>
            <AkButton type="success">成功</AkButton>
            <AkButton type="warning">警告</AkButton>
            <AkButton type="danger">危险</AkButton>
          </li>
          <li>
            <AkButton type="default" pattern="gradient">
              默认
            </AkButton>
            <AkButton type="primary" pattern="gradient">
              主要
            </AkButton>
            <AkButton type="success" pattern="gradient">
              成功
            </AkButton>
            <AkButton type="warning" pattern="gradient">
              警告
            </AkButton>
            <AkButton type="danger" pattern="gradient">
              危险
            </AkButton>
          </li>
          <li>
            <AkButton type="default" pattern="solid">
              默认
            </AkButton>
            <AkButton type="primary" pattern="solid">
              主要
            </AkButton>
            <AkButton type="success" pattern="solid">
              成功
            </AkButton>
            <AkButton type="warning" pattern="solid">
              警告
            </AkButton>
            <AkButton type="danger" pattern="solid">
              危险
            </AkButton>
          </li>
          <li>
            <AkButton type="default" pattern="dashed">
              默认
            </AkButton>
            <AkButton type="primary" pattern="dashed">
              主要
            </AkButton>
            <AkButton type="success" pattern="dashed">
              成功
            </AkButton>
            <AkButton type="warning" pattern="dashed">
              警告
            </AkButton>
            <AkButton type="danger" pattern="dashed">
              危险
            </AkButton>
          </li>
          <li>
            <AkButton type="default" pattern="borderless">
              默认
            </AkButton>
            <AkButton type="primary" pattern="borderless">
              主要
            </AkButton>
            <AkButton type="success" pattern="borderless">
              成功
            </AkButton>
            <AkButton type="warning" pattern="borderless">
              警告
            </AkButton>
            <AkButton type="danger" pattern="borderless">
              危险
            </AkButton>
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="幽灵按钮">
        <ul className="exp-button-group" style={{ background: '#000' }}>
          <li>
            <AkButton type="default" ghost>
              默认
            </AkButton>
          </li>
          <li>
            <AkButton type="primary" ghost>
              主要
            </AkButton>
            <AkButton type="success" ghost>
              成功
            </AkButton>
            <AkButton type="warning" ghost>
              警告
            </AkButton>
            <AkButton type="danger" ghost>
              危险
            </AkButton>
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="自定义颜色（长春花色#6667AB/莲花色#E2C0BF）">
        <ul className="exp-button-group">
          <li>
            <AkButton color="#6667AB">深色</AkButton>
            <AkButton color="#6667AB" pattern="gradient">
              渐变
            </AkButton>
            <AkButton color="#E2C0BF">浅色</AkButton>
          </li>
          <li>
            <AkButton color="#6667AB" pattern="solid">
              实线
            </AkButton>
            <AkButton color="#6667AB" pattern="dashed">
              虚线
            </AkButton>
            <AkButton color="#6667AB" pattern="borderless">
              无边框
            </AkButton>
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="禁用">
        <ul className="exp-button-group">
          <li>
            <AkButton type="default" disabled>
              默认
            </AkButton>
            <AkButton type="primary" pattern="solid" disabled>
              实线
            </AkButton>
            <AkButton type="primary" pattern="dashed" disabled>
              虚线
            </AkButton>
          </li>
          <li>
            <AkButton type="primary" disabled>
              主要
            </AkButton>
            <AkButton type="success" disabled>
              成功
            </AkButton>
            <AkButton type="warning" disabled>
              警告
            </AkButton>
            <AkButton type="danger" disabled>
              危险
            </AkButton>
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="附带图标">
        <ul className="exp-button-group">
          <li>
            <AkButton
              type="danger"
              shape="square"
              icon="HeartOutlined"
            ></AkButton>
            <AkButton
              type="primary"
              pattern="solid"
              shape="square"
              icon="EditOutlined"
            ></AkButton>
            <AkButton
              type="success"
              pattern="dashed"
              shape="square"
              icon="CheckOutlined"
            ></AkButton>
            <AkButton type="danger" icon="SearchOutlined">
              {' '}
            </AkButton>
          </li>
          <li>
            <AkButton
              type="primary"
              shape="circle"
              icon="SearchOutlined"
            ></AkButton>
            <AkButton
              type="success"
              pattern="solid"
              shape="circle"
              icon="EditOutlined"
            ></AkButton>
            <AkButton
              type="danger"
              pattern="dashed"
              shape="circle"
              icon="CheckOutlined"
            ></AkButton>
            <AkButton type="default" loading shape="round">
              加载中
            </AkButton>
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="middle 尺寸">
        <ul className="exp-button-group">
          <li>
            <AkButton
              type="danger"
              size="middle"
              shape="circle"
              icon="HeartOutlined"
            ></AkButton>
            <AkButton type="danger" size="middle" disabled>
              危险
            </AkButton>
            <AkButton type="default" size="middle" loading shape="round">
              加载中
            </AkButton>
          </li>
          <li>
            <AkButton
              type="warning"
              size="middle"
              shape="square"
              icon="BorderOutlined"
            ></AkButton>
            <AkButton
              type="primary"
              size="middle"
              pattern="solid"
              icon="PlusOutlined"
            >
              主要
            </AkButton>
            <AkButton type="success" size="middle" pattern="dashed">
              成功
            </AkButton>
            <AkButton type="danger" size="middle" pattern="borderless">
              危险
            </AkButton>
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="small 尺寸">
        <ul className="exp-button-group">
          <li>
            <AkButton
              type="danger"
              size="small"
              shape="circle"
              icon="HeartOutlined"
            ></AkButton>
            <AkButton type="danger" size="small" disabled>
              危险
            </AkButton>
            <AkButton type="default" size="small" loading shape="round">
              加载中
            </AkButton>
          </li>
          <li>
            <AkButton
              type="warning"
              size="small"
              shape="square"
              icon="SearchOutlined"
            ></AkButton>
            <AkButton
              type="primary"
              size="small"
              pattern="solid"
              icon="PlusOutlined"
            >
              主要
            </AkButton>
            <AkButton type="success" size="small" pattern="dashed">
              成功
            </AkButton>
            <AkButton type="danger" size="small" pattern="borderless">
              危险
            </AkButton>
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="group 组合">
        <ul className="exp-button-group">
          <li>
            <AkButton.Group shape="square" size="small">
              <AkButton type="default" icon="LeftOutlined"></AkButton>
              <AkButton type="default" icon="HomeOutlined"></AkButton>
            </AkButton.Group>
            <AkButton.Group size="small">
              <AkButton type="default" icon="LeftOutlined">
                返回
              </AkButton>
              <AkButton type="default" icon="HomeOutlined">
                首页
              </AkButton>
            </AkButton.Group>
          </li>
          <li>
            <AkButton.Group shape="square" size="large">
              <AkButton type="default" icon="LeftOutlined"></AkButton>
              <AkButton type="default" icon="HomeOutlined"></AkButton>
            </AkButton.Group>
            <AkButton.Group size="large">
              <AkButton type="default" icon="LeftOutlined">
                返回
              </AkButton>
              <AkButton type="default" icon="HomeOutlined">
                首页
              </AkButton>
            </AkButton.Group>
          </li>
          <li>
            <AkButton.Group shape="circle" size="small">
              <AkButton type="default" icon="LeftOutlined"></AkButton>
              <AkButton type="default" icon="HomeOutlined"></AkButton>
            </AkButton.Group>
            <AkButton.Group shape="round" size="small">
              <AkButton type="default" icon="LeftOutlined">
                返回
              </AkButton>
              <AkButton type="default" icon="HomeOutlined">
                首页
              </AkButton>
            </AkButton.Group>
          </li>
          <li>
            <AkButton.Group shape="circle" size="large">
              <AkButton type="default" icon="LeftOutlined"></AkButton>
              <AkButton type="default" icon="HomeOutlined"></AkButton>
            </AkButton.Group>
            <AkButton.Group shape="round" size="large">
              <AkButton type="default" icon="LeftOutlined">
                返回
              </AkButton>
              <AkButton type="default" icon="HomeOutlined">
                首页
              </AkButton>
            </AkButton.Group>
          </li>
          <li>
            <AkButton.Group shape="circle" pattern="solid">
              <AkButton type="primary" icon="LeftOutlined"></AkButton>
              <AkButton type="primary" icon="HomeOutlined"></AkButton>
            </AkButton.Group>
            <AkButton.Group shape="round" pattern="gradient">
              <AkButton type="warning">加购物车</AkButton>
              <AkButton type="danger">立即购买</AkButton>
            </AkButton.Group>
          </li>
        </ul>
      </AkGroup>
    </>
  )
}
