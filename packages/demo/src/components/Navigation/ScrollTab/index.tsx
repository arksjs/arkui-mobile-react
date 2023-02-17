import { TaScrollTab, TaGroup, ScrollTabOnChange } from '@/index'

const offsetTop = 52
const offsetBottom = 12

export default function ExpScrollTab() {
  const onChange: ScrollTabOnChange = res => {
    console.log('change', res)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaScrollTab
          className="exp-scrollTab-boxs"
          stickyOffsetTop={offsetTop}
          stickyOffsetBottom={offsetBottom}
          onChange={onChange}
        >
          <TaScrollTab.Item name="Dust Red">
            <div className="exp-scrollTab-box box-1"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Volcano">
            <div className="exp-scrollTab-box box-2"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Sunset Orange">
            <div className="exp-scrollTab-box box-3"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Calendula Gold">
            <div className="exp-scrollTab-box box-4"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Sunrise Yellow">
            <div className="exp-scrollTab-box box-5"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Lime">
            <div className="exp-scrollTab-box box-6"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Polar Green">
            <div className="exp-scrollTab-box box-7"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Cyan">
            <div className="exp-scrollTab-box box-8"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Daybreak Blue">
            <div className="exp-scrollTab-box box-9"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Geek Blue">
            <div className="exp-scrollTab-box box-10"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Golden Purple">
            <div className="exp-scrollTab-box box-11"></div>
          </TaScrollTab.Item>
          <TaScrollTab.Item name="Magenta">
            <div className="exp-scrollTab-box box-12"></div>
          </TaScrollTab.Item>
        </TaScrollTab>
      </TaGroup>
    </>
  )
}
