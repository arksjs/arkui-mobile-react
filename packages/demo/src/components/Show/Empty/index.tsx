import { TaImage, TaButton, TaGroup, TaEmpty } from '@/index'

export default function ExpEmpty() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaEmpty description="暂无内容" />
      </TaGroup>
      <TaGroup title="其他类型">
        <TaEmpty description="出错了" type="error" />
        <TaEmpty description="网络错误" type="network" />
        <TaEmpty description="搜索不到" type="search" />
      </TaGroup>
      <TaGroup title="Slot default">
        <TaEmpty description="网络错误" type="network">
          <TaButton type="primary" size="small">
            刷新试试
          </TaButton>
        </TaEmpty>
      </TaGroup>
      <TaGroup title="renderImage">
        <TaEmpty
          description="网站被小猫咪吃了"
          renderImage={() => (
            <TaImage
              className="exp-empty-custom-image"
              src="https://cdn.fox2.cn/vfox/swiper/different-1.jpg"
            />
          )}
        />
      </TaGroup>
    </>
  )
}
