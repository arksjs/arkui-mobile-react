import {
  TaCountUp,
  TaCell,
  TaGroup,
  TaButton,
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
      <TaGroup title="基础用法">
        <TaCell label="默认">
          <TaCountUp number={1000} />
        </TaCell>
        <TaCell label="千分位 thousands">
          <TaCountUp initialNumber={initialNumber} number={number} thousands />
        </TaCell>
        <TaCell label="小数位 decimalDigits=2">
          <TaCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="速度">
        <TaCell label="speed=slow">
          <TaCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed="slow"
          />
        </TaCell>
        <TaCell label="speed=normal">
          <TaCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed="normal"
          />
        </TaCell>
        <TaCell label="speed=fast">
          <TaCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed="fast"
          />
        </TaCell>
        <TaCell label="speed=10000（固定10秒动画）">
          <TaCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed={10000}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="animated">
          <TaCountUp number="500" onAnimated={onAnimated} />
        </TaCell>
        <TaCell label="cancel" className="exp-countUp-box">
          <div className="exp-countUp-r">
            <TaCountUp
              ref={countUpRef}
              initialNumber="0"
              number={number2}
              thousands
              onAnimated={onAnimated2}
              onCancel={onCancel}
            />
          </div>
          <TaButton onClick={cancel} size="small">
            {isCancel ? '开始' : '取消'}
          </TaButton>
        </TaCell>
      </TaGroup>
    </>
  )
}
