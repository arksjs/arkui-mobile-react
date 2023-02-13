import classNames from 'classnames'
import type { FormItemProps } from './types'
import type { FC } from '../helpers/types'
import { useMemo } from 'react'

const TaFormItem: FC<FormItemProps> = props => {
  const classes = classNames(
    'ta-form-item',
    'ta-cell',
    'ta-horizontal-hairline',
    props.className,
    props.validateStatus
  )

  const errors = (() => {
    const ret: string[] = []

    if (Array.isArray(props.error)) {
      props.error.forEach(v => {
        ret.push(v.toString())
      })
    } else if (props.error != null) {
      ret.push(props.error.toString())
    }

    return ret
  })()

  const renderErrorItems = useMemo(
    () =>
      errors.map((error, k) => (
        <li key={error}>
          {errors.length > 1 ? k + 1 + '. ' : ''}
          {error}
        </li>
      )),
    [errors]
  )

  return (
    <label className={classes}>
      <div className="ta-cell_header">
        {props.label ? (
          <div className="ta-cell_label">
            {props.label}
            {props.required ? (
              <span className="ta-form-item_required">*</span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="ta-cell_content">{props.children}</div>
      </div>
      {errors.length > 0 ? (
        <ol className="ta-cell_body">{renderErrorItems}</ol>
      ) : (
        <></>
      )}
    </label>
  )
}

export default TaFormItem
