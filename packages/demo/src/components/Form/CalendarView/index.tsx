import {
  AkCalendar,
  AkNoticeBar,
  AkCell,
  AkGroup,
  CalendarOnSelect,
  showToast
} from '@/index'
import { useState } from 'react'
import { formatter, parser } from '../Calendar/utils'

export default function ExpCalendarView() {
  const [viewValue, setViewValue] = useState('')
  const [viewRangeValue, setViewRangeValue] = useState('')

  const onSelect: CalendarOnSelect = res => {
    console.log('select', res)

    showToast(`选择：${res.label}`)
  }

  return (
    <>
      <AkNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Calendar"
      />
      <AkGroup title="initialMode=single">
        <AkCell label="value:"> {viewValue} </AkCell>
        <AkCalendar.View
          value={viewValue}
          onChange={v => setViewValue(v as string)}
          formatter={formatter}
          parser={parser}
        />
      </AkGroup>
      <AkGroup title="initialMode=range">
        <AkCell label="value:"> {viewRangeValue} </AkCell>
        <AkCalendar.View
          initialMode="range"
          value={viewRangeValue}
          onChange={v => setViewRangeValue(v as string)}
          formatter={formatter}
          parser={parser}
        />
      </AkGroup>
      <AkGroup title="select 事件">
        <AkCalendar.View onSelect={onSelect} />
      </AkGroup>
    </>
  )
}
