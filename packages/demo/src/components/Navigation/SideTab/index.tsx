import { TaSideTab, TaGroup } from '@/index'
import { mixTabList, tabList } from '../Tab/data'

export default function ExpSideTab() {
  return (
    <>
      <TaGroup title="基础用法">
        <div className="exp-sideTab-box">
          <TaSideTab options={tabList} />
        </div>
      </TaGroup>
      <TaGroup title="Mix">
        <div className="exp-sideTab-box">
          <TaSideTab options={mixTabList} />
        </div>
      </TaGroup>
    </>
  )
}
