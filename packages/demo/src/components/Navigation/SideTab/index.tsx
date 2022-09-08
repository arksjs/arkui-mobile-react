import { AkSideTab, AkGroup } from '@/index'
import { mixTabList, tabList } from '../Tab/data'

export default function ExpSideTab() {
  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-sideTab-box">
          <AkSideTab options={tabList} />
        </div>
      </AkGroup>
      <AkGroup title="Mix">
        <div className="exp-sideTab-box">
          <AkSideTab options={mixTabList} />
        </div>
      </AkGroup>
    </>
  )
}
