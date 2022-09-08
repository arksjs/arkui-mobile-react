import { AkImage, AkButton, AkGroup, AkEmpty } from '@/index'

export default function ExpEmpty() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkEmpty description="暂无内容" />
      </AkGroup>
      <AkGroup title="其他类型">
        <AkEmpty description="出错了" type="error" />
        <AkEmpty description="网络错误" type="network" />
        <AkEmpty description="搜索不到" type="search" />
      </AkGroup>
      <AkGroup title="Slot default">
        <AkEmpty description="网络错误" type="network">
          <AkButton type="primary" size="small">
            刷新试试
          </AkButton>
        </AkEmpty>
      </AkGroup>
      <AkGroup title="renderImage">
        <AkEmpty
          description="网站被小猫咪吃了"
          renderImage={() => (
            <AkImage
              className="exp-empty-custom-image"
              src="https://cdn.fox2.cn/vfox/swiper/different-1.jpg"
            />
          )}
        />
      </AkGroup>
    </>
  )
}
