import { TaTab, TaGroup, TabOnChange, showToast } from '@/index'
import { shortTabList, tabList, mixTabList, subTabList } from './data'

export default function ExpTab() {
  const onChange: TabOnChange = (value, index) => {
    console.log('change', value, index)
    showToast(`切换到第${index + 1}个`)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <div className="exp-tab-box">
          <TaTab options={shortTabList} />
        </div>
      </TaGroup>
      <TaGroup title="滚动（阈值 scrollThreshold = 4）">
        <div className="exp-tab-box">
          <TaTab options={tabList} />
        </div>
      </TaGroup>
      <TaGroup title="Mix">
        <div className="exp-tab-box">
          <TaTab options={mixTabList} activeValue={2} />
        </div>
      </TaGroup>
      <TaGroup title="带副标签">
        <div className="exp-tab-box">
          <TaTab options={subTabList} />
        </div>
      </TaGroup>
      <TaGroup title="change 事件">
        <div className="exp-tab-box">
          <TaTab options={shortTabList} onChange={onChange} />
        </div>
      </TaGroup>
    </>
  )
}
