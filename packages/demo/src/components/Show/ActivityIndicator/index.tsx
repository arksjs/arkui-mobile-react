import { TaActivityIndicator, TaGroup } from '@/index'

export default function ExpActivityIndicator() {
  return (
    <>
      <TaGroup title="基础用法">
        <div className="exp-activityIndicator-box">
          <TaActivityIndicator />
        </div>
      </TaGroup>
      <TaGroup title="颜色 color=#ff4d4f">
        <div className="exp-activityIndicator-box">
          <TaActivityIndicator color="#ff4d4f" />
        </div>
      </TaGroup>
      <TaGroup title="大小 size=48">
        <div className="exp-activityIndicator-box">
          <TaActivityIndicator size="48" />
        </div>
      </TaGroup>
    </>
  )
}
