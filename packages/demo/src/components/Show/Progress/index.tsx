import { AkProgress, AkStepper, AkGroup } from '@/index'
import { useState } from 'react'

export default function ExpProgress() {
  const [percentage, setPercentage] = useState(0)

  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-progress-box">
          <AkProgress percentage={percentage} />
        </div>
        <div className="exp-progress-bottom">
          <AkStepper
            min="0"
            max="100"
            value={percentage}
            onChange={p => setPercentage(parseInt(p))}
          />
        </div>
      </AkGroup>
      <AkGroup title="展示文字">
        <ul className="exp-progress-list">
          <li>
            <AkProgress percentage="5" showText />
          </li>
          <li>
            <AkProgress percentage="50" showText />
          </li>
          <li>
            <AkProgress percentage="100" showText />
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="固定进度条">
        <ul className="exp-progress-list fixed-bar">
          <li>
            <AkProgress percentage="5" fixedBar showText />
          </li>
          <li>
            <AkProgress percentage="50" fixedBar showText />
          </li>
          <li>
            <AkProgress percentage="100" fixedBar showText />
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="Slot default">
        <div className="exp-progress-box">
          <AkProgress percentage="5">
            {({ progress }) => <>{'已抢' + progress}</>}
          </AkProgress>
        </div>
      </AkGroup>
      <AkGroup title="自定义颜色">
        <div className="exp-progress-box">
          <AkProgress percentage="50" showText color="#8b1721" />
        </div>
      </AkGroup>
    </>
  )
}
