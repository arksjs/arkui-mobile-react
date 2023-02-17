import { TaButton, TaGroup } from '@/index'

export default function ExpButton() {
  return (
    <>
      <TaGroup title="标准 & 渐变 & 实线 & 虚线 & 无边框">
        <ul className="exp-button-group">
          <li>
            <TaButton type="default">默认</TaButton>
            <TaButton type="primary">主要</TaButton>
            <TaButton type="success">成功</TaButton>
            <TaButton type="warning">警告</TaButton>
            <TaButton type="danger">危险</TaButton>
          </li>
          <li>
            <TaButton type="default" pattern="gradient">
              默认
            </TaButton>
            <TaButton type="primary" pattern="gradient">
              主要
            </TaButton>
            <TaButton type="success" pattern="gradient">
              成功
            </TaButton>
            <TaButton type="warning" pattern="gradient">
              警告
            </TaButton>
            <TaButton type="danger" pattern="gradient">
              危险
            </TaButton>
          </li>
          <li>
            <TaButton type="default" pattern="solid">
              默认
            </TaButton>
            <TaButton type="primary" pattern="solid">
              主要
            </TaButton>
            <TaButton type="success" pattern="solid">
              成功
            </TaButton>
            <TaButton type="warning" pattern="solid">
              警告
            </TaButton>
            <TaButton type="danger" pattern="solid">
              危险
            </TaButton>
          </li>
          <li>
            <TaButton type="default" pattern="dashed">
              默认
            </TaButton>
            <TaButton type="primary" pattern="dashed">
              主要
            </TaButton>
            <TaButton type="success" pattern="dashed">
              成功
            </TaButton>
            <TaButton type="warning" pattern="dashed">
              警告
            </TaButton>
            <TaButton type="danger" pattern="dashed">
              危险
            </TaButton>
          </li>
          <li>
            <TaButton type="default" pattern="borderless">
              默认
            </TaButton>
            <TaButton type="primary" pattern="borderless">
              主要
            </TaButton>
            <TaButton type="success" pattern="borderless">
              成功
            </TaButton>
            <TaButton type="warning" pattern="borderless">
              警告
            </TaButton>
            <TaButton type="danger" pattern="borderless">
              危险
            </TaButton>
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="幽灵按钮">
        <ul className="exp-button-group" style={{ background: '#000' }}>
          <li>
            <TaButton type="default" ghost>
              默认
            </TaButton>
          </li>
          <li>
            <TaButton type="primary" ghost>
              主要
            </TaButton>
            <TaButton type="success" ghost>
              成功
            </TaButton>
            <TaButton type="warning" ghost>
              警告
            </TaButton>
            <TaButton type="danger" ghost>
              危险
            </TaButton>
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="自定义颜色（长春花色#6667AB/莲花色#E2C0BF）">
        <ul className="exp-button-group">
          <li>
            <TaButton color="#6667AB">深色</TaButton>
            <TaButton color="#6667AB" pattern="gradient">
              渐变
            </TaButton>
            <TaButton color="#E2C0BF">浅色</TaButton>
          </li>
          <li>
            <TaButton color="#6667AB" pattern="solid">
              实线
            </TaButton>
            <TaButton color="#6667AB" pattern="dashed">
              虚线
            </TaButton>
            <TaButton color="#6667AB" pattern="borderless">
              无边框
            </TaButton>
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="禁用">
        <ul className="exp-button-group">
          <li>
            <TaButton type="default" disabled>
              默认
            </TaButton>
            <TaButton type="primary" pattern="solid" disabled>
              实线
            </TaButton>
            <TaButton type="primary" pattern="dashed" disabled>
              虚线
            </TaButton>
          </li>
          <li>
            <TaButton type="primary" disabled>
              主要
            </TaButton>
            <TaButton type="success" disabled>
              成功
            </TaButton>
            <TaButton type="warning" disabled>
              警告
            </TaButton>
            <TaButton type="danger" disabled>
              危险
            </TaButton>
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="附带图标">
        <ul className="exp-button-group">
          <li>
            <TaButton
              type="danger"
              shape="square"
              icon="HeartOutlined"
            ></TaButton>
            <TaButton
              type="primary"
              pattern="solid"
              shape="square"
              icon="EditOutlined"
            ></TaButton>
            <TaButton
              type="success"
              pattern="dashed"
              shape="square"
              icon="CheckOutlined"
            ></TaButton>
            <TaButton type="danger" icon="SearchOutlined">
              {' '}
            </TaButton>
          </li>
          <li>
            <TaButton
              type="primary"
              shape="circle"
              icon="SearchOutlined"
            ></TaButton>
            <TaButton
              type="success"
              pattern="solid"
              shape="circle"
              icon="EditOutlined"
            ></TaButton>
            <TaButton
              type="danger"
              pattern="dashed"
              shape="circle"
              icon="CheckOutlined"
            ></TaButton>
            <TaButton type="default" loading shape="round">
              加载中
            </TaButton>
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="middle 尺寸">
        <ul className="exp-button-group">
          <li>
            <TaButton
              type="danger"
              size="middle"
              shape="circle"
              icon="HeartOutlined"
            ></TaButton>
            <TaButton type="danger" size="middle" disabled>
              危险
            </TaButton>
            <TaButton type="default" size="middle" loading shape="round">
              加载中
            </TaButton>
          </li>
          <li>
            <TaButton
              type="warning"
              size="middle"
              shape="square"
              icon="BorderOutlined"
            ></TaButton>
            <TaButton
              type="primary"
              size="middle"
              pattern="solid"
              icon="PlusOutlined"
            >
              主要
            </TaButton>
            <TaButton type="success" size="middle" pattern="dashed">
              成功
            </TaButton>
            <TaButton type="danger" size="middle" pattern="borderless">
              危险
            </TaButton>
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="small 尺寸">
        <ul className="exp-button-group">
          <li>
            <TaButton
              type="danger"
              size="small"
              shape="circle"
              icon="HeartOutlined"
            ></TaButton>
            <TaButton type="danger" size="small" disabled>
              危险
            </TaButton>
            <TaButton type="default" size="small" loading shape="round">
              加载中
            </TaButton>
          </li>
          <li>
            <TaButton
              type="warning"
              size="small"
              shape="square"
              icon="SearchOutlined"
            ></TaButton>
            <TaButton
              type="primary"
              size="small"
              pattern="solid"
              icon="PlusOutlined"
            >
              主要
            </TaButton>
            <TaButton type="success" size="small" pattern="dashed">
              成功
            </TaButton>
            <TaButton type="danger" size="small" pattern="borderless">
              危险
            </TaButton>
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="group 组合">
        <ul className="exp-button-group">
          <li>
            <TaButton.Group shape="square" size="small">
              <TaButton type="default" icon="LeftOutlined"></TaButton>
              <TaButton type="default" icon="HomeOutlined"></TaButton>
            </TaButton.Group>
            <TaButton.Group size="small">
              <TaButton type="default" icon="LeftOutlined">
                返回
              </TaButton>
              <TaButton type="default" icon="HomeOutlined">
                首页
              </TaButton>
            </TaButton.Group>
          </li>
          <li>
            <TaButton.Group shape="square" size="large">
              <TaButton type="default" icon="LeftOutlined"></TaButton>
              <TaButton type="default" icon="HomeOutlined"></TaButton>
            </TaButton.Group>
            <TaButton.Group size="large">
              <TaButton type="default" icon="LeftOutlined">
                返回
              </TaButton>
              <TaButton type="default" icon="HomeOutlined">
                首页
              </TaButton>
            </TaButton.Group>
          </li>
          <li>
            <TaButton.Group shape="circle" size="small">
              <TaButton type="default" icon="LeftOutlined"></TaButton>
              <TaButton type="default" icon="HomeOutlined"></TaButton>
            </TaButton.Group>
            <TaButton.Group shape="round" size="small">
              <TaButton type="default" icon="LeftOutlined">
                返回
              </TaButton>
              <TaButton type="default" icon="HomeOutlined">
                首页
              </TaButton>
            </TaButton.Group>
          </li>
          <li>
            <TaButton.Group shape="circle" size="large">
              <TaButton type="default" icon="LeftOutlined"></TaButton>
              <TaButton type="default" icon="HomeOutlined"></TaButton>
            </TaButton.Group>
            <TaButton.Group shape="round" size="large">
              <TaButton type="default" icon="LeftOutlined">
                返回
              </TaButton>
              <TaButton type="default" icon="HomeOutlined">
                首页
              </TaButton>
            </TaButton.Group>
          </li>
          <li>
            <TaButton.Group shape="circle" pattern="solid">
              <TaButton type="primary" icon="LeftOutlined"></TaButton>
              <TaButton type="primary" icon="HomeOutlined"></TaButton>
            </TaButton.Group>
            <TaButton.Group shape="round" pattern="gradient">
              <TaButton type="warning">加购物车</TaButton>
              <TaButton type="danger">立即购买</TaButton>
            </TaButton.Group>
          </li>
        </ul>
      </TaGroup>
    </>
  )
}
