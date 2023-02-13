import {
  showToast,
  showDatePicker,
  SelectorModelValue,
  DatePickerOptionFilter,
  TaGroup,
  TaCell,
  TaDatePicker
} from '@/index'
import dayjs from 'dayjs'

const title = 'DatePicker'
const minDate = dayjs().startOf('day').subtract(4, 'year').toDate()
const maxDate = dayjs().startOf('day').add(5, 'year').toDate()
const disableValue = new Date()

export default function ExpDatePicker() {
  const filter: DatePickerOptionFilter = (number, type) => {
    if (type === 'second' && number % 5 !== 0) {
      return false
    }

    return true
  }

  function onChange(res: SelectorModelValue) {
    console.log('change', res)
    showToast(`值改为 ${res}`)
  }

  function onCallApi() {
    showDatePicker({
      title,
      success: res => {
        console.log(res)
        if (res.cancel) {
          showToast('取消了')
        } else {
          showToast(`选择了 ${res.detail.label}`)
        }
      }
    })
  }

  return (
    <>
      <TaGroup title="initialMode">
        <TaCell label="日期 date">
          <TaDatePicker initialMode="date" />
        </TaCell>
        <TaCell label="时间 time">
          <TaDatePicker initialMode="time" />
        </TaCell>
        <TaCell label="日期时间 datetime">
          <TaDatePicker initialMode="datetime" />
        </TaCell>
        <TaCell label="分秒 minute-second">
          <TaDatePicker initialMode="minute-second" />
        </TaCell>
        <TaCell label="时分 hour-minute">
          <TaDatePicker initialMode="hour-minute" />
        </TaCell>
        <TaCell label="天时 day-hour">
          <TaDatePicker initialMode="day-hour" />
        </TaCell>
        <TaCell label="月日 month-day">
          <TaDatePicker initialMode="month-day" />
        </TaCell>
        <TaCell label="月日时 month-day-hour">
          <TaDatePicker initialMode="month-day-hour" />
        </TaCell>
        <TaCell label="月日时分 month-day-hour-minute">
          <TaDatePicker initialMode="month-day-hour-minute" />
        </TaCell>
        <TaCell label="年月 year-month">
          <TaDatePicker initialMode="year-month" />
        </TaCell>
        <TaCell label="年月日时 year-month-day-hour">
          <TaDatePicker initialMode="year-month-day-hour" />
        </TaCell>
        <TaCell label="年月日时分 year-month-day-hour-minute">
          <TaDatePicker initialMode="year-month-day-hour-minute" />
        </TaCell>
      </TaGroup>
      <TaGroup title="minDate & maxDate">
        <TaCell label="-5year ~ 5year">
          <TaDatePicker
            initialMode="date"
            minDate={maxDate}
            maxDate={minDate}
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="filter">
        <TaCell label="秒步进5">
          <TaDatePicker initialMode="datetime" filter={filter} />
        </TaCell>
      </TaGroup>
      <TaGroup title="formatTemplate">
        <TaCell label="YYYY年MM月DD日">
          <TaDatePicker
            initialMode="date"
            formatTemplate="YYYY年MM月DD日"
            v-model="formatValue"
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="disabled">
        <TaCell label="禁用">
          <TaDatePicker initialMode="date" disabled value={disableValue} />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="change">
          <TaDatePicker initialMode="datetime" onChange={onChange} />
        </TaCell>
      </TaGroup>
      <TaGroup title="API">
        <TaCell label="showDatePicker" isLink onClick={() => onCallApi()} />
      </TaGroup>
    </>
  )
}
