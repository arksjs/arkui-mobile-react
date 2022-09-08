import {
  CountDownOnEnd,
  CountDownOnPause,
  CountDownOnResume,
  showToast,
  AkGroup,
  AkCell,
  AkCountDown,
  AkButton,
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
      <AkGroup title="基础用法">
        <AkCell label="默认" className="exp-countDown-box">
          <AkCountDown initialTiming={300 * 1000} />
        </AkCell>
        <AkCell label="显示天数" className="exp-countDown-box">
          <AkCountDown initialTiming={1.5 * 24 * 3600 * 1000} showDays />
        </AkCell>
      </AkGroup>
      <AkGroup title="Slot render">
        <AkCell label="中文显示" className="exp-countDown-box">
          <AkCountDown
            initialTiming={300 * 1000}
            render={countDown =>
              `${countDown.fullHours}时${countDown.minutes}分${countDown.seconds}秒`
            }
          />
        </AkCell>
        <AkCell label="毫秒" className="exp-countDown-box">
          <AkCountDown
            initialTiming={300 * 1000}
            render={countDown =>
              `${countDown.fullHours}:${countDown.minutes}:${countDown.seconds}.${countDown.milliseconds}`
            }
          ></AkCountDown>
        </AkCell>
        <AkCell label="自定义风格" className="exp-countDown-box">
          <AkCountDown
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
          ></AkCountDown>
        </AkCell>
      </AkGroup>
      <AkGroup title="时间监听">
        <AkCell label="onPause/onResume/onEnd" className="exp-countDown-box">
          <div className="exp-countDown-time-r">
            <AkCountDown
              initialTiming={100 * 1000}
              onPause={onPause}
              onResume={onResume}
              onEnd={onEnd}
              ref={ref}
            />
          </div>
          <AkButton onClick={onPauseOrResume} size="small">
            {paused ? '恢复' : '暂停'}
          </AkButton>
          <AkButton onClick={onReset} size="small" type="danger">
            重置
          </AkButton>
        </AkCell>
      </AkGroup>
    </>
  )
}
