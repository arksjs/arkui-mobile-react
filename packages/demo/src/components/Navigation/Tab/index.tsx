import { AkTab, AkGroup, TabOnChange, showToast } from '@/index'
import { shortTabList, tabList, mixTabList, subTabList } from './data'

export default function ExpTab() {
  const onChange: TabOnChange = (value, index) => {
    console.log('change', value, index)
    showToast(`切换到第${index + 1}个`)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-tab-box">
          <AkTab options={shortTabList} />
        </div>
      </AkGroup>
      <AkGroup title="滚动（阈值 scrollThreshold = 4）">
        <div className="exp-tab-box">
          <AkTab options={tabList} />
        </div>
      </AkGroup>
      <AkGroup title="Mix">
        <div className="exp-tab-box">
          <AkTab options={mixTabList} activeValue={2} />
        </div>
      </AkGroup>
      <AkGroup title="带副标签">
        <div className="exp-tab-box">
          <AkTab options={subTabList} />
        </div>
      </AkGroup>
      <AkGroup title="change 事件">
        <div className="exp-tab-box">
          <AkTab options={shortTabList} onChange={onChange} />
        </div>
      </AkGroup>
    </>
  )
}
