import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import type { CountUpEmits, CountUpProps, CountUpRef } from './types'
import { getNumber, thousands as handleThousands, type FRVFC } from '../helpers'
import { getDuration } from './util'
import { useFrameTask } from '../hooks'

const TaCountUp: FRVFC<CountUpRef, CountUpProps & CountUpEmits> = (
  {
    initialNumber = 0,
    number = 0,
    speed = 'normal',
    thousands = false,
    onCancel,
    onAnimated,
    ...props
  },
  ref
) => {
  const numberCache = useRef(getNumber(initialNumber))
  const [content, setContent] = useState('')

  const classes = classNames('ta-count-up', props.className)

  const { frameStart, frameStop, getRunFrameTaskId } = useFrameTask()

  function cancel() {
    if (getRunFrameTaskId() !== null) {
      frameStop()
      onCancel &&
        onCancel({
          number: numberCache.current
        })
    }
  }

  const update = (newNumber: number) => {
    cancel()

    const decimalDigits = getNumber(props.decimalDigits, 0)
    const carry = Math.pow(10, decimalDigits)
    const from = Math.round(numberCache.current * carry)
    const to = Math.round(newNumber * carry)

    frameStart({
      from,
      to,
      duration: getDuration(newNumber - numberCache.current, speed),
      progress: ({ current }) => {
        numberCache.current = parseFloat(
          (current / carry).toFixed(decimalDigits)
        )
        setContent(
          thousands
            ? handleThousands(numberCache.current.toFixed(decimalDigits))
            : numberCache.current.toFixed(decimalDigits)
        )
      },
      complete: () => {
        onAnimated && onAnimated({ number: numberCache.current })
      }
    })
  }

  useEffect(() => {
    if (number != null && getNumber(number) !== numberCache.current) {
      update(getNumber(number))
    }
  }, [number])

  useImperativeHandle(
    ref,
    () => ({
      cancel
    }),
    [onCancel]
  )

  return <div className={classes}>{content}</div>
}

export default forwardRef(TaCountUp)
