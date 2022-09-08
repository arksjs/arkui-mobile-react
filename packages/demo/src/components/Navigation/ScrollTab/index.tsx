import { AkScrollTab, AkGroup, ScrollTabOnChange } from '@/index'

const offsetTop = 52
const offsetBottom = 12

export default function ExpScrollTab() {
  const onChange: ScrollTabOnChange = res => {
    console.log('change', res)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkScrollTab
          className="exp-scrollTab-boxs"
          stickyOffsetTop={offsetTop}
          stickyOffsetBottom={offsetBottom}
          onChange={onChange}
        >
          <AkScrollTab.Item name="Dust Red">
            <div className="exp-scrollTab-box box-1"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Volcano">
            <div className="exp-scrollTab-box box-2"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Sunset Orange">
            <div className="exp-scrollTab-box box-3"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Calendula Gold">
            <div className="exp-scrollTab-box box-4"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Sunrise Yellow">
            <div className="exp-scrollTab-box box-5"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Lime">
            <div className="exp-scrollTab-box box-6"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Polar Green">
            <div className="exp-scrollTab-box box-7"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Cyan">
            <div className="exp-scrollTab-box box-8"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Daybreak Blue">
            <div className="exp-scrollTab-box box-9"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Geek Blue">
            <div className="exp-scrollTab-box box-10"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Golden Purple">
            <div className="exp-scrollTab-box box-11"></div>
          </AkScrollTab.Item>
          <AkScrollTab.Item name="Magenta">
            <div className="exp-scrollTab-box box-12"></div>
          </AkScrollTab.Item>
        </AkScrollTab>
      </AkGroup>
    </>
  )
}
