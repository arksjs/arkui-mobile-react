import { TaProgress, TaStepper, TaGroup } from '@/index'
import { useState } from 'react'

export default function ExpProgress() {
  const [percentage, setPercentage] = useState(0)

  return (
    <>
      <TaGroup title="基础用法">
        <div className="exp-progress-box">
          <TaProgress percentage={percentage} />
        </div>
        <div className="exp-progress-bottom">
          <TaStepper
            min="0"
            max="100"
            value={percentage}
            onChange={p => setPercentage(parseInt(p))}
          />
        </div>
      </TaGroup>
      <TaGroup title="展示文字">
        <ul className="exp-progress-list">
          <li>
            <TaProgress percentage="5" showText />
          </li>
          <li>
            <TaProgress percentage="50" showText />
          </li>
          <li>
            <TaProgress percentage="100" showText />
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="固定进度条">
        <ul className="exp-progress-list fixed-bar">
          <li>
            <TaProgress percentage="5" fixedBar showText />
          </li>
          <li>
            <TaProgress percentage="50" fixedBar showText />
          </li>
          <li>
            <TaProgress percentage="100" fixedBar showText />
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="Slot default">
        <div className="exp-progress-box">
          <TaProgress percentage="5">
            {({ progress }) => <>{'已抢' + progress}</>}
          </TaProgress>
        </div>
      </TaGroup>
      <TaGroup title="自定义颜色">
        <div className="exp-progress-box">
          <TaProgress percentage="50" showText color="#8b1721" />
        </div>
      </TaGroup>
    </>
  )
}
