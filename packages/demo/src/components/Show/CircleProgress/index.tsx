import { TaCircleProgress, TaStepper, TaGroup } from '@/index'
import { useState } from 'react'

export default function ExpCircleProgress() {
  const [percentage, setPercentage] = useState(50)

  return (
    <>
      <TaGroup title="基础用法">
        <div className="exp-circleProgress-box">
          <TaCircleProgress percentage={percentage} />
          <TaStepper
            min="0"
            max="100"
            value={percentage}
            onChange={p => setPercentage(parseInt(p))}
          />
        </div>
      </TaGroup>
      <TaGroup title="参数设置">
        <ul className="exp-circleProgress-list">
          <li>
            <TaCircleProgress percentage={percentage} color="#ff4d4f">
              color
            </TaCircleProgress>
          </li>
          <li>
            <TaCircleProgress percentage={percentage} strokeWidth="2">
              strokeWidth
            </TaCircleProgress>
          </li>
          <li>
            <TaCircleProgress percentage={percentage} size="80">
              size
            </TaCircleProgress>
          </li>
        </ul>
      </TaGroup>
      <TaGroup title="Render Props">
        <div className="exp-circleProgress-box">
          <TaCircleProgress percentage={percentage}>
            {({ progress }) => <>{'已抢' + progress}</>}
          </TaCircleProgress>
        </div>
      </TaGroup>
    </>
  )
}
