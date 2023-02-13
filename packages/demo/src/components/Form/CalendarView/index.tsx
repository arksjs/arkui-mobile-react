import {
  TaCalendar,
  TaNoticeBar,
  TaCell,
  TaGroup,
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
      <TaNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Calendar"
      />
      <TaGroup title="initialMode=single">
        <TaCell label="value:"> {viewValue} </TaCell>
        <TaCalendar.View
          value={viewValue}
          onChange={v => setViewValue(v as string)}
          formatter={formatter}
          parser={parser}
        />
      </TaGroup>
      <TaGroup title="initialMode=range">
        <TaCell label="value:"> {viewRangeValue} </TaCell>
        <TaCalendar.View
          initialMode="range"
          value={viewRangeValue}
          onChange={v => setViewRangeValue(v as string)}
          formatter={formatter}
          parser={parser}
        />
      </TaGroup>
      <TaGroup title="select 事件">
        <TaCalendar.View onSelect={onSelect} />
      </TaGroup>
    </>
  )
}
