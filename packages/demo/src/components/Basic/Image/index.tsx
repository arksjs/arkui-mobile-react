import { TaImage, TaCol, TaRow, TaGroup } from '@/index'

const imageUrl = 'https://cdn.fox2.cn/vfox/swiper/center-2.jpg'

export default function ExpImage() {
  return (
    <>
      <TaGroup title="基础用法">
        <div className="exp-image-flex">
          <TaRow gutter={[16, 16]}>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1}
              ></TaImage>
            </TaCol>
          </TaRow>
        </div>
      </TaGroup>
      <TaGroup title="填充模式">
        <div className="exp-image-flex">
          <TaRow gutter={[16, 16]}>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="scaleToFill"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">scaleToFill</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="aspectFit"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">aspectFit</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="aspectFill"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">aspectFill</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="widthFix"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">widthFix</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="top"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">top</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="bottom"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">bottom</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="left"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">left</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="right"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">right</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="top left"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">top left</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="top right"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">top right</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="bottom left"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">bottom left</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                mode="bottom right"
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">bottom right</span>
            </TaCol>
          </TaRow>
        </div>
      </TaGroup>
      <TaGroup title="设置宽高比（设置后高度按比例缩放）">
        <div className="exp-image-flex">
          <TaRow gutter={[16, 16]} align="bottom">
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1}
              ></TaImage>
              <span className="exp-image-text">aspect-ratio=1</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1.5}
              ></TaImage>
              <span className="exp-image-text">aspect-ratio=1.5</span>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={0.5}
              ></TaImage>
              <span className="exp-image-text">aspect-ratio=0.5</span>
            </TaCol>
          </TaRow>
        </div>
      </TaGroup>
      <TaGroup title="加载/加载错误">
        <div className="exp-image-flex">
          <TaRow gutter={[16, 16]}>
            <TaCol span="8">
              <TaImage className="exp-image-image" aspectRatio={1}></TaImage>
            </TaCol>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src="error"
                aspectRatio={1}
              ></TaImage>
            </TaCol>
          </TaRow>
        </div>
      </TaGroup>
      <TaGroup title="懒加载">
        <div className="exp-image-flex">
          <TaRow gutter={[16, 16]}>
            <TaCol span="8">
              <TaImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1}
                lazyLoad
              ></TaImage>
            </TaCol>
          </TaRow>
        </div>
      </TaGroup>
    </>
  )
}
