import {
  showToast,
  showDatePicker,
  SelectorModelValue,
  DatePickerOptionFilter,
  AkGroup,
  AkCell,
  AkDatePicker
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
      <AkGroup title="initialMode">
        <AkCell label="日期 date">
          <AkDatePicker initialMode="date" />
        </AkCell>
        <AkCell label="时间 time">
          <AkDatePicker initialMode="time" />
        </AkCell>
        <AkCell label="日期时间 datetime">
          <AkDatePicker initialMode="datetime" />
        </AkCell>
        <AkCell label="分秒 minute-second">
          <AkDatePicker initialMode="minute-second" />
        </AkCell>
        <AkCell label="时分 hour-minute">
          <AkDatePicker initialMode="hour-minute" />
        </AkCell>
        <AkCell label="天时 day-hour">
          <AkDatePicker initialMode="day-hour" />
        </AkCell>
        <AkCell label="月日 month-day">
          <AkDatePicker initialMode="month-day" />
        </AkCell>
        <AkCell label="月日时 month-day-hour">
          <AkDatePicker initialMode="month-day-hour" />
        </AkCell>
        <AkCell label="月日时分 month-day-hour-minute">
          <AkDatePicker initialMode="month-day-hour-minute" />
        </AkCell>
        <AkCell label="年月 year-month">
          <AkDatePicker initialMode="year-month" />
        </AkCell>
        <AkCell label="年月日时 year-month-day-hour">
          <AkDatePicker initialMode="year-month-day-hour" />
        </AkCell>
        <AkCell label="年月日时分 year-month-day-hour-minute">
          <AkDatePicker initialMode="year-month-day-hour-minute" />
        </AkCell>
      </AkGroup>
      <AkGroup title="minDate & maxDate">
        <AkCell label="-5year ~ 5year">
          <AkDatePicker
            initialMode="date"
            minDate={maxDate}
            maxDate={minDate}
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="filter">
        <AkCell label="秒步进5">
          <AkDatePicker initialMode="datetime" filter={filter} />
        </AkCell>
      </AkGroup>
      <AkGroup title="formatTemplate">
        <AkCell label="YYYY年MM月DD日">
          <AkDatePicker
            initialMode="date"
            formatTemplate="YYYY年MM月DD日"
            v-model="formatValue"
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="disabled">
        <AkCell label="禁用">
          <AkDatePicker initialMode="date" disabled value={disableValue} />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="change">
          <AkDatePicker initialMode="datetime" onChange={onChange} />
        </AkCell>
      </AkGroup>
      <AkGroup title="API">
        <AkCell label="showDatePicker" isLink onClick={() => onCallApi()} />
      </AkGroup>
    </>
  )
}
