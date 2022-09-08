import {
  AkCountUp,
  AkCell,
  AkGroup,
  AkButton,
  showToast,
  CountUpOnAnimated,
  CountUpOnCancel,
  CountUpRef
} from '@/index'
import { useCallback, useRef, useState } from 'react'

const initialNumber = 1000
const number = 5000

export default function ExpCountUp() {
  const countUpRef = useRef<CountUpRef>(null)
  const [number2, setNumber2] = useState(1000)
  const [isCancel, setIsCancel] = useState(false)

  const onAnimated: CountUpOnAnimated = e => {
    console.log('animated', e)
    showToast('动画结束')
  }

  const onAnimated2: CountUpOnAnimated = e => {
    console.log('animated', e)
  }

  const onCancel: CountUpOnCancel = e => {
    console.log('cancel', e)
  }

  const cancel = useCallback(() => {
    if (!isCancel) {
      countUpRef.current?.cancel()
      showToast('已取消')
    } else {
      setNumber2(number2 > 500 ? 0 : 1000)
    }

    setIsCancel(!isCancel)
  }, [isCancel, number2])

  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="默认">
          <AkCountUp number={1000} />
        </AkCell>
        <AkCell label="千分位 thousands">
          <AkCountUp initialNumber={initialNumber} number={number} thousands />
        </AkCell>
        <AkCell label="小数位 decimalDigits=2">
          <AkCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="速度">
        <AkCell label="speed=slow">
          <AkCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed="slow"
          />
        </AkCell>
        <AkCell label="speed=normal">
          <AkCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed="normal"
          />
        </AkCell>
        <AkCell label="speed=fast">
          <AkCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed="fast"
          />
        </AkCell>
        <AkCell label="speed=10000（固定10秒动画）">
          <AkCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed={10000}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="animated">
          <AkCountUp number="500" onAnimated={onAnimated} />
        </AkCell>
        <AkCell label="cancel" className="exp-countUp-box">
          <div className="exp-countUp-r">
            <AkCountUp
              ref={countUpRef}
              initialNumber="0"
              number={number2}
              thousands
              onAnimated={onAnimated2}
              onCancel={onCancel}
            />
          </div>
          <AkButton onClick={cancel} size="small">
            {isCancel ? '开始' : '取消'}
          </AkButton>
        </AkCell>
      </AkGroup>
    </>
  )
}
