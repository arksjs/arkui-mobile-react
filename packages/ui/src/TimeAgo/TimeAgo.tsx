import { useState, useEffect } from 'react'
import classNames from 'classnames'
import type { TimeAgoProps } from './types'
import { getDate } from './util'
import type { VFC } from '../helpers'
import { format } from 'timeago.js'
import { useLocale } from '../ConfigProvider/context'
import { useTimer } from '../hooks'

const TaTimeAgo: VFC<TimeAgoProps> = props => {
  const classes = classNames('ta-time-ago', props.className)
  const [timeAgo, setTimeAgo] = useState('')
  const { locale } = useLocale()

  function update() {
    const d = getDate(props)

    setTimeAgo(d == null ? '' : format(d, locale.lang.replace('-', '_')))
  }

  useTimer(update, props.interval)

  useEffect(update, [props.time, props.formatTemplate])

  return <div className={classes}>{timeAgo}</div>
}

TaTimeAgo.defaultProps = {
  interval: 60
}

export default TaTimeAgo
