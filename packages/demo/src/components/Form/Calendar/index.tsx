import {
  showToast,
  showCalendar,
  SelectorModelValue,
  AkGroup,
  AkCell,
  AkCalendar,
  SelectorDetail
} from '@/index'
import { formatter, parser } from './utils'
import dayjs from 'dayjs'

const minDate = dayjs().startOf('day').subtract(1, 'month').toDate()
const maxDate = dayjs().startOf('day').add(1, 'month').toDate()

const formatValue = (
  formatter(
    [dayjs().startOf('day').add(1, 'month').toDate()],
    'single'
  ) as SelectorDetail
).value
const disableValue = dayjs().startOf('day').add(1, 'month').toDate()

export default function ExpCalendar() {
  function onCallApi() {
    showCalendar({
      mode: 'range',
      showClose: true,
      success: res => {
        console.log('success', res)
        if (res.cancel) {
          showToast('取消了')
        } else {
          showToast(`选择了 ${res.detail.label}`)
        }
      }
    })
  }

  function onChange(res: SelectorModelValue) {
    console.log('change', res)

    showToast('change: ' + (res as any)[0])
  }

  return (
    <>
      <AkGroup title="initialMode=simple">
        <AkCell label="默认">
          <AkCalendar />
        </AkCell>
        <AkCell label="showConfirm=true">
          <AkCalendar showConfirm />
        </AkCell>
        <AkCell label="showClose=true">
          <AkCalendar showClose />
        </AkCell>
        <AkCell label="firstDayOfWeek=1">
          <AkCalendar firstDayOfWeek="1" />
        </AkCell>
        <AkCell label="minDate/maxDate +-1month">
          <AkCalendar minDate={minDate} maxDate={maxDate} />
        </AkCell>
        <AkCell label="formatter/parser">
          <AkCalendar
            formatter={formatter}
            parser={parser}
            value={formatValue}
          />
        </AkCell>
        <AkCell label="禁用">
          <AkCalendar disabled value={disableValue} />
        </AkCell>
      </AkGroup>
      <AkGroup title="initialMode=range">
        <AkCell label="默认">
          <AkCalendar initialMode="range" />
        </AkCell>
        <AkCell label="allowSameDay">
          <AkCalendar initialMode="range" allowSameDay />
        </AkCell>
        <AkCell label="maxRange=5">
          <AkCalendar initialMode="range" maxRange="5" />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="change">
          <AkCalendar onChange={onChange} />
        </AkCell>
      </AkGroup>
      <AkGroup title="API">
        <AkCell label="showCalendar" isLink onClick={() => onCallApi()} />
      </AkGroup>
    </>
  )
}
