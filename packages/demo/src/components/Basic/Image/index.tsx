import { AkImage, AkCol, AkRow, AkGroup } from '@/index'

const imageUrl = 'https://cdn.fox2.cn/vfox/swiper/center-2.jpg'

export default function ExpImage() {
  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-image-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1}
              ></AkImage>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="填充模式">
        <div className="exp-image-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="scaleToFill"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">scaleToFill</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="aspectFit"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">aspectFit</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="aspectFill"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">aspectFill</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="widthFix"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">widthFix</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="top"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">top</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="bottom"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">bottom</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="left"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">left</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="right"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">right</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="top left"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">top left</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="top right"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">top right</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="bottom left"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">bottom left</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                mode="bottom right"
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">bottom right</span>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="设置宽高比（设置后高度按比例缩放）">
        <div className="exp-image-flex">
          <AkRow gutter={[16, 16]} align="bottom">
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1}
              ></AkImage>
              <span className="exp-image-text">aspect-ratio=1</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1.5}
              ></AkImage>
              <span className="exp-image-text">aspect-ratio=1.5</span>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={0.5}
              ></AkImage>
              <span className="exp-image-text">aspect-ratio=0.5</span>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="加载/加载错误">
        <div className="exp-image-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="8">
              <AkImage className="exp-image-image" aspectRatio={1}></AkImage>
            </AkCol>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src="error"
                aspectRatio={1}
              ></AkImage>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
      <AkGroup title="懒加载">
        <div className="exp-image-flex">
          <AkRow gutter={[16, 16]}>
            <AkCol span="8">
              <AkImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1}
                lazyLoad
              ></AkImage>
            </AkCol>
          </AkRow>
        </div>
      </AkGroup>
    </>
  )
}
