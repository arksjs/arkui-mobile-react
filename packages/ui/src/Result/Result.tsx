import classNames from 'classnames'
import type { ResultType, ResultProps, ResultEmits } from './types'
import type { FC } from '../helpers'
import { getType, getTypeClass } from './util'
import InfoCircleFilled from '../Icon/icons/InfoCircleFilled'
import WarningFilled from '../Icon/icons/WarningFilled'
import CheckCircleFilled from '../Icon/icons/CheckCircleFilled'
import CloseCircleFilled from '../Icon/icons/CloseCircleFilled'
import type { IconData } from '../Icon/types'
import { Icon } from '../Icon'
import { useLocale } from '../ConfigProvider/context'
import { Button } from '../Button'

const iconMap = new Map<ResultType, IconData>([
  ['info', InfoCircleFilled],
  ['warning', WarningFilled],
  ['success', CheckCircleFilled],
  ['fail', CloseCircleFilled]
])

const TaResult: FC<ResultProps & ResultEmits> = props => {
  const typeClass = getTypeClass(props.type)
  const classes = classNames('ta-result', typeClass, props.className)
  const iconClasses = classNames('ta-result_icon', typeClass)
  const icon = iconMap.get(getType(props.type)) as IconData
  const { locale } = useLocale()

  return (
    <div className={classes}>
      <div className="ta-result_header">
        <Icon className={iconClasses} icon={icon} />
        {props.title ? (
          <div className="ta-result_title">{props.title}</div>
        ) : (
          <></>
        )}
        {props.description ? (
          <div className="ta-result_description">{props.description}</div>
        ) : (
          <></>
        )}
      </div>
      {props.children}
      <div className="ta-result_footer">
        <Button type="primary" onClick={props.onConfirm}>
          {props.confirmText || locale.resultConfirmText}
        </Button>
        {props.showBack ? (
          <Button type="default" onClick={props.onBack}>
            {props.backText || locale.resultBackText}
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

TaResult.defaultProps = {
  title: '',
  description: '',
  showBack: true
}

export default TaResult
