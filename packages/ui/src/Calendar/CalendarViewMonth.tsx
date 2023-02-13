import classNames from 'classnames'
import type { OnClick, VFC } from '../helpers/types'
import type { Mode, Month } from './types'

const TaCalendarViewMonth: VFC<{
  mode: Mode
  month: Month
  monthIndex: number
  onDaysClick: OnClick
}> = ({ mode, month, monthIndex, onDaysClick }) => {
  const renderDays = () =>
    month.days.map((day, dayIndex) => {
      const dayClasses = classNames('ta-calendar-view_day', {
        disabled: day.state === 'disabled',
        selected:
          day.state === 'selected' ||
          day.state === 'startSelected' ||
          day.state === 'endSelected',
        'in-range': mode === 'range' && day.state === 'selected'
      })

      const topTextClasses = classNames('ta-calendar-view_day-top-text', {
        highlight: day.topHighlight
      })
      const bottomTextClasses = classNames('ta-calendar-view_day-bottom-text', {
        highlight: day.bottomHighlight
      })

      return (
        <div className={dayClasses} key={dayIndex} data-index={dayIndex}>
          {day.topText ? (
            <span className={topTextClasses}>{day.topText}</span>
          ) : (
            <></>
          )}
          {day.text}
          {day.bottomText ? (
            <span className={bottomTextClasses}>{day.bottomText}</span>
          ) : (
            <></>
          )}
        </div>
      )
    })

  return (
    <>
      <div className="ta-calendar-view_month-caption">{month.caption}</div>
      <div
        className="ta-calendar-view_days"
        data-index={monthIndex}
        onClick={onDaysClick}
      >
        {renderDays()}
      </div>
    </>
  )
}

export default TaCalendarViewMonth
