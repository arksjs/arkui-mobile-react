import { AkCircleProgress, AkStepper, AkGroup } from '@/index'
import { useState } from 'react'

export default function ExpCircleProgress() {
  const [percentage, setPercentage] = useState(50)

  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-circleProgress-box">
          <AkCircleProgress percentage={percentage} />
          <AkStepper
            min="0"
            max="100"
            value={percentage}
            onChange={p => setPercentage(parseInt(p))}
          />
        </div>
      </AkGroup>
      <AkGroup title="参数设置">
        <ul className="exp-circleProgress-list">
          <li>
            <AkCircleProgress percentage={percentage} color="#ff4d4f">
              color
            </AkCircleProgress>
          </li>
          <li>
            <AkCircleProgress percentage={percentage} strokeWidth="2">
              strokeWidth
            </AkCircleProgress>
          </li>
          <li>
            <AkCircleProgress percentage={percentage} size="80">
              size
            </AkCircleProgress>
          </li>
        </ul>
      </AkGroup>
      <AkGroup title="Render Props">
        <div className="exp-circleProgress-box">
          <AkCircleProgress percentage={percentage}>
            {({ progress }) => <>{'已抢' + progress}</>}
          </AkCircleProgress>
        </div>
      </AkGroup>
    </>
  )
}
