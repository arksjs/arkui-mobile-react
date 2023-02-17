import {
  showToast,
  showCalendar,
  SelectorModelValue,
  TaGroup,
  TaCell,
  TaCalendar,
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
      <TaGroup title="initialMode=simple">
        <TaCell label="默认">
          <TaCalendar />
        </TaCell>
        <TaCell label="showConfirm=true">
          <TaCalendar showConfirm />
        </TaCell>
        <TaCell label="showClose=true">
          <TaCalendar showClose />
        </TaCell>
        <TaCell label="firstDayOfWeek=1">
          <TaCalendar firstDayOfWeek="1" />
        </TaCell>
        <TaCell label="minDate/maxDate +-1month">
          <TaCalendar minDate={minDate} maxDate={maxDate} />
        </TaCell>
        <TaCell label="formatter/parser">
          <TaCalendar
            formatter={formatter}
            parser={parser}
            value={formatValue}
          />
        </TaCell>
        <TaCell label="禁用">
          <TaCalendar disabled value={disableValue} />
        </TaCell>
      </TaGroup>
      <TaGroup title="initialMode=range">
        <TaCell label="默认">
          <TaCalendar initialMode="range" />
        </TaCell>
        <TaCell label="allowSameDay">
          <TaCalendar initialMode="range" allowSameDay />
        </TaCell>
        <TaCell label="maxRange=5">
          <TaCalendar initialMode="range" maxRange="5" />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="change">
          <TaCalendar onChange={onChange} />
        </TaCell>
      </TaGroup>
      <TaGroup title="API">
        <TaCell label="showCalendar" isLink onClick={() => onCallApi()} />
      </TaGroup>
    </>
  )
}
