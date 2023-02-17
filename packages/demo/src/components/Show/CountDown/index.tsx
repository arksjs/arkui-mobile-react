import {
  CountDownOnEnd,
  CountDownOnPause,
  CountDownOnResume,
  showToast,
  TaGroup,
  TaCell,
  TaCountDown,
  TaButton,
  CountDownRef
} from '@/index'
import { useRef, useState } from 'react'

export default function ExpCountDown() {
  const ref = useRef<CountDownRef>(null)
  const [paused, setPaused] = useState(false)

  const onPause: CountDownOnPause = e => {
    console.log('pause', e)
    setPaused(true)
    showToast('已暂停')
  }

  const onResume: CountDownOnResume = e => {
    console.log('resume', e)
    setPaused(false)
    showToast('继续计时')
  }

  const onEnd: CountDownOnEnd = e => {
    console.log('end', e)
    showToast('计时结束')
  }

  function onPauseOrResume() {
    if (paused) {
      ref.current?.resume()
    } else {
      ref.current?.pause()
    }
  }

  function onReset() {
    ref.current?.reset(100 * 1000)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="默认" className="exp-countDown-box">
          <TaCountDown initialTiming={300 * 1000} />
        </TaCell>
        <TaCell label="显示天数" className="exp-countDown-box">
          <TaCountDown initialTiming={1.5 * 24 * 3600 * 1000} showDays />
        </TaCell>
      </TaGroup>
      <TaGroup title="Slot render">
        <TaCell label="中文显示" className="exp-countDown-box">
          <TaCountDown
            initialTiming={300 * 1000}
            render={countDown =>
              `${countDown.fullHours}时${countDown.minutes}分${countDown.seconds}秒`
            }
          />
        </TaCell>
        <TaCell label="毫秒" className="exp-countDown-box">
          <TaCountDown
            initialTiming={300 * 1000}
            render={countDown =>
              `${countDown.fullHours}:${countDown.minutes}:${countDown.seconds}.${countDown.milliseconds}`
            }
          ></TaCountDown>
        </TaCell>
        <TaCell label="自定义风格" className="exp-countDown-box">
          <TaCountDown
            initialTiming={300 * 1000}
            render={countDown => (
              <>
                <span className="exp-countDown-time-item">
                  {countDown.fullHours}
                </span>
                <span className="exp-countDown-time-item">
                  {countDown.minutes}
                </span>
                <span className="exp-countDown-time-item">
                  {countDown.seconds}
                </span>
              </>
            )}
          ></TaCountDown>
        </TaCell>
      </TaGroup>
      <TaGroup title="时间监听">
        <TaCell label="onPause/onResume/onEnd" className="exp-countDown-box">
          <div className="exp-countDown-time-r">
            <TaCountDown
              initialTiming={100 * 1000}
              onPause={onPause}
              onResume={onResume}
              onEnd={onEnd}
              ref={ref}
            />
          </div>
          <TaButton onClick={onPauseOrResume} size="small">
            {paused ? '恢复' : '暂停'}
          </TaButton>
          <TaButton onClick={onReset} size="small" type="danger">
            重置
          </TaButton>
        </TaCell>
      </TaGroup>
    </>
  )
}
