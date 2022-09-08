import {
  AkSwiper,
  AkGroup,
  AkImage,
  showToast,
  SwiperOnChange,
  SwiperOnAnimated
} from '@/index'

export default function ExpSwiper() {
  function renderItems() {
    return (
      <>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <AkSwiper.Item key={item}>
              <div
                className={`exp-swiper-box-item ${
                  index % 2 === 1 ? 'even' : 'odd'
                }`}
              >
                {item}
              </div>
            </AkSwiper.Item>
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
            <AkSwiper.Item key={item}>
              <AkImage className="exp-swiper-image" src={item} />
            </AkSwiper.Item>
          )
        })}
      </>
    )
  }

  const onChange: SwiperOnChange = activeIndex => {
    showToast(`change 到第 ${activeIndex + 1} 张`)
    console.log('change', activeIndex)
  }

  const onAnimated: SwiperOnAnimated = activeIndex => {
    showToast(`第 ${activeIndex + 1} 张 animated`)
    console.log('animated', activeIndex)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkSwiper className="exp-swiper-box">{renderItems()}</AkSwiper>
      </AkGroup>
      <AkGroup title="显示面板指示点 indicatorDots=true">
        <AkSwiper className="exp-swiper-box" indicatorDots>
          {renderImages()}
        </AkSwiper>
      </AkGroup>
      <AkGroup title="显示切换按钮 navigation-buttons=true">
        <AkSwiper className="exp-swiper-box" navigationButtons>
          {renderImages()}
        </AkSwiper>
      </AkGroup>
      <AkGroup title="循环展示 initialCircular=true">
        <AkSwiper className="exp-swiper-box" indicatorDots initialCircular>
          {renderItems()}
        </AkSwiper>
      </AkGroup>
      <AkGroup title="垂直方向 initialVertical=true">
        <AkSwiper className="exp-swiper-box" indicatorDots initialVertical>
          {renderItems()}
        </AkSwiper>
      </AkGroup>
      <AkGroup title="更改指示点颜色">
        <AkSwiper
          className="exp-swiper-box"
          indicatorDots
          indicatorColor="rgba(255, 255, 255, 0.5)"
          indicatorActiveColor="#ff4d4f"
        >
          {renderItems()}
        </AkSwiper>
      </AkGroup>
      <AkGroup title="自动轮播（切换时长设置为3000ms）">
        <AkSwiper
          className="exp-swiper-box"
          indicatorDots
          autoplay
          interval="3000"
        >
          {renderImages()}
        </AkSwiper>
      </AkGroup>
      <AkGroup title="滑动过程时长（设置为2000ms）">
        <AkSwiper className="exp-swiper-box" indicatorDots duration="2000">
          {renderImages()}
        </AkSwiper>
      </AkGroup>
      <AkGroup title="事件监听（change/animated/click）">
        <AkSwiper
          className="exp-swiper-box"
          indicatorDots
          onChange={onChange}
          onAnimated={onAnimated}
          onClick={() => showToast('click 触发')}
        >
          {renderItems()}
        </AkSwiper>
      </AkGroup>
    </>
  )
}
