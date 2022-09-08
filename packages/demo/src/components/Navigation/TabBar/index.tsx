import { AkTabBar, AkFixed, AkGroup } from '@/index'
import { baseList, badgeList, imageList } from './data'
import TaobaoSvg from '../../../assets/icons/taobao.svg?jsx'
import QqSvg from '../../../assets/icons/qq.svg?jsx'
import WechatSvg from '../../../assets/icons/wechat.svg?jsx'
import WeiboSvg from '../../../assets/icons/weibo.svg?jsx'

const customIconList = [
  {
    value: 'wechat',
    label: '微信',
    icon: WechatSvg
  },
  {
    value: 'qq',
    label: 'QQ',
    icon: QqSvg
  },
  {
    value: 'weibo',
    label: '微博',
    icon: WeiboSvg
  },
  {
    value: 'taobao',
    label: '淘宝',
    icon: TaobaoSvg
  }
]

export default function ExpTabBar() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkTabBar options={baseList} />
      </AkGroup>
      <AkGroup title="徽标">
        <AkTabBar options={badgeList} />
      </AkGroup>
      <AkGroup title="自定义图标">
        <AkTabBar options={customIconList} />
      </AkGroup>
      <AkGroup title="自定义颜色">
        <AkTabBar
          color="#8B8DB8"
          activeColor="#ffffff"
          style={{ backgroundColor: '#6667ab' }}
          options={baseList}
        />
      </AkGroup>
      <AkGroup title="自定义图片（icon=URL）">
        <AkTabBar className="exp-tabBar-custom" options={imageList} />
      </AkGroup>
      <AkGroup title="配合 Fixed 实现置底">
        <AkFixed>
          <AkTabBar options={baseList} />
        </AkFixed>
      </AkGroup>
    </>
  )
}
