import { AkActivityIndicator, AkGroup } from '@/index'

export default function ExpActivityIndicator() {
  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-activityIndicator-box">
          <AkActivityIndicator />
        </div>
      </AkGroup>
      <AkGroup title="颜色 color=#ff4d4f">
        <div className="exp-activityIndicator-box">
          <AkActivityIndicator color="#ff4d4f" />
        </div>
      </AkGroup>
      <AkGroup title="大小 size=48">
        <div className="exp-activityIndicator-box">
          <AkActivityIndicator size="48" />
        </div>
      </AkGroup>
    </>
  )
}
