import type { TimeAgoProps } from './types'
import { dayjs, type Dayjs } from '../helpers'

export function getDate(props: TimeAgoProps) {
  let djs: Dayjs | null = null

  const { time, formatTemplate } = props

  if (time instanceof Date || typeof time === 'number') {
    djs = dayjs(time)
  } else if (typeof time === 'string' && formatTemplate) {
    djs = dayjs(time, formatTemplate)
  }

  if (djs && djs.isValid()) {
    return djs.toDate()
  }

  return null
}
