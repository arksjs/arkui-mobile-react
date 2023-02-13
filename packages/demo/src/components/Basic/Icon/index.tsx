import { TaIcon, TaCol, TaRow, TaGroup } from '@/index'
import TaobaoSVG from '../../../assets/icons/taobao.svg?jsx'
import QqSVG from '../../../assets/icons/qq.svg?jsx'
import WechatSVG from '../../../assets/icons/wechat.svg?jsx'
import WeiboSVG from '../../../assets/icons/weibo.svg?jsx'

export default function ExpIcon() {
  return (
    <>
      <TaGroup title="基础用法">
        <div className="exp-icon-flex">
          <TaRow gutter={[16, 16]}>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon"
                icon="UpOutlined"
                data-index={1}
              ></TaIcon>
              <span className="exp-icon-text">UpOutlined</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon className="exp-icon-icon" icon="DownOutlined"></TaIcon>
              <span className="exp-icon-text">DownOutlined</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon className="exp-icon-icon" icon="LeftOutlined"></TaIcon>
              <span className="exp-icon-text">LeftOutlined</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon className="exp-icon-icon" icon="RightOutlined"></TaIcon>
              <span className="exp-icon-text">RightOutlined</span>
            </TaCol>
          </TaRow>
        </div>
      </TaGroup>
      <TaGroup title="大小">
        <div className="exp-icon-flex">
          <TaRow gutter={[16, 16]} align="bottom">
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon"
                size="16"
                icon="CheckCircleOutlined"
              ></TaIcon>
              <span className="exp-icon-text">16px</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon"
                size="24"
                icon="CheckCircleOutlined"
              ></TaIcon>
              <span className="exp-icon-text">24px</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon"
                size="32"
                icon="CheckCircleOutlined"
              ></TaIcon>
              <span className="exp-icon-text">32px</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon"
                size="40"
                icon="CheckCircleOutlined"
              ></TaIcon>
              <span className="exp-icon-text">40px</span>
            </TaCol>
          </TaRow>
        </div>
      </TaGroup>
      <TaGroup title="颜色">
        <div className="exp-icon-flex">
          <TaRow gutter={[16, 16]} align="bottom">
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon color-primary"
                icon="CheckCircleOutlined"
              ></TaIcon>
              <span className="exp-icon-text">蓝色</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon color-success"
                icon="CheckCircleOutlined"
              ></TaIcon>
              <span className="exp-icon-text">绿色</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon color-warning"
                icon="CheckCircleOutlined"
              ></TaIcon>
              <span className="exp-icon-text">橙色</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon color-danger"
                icon="CheckCircleOutlined"
              ></TaIcon>
              <span className="exp-icon-text">红色</span>
            </TaCol>
          </TaRow>
        </div>
      </TaGroup>
      <TaGroup title="颜色">
        <div className="exp-icon-flex">
          <TaRow gutter={[16, 16]} align="bottom">
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon color-primary"
                icon={QqSVG}
              ></TaIcon>
              <span className="exp-icon-text">QQ</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon color-success"
                icon={WechatSVG}
              ></TaIcon>
              <span className="exp-icon-text">微信</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon color-warning"
                icon={TaobaoSVG}
              ></TaIcon>
              <span className="exp-icon-text">淘宝</span>
            </TaCol>
            <TaCol span="6">
              <TaIcon
                className="exp-icon-icon color-danger"
                icon={WeiboSVG}
              ></TaIcon>
              <span className="exp-icon-text">微博</span>
            </TaCol>
          </TaRow>
        </div>
      </TaGroup>
    </>
  )
}
