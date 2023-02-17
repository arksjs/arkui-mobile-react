import {
  TaSwiper,
  TaGroup,
  TaImage,
  showToast,
  SwiperOnActiveIndexChange,
  SwiperOnAnimated
} from '@/index'

export default function ExpSwiper() {
  function renderItems() {
    return (
      <>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <TaSwiper.Item key={item}>
              <div
                className={`exp-swiper-box-item ${
                  index % 2 === 1 ? 'even' : 'odd'
                }`}
              >
                {item}
              </div>
            </TaSwiper.Item>
          )
        })}
      </>
    )
  }

  function renderImages() {
    return (
      <>
        {[
          'https://cdn.fox2.cn/vfox/swiper/regular-1.jpg',
          'https://cdn.fox2.cn/vfox/swiper/regular-2.jpg',
          'https://cdn.fox2.cn/vfox/swiper/regular-3.jpg'
        ].map(item => {
          return (
            <TaSwiper.Item key={item}>
              <TaImage className="exp-swiper-image" src={item} />
            </TaSwiper.Item>
          )
        })}
      </>
    )
  }

  const onChange: SwiperOnActiveIndexChange = activeIndex => {
    showToast(`change 到第 ${activeIndex + 1} 张`)
    console.log('change', activeIndex)
  }

  const onAnimated: SwiperOnAnimated = activeIndex => {
    showToast(`第 ${activeIndex + 1} 张 animated`)
    console.log('animated', activeIndex)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaSwiper className="exp-swiper-box">{renderItems()}</TaSwiper>
      </TaGroup>
      <TaGroup title="显示面板指示点 indicatorDots=true">
        <TaSwiper className="exp-swiper-box" indicatorDots>
          {renderImages()}
        </TaSwiper>
      </TaGroup>
      <TaGroup title="显示切换按钮 navigation-buttons=true">
        <TaSwiper className="exp-swiper-box" navigationButtons>
          {renderImages()}
        </TaSwiper>
      </TaGroup>
      <TaGroup title="循环展示 initialCircular=true">
        <TaSwiper className="exp-swiper-box" indicatorDots initialCircular>
          {renderItems()}
        </TaSwiper>
      </TaGroup>
      <TaGroup title="垂直方向 initialVertical=true">
        <TaSwiper className="exp-swiper-box" indicatorDots initialVertical>
          {renderItems()}
        </TaSwiper>
      </TaGroup>
      <TaGroup title="更改指示点颜色">
        <TaSwiper
          className="exp-swiper-box"
          indicatorDots
          indicatorColor="rgba(255, 255, 255, 0.5)"
          indicatorActiveColor="#ff4d4f"
        >
          {renderItems()}
        </TaSwiper>
      </TaGroup>
      <TaGroup title="自动轮播（切换时长设置为3000ms）">
        <TaSwiper
          className="exp-swiper-box"
          indicatorDots
          autoplay
          interval="3000"
        >
          {renderImages()}
        </TaSwiper>
      </TaGroup>
      <TaGroup title="滑动过程时长（设置为2000ms）">
        <TaSwiper className="exp-swiper-box" indicatorDots duration="2000">
          {renderImages()}
        </TaSwiper>
      </TaGroup>
      <TaGroup title="事件监听（change/animated/click）">
        <TaSwiper
          className="exp-swiper-box"
          indicatorDots
          onActiveIndexChange={onChange}
          onAnimated={onAnimated}
          onClick={() => showToast('click 触发')}
        >
          {renderItems()}
        </TaSwiper>
      </TaGroup>
    </>
  )
}
