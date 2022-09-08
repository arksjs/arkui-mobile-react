import { AkIcon, AkCol, AkRow, AkGroup } from '@/index'
import TaobaoSVG from '../../../assets/icons/taobao.svg?jsx'
import QqSVG from '../../../assets/icons/qq.svg?jsx'
import WechatSVG from '../../../assets/icons/wechat.svg?jsx'
import WeiboSVG from '../../../assets/icons/weibo.svg?jsx'

export default function ExpIcon() {
  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-icon-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon"
                icon="UpOutlined"
                data-index={1}
              ></AkIcon>
              <span className="exp-icon-text">UpOutlined</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon className="exp-icon-icon" icon="DownOutlined"></AkIcon>
              <span className="exp-icon-text">DownOutlined</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon className="exp-icon-icon" icon="LeftOutlined"></AkIcon>
              <span className="exp-icon-text">LeftOutlined</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon className="exp-icon-icon" icon="RightOutlined"></AkIcon>
              <span className="exp-icon-text">RightOutlined</span>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="大小">
        <div className="exp-icon-flex">
          <AkRow gutter={[16, 16]} align="bottom">
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon"
                size="16"
                icon="CheckCircleOutlined"
              ></AkIcon>
              <span className="exp-icon-text">16px</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon"
                size="24"
                icon="CheckCircleOutlined"
              ></AkIcon>
              <span className="exp-icon-text">24px</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon"
                size="32"
                icon="CheckCircleOutlined"
              ></AkIcon>
              <span className="exp-icon-text">32px</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon"
                size="40"
                icon="CheckCircleOutlined"
              ></AkIcon>
              <span className="exp-icon-text">40px</span>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="颜色">
        <div className="exp-icon-flex">
          <AkRow gutter={[16, 16]} align="bottom">
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon color-primary"
                icon="CheckCircleOutlined"
              ></AkIcon>
              <span className="exp-icon-text">蓝色</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon color-success"
                icon="CheckCircleOutlined"
              ></AkIcon>
              <span className="exp-icon-text">绿色</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon color-warning"
                icon="CheckCircleOutlined"
              ></AkIcon>
              <span className="exp-icon-text">橙色</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon color-danger"
                icon="CheckCircleOutlined"
              ></AkIcon>
              <span className="exp-icon-text">红色</span>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="颜色">
        <div className="exp-icon-flex">
          <AkRow gutter={[16, 16]} align="bottom">
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon color-primary"
                icon={QqSVG}
              ></AkIcon>
              <span className="exp-icon-text">QQ</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon color-success"
                icon={WechatSVG}
              ></AkIcon>
              <span className="exp-icon-text">微信</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon color-warning"
                icon={TaobaoSVG}
              ></AkIcon>
              <span className="exp-icon-text">淘宝</span>
            </AkCol>
            <AkCol span="6">
              <AkIcon
                className="exp-icon-icon color-danger"
                icon={WeiboSVG}
              ></AkIcon>
              <span className="exp-icon-text">微博</span>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
    </>
  )
}
