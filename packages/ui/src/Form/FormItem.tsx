import classNames from 'classnames'
import type { FormItemProps } from './types'
import type { FC } from '../helpers/types'
import { useMemo } from 'react'

const AkFormItem: FC<FormItemProps> = props => {
  const classes = classNames(
    'ak-form-item',
    'ak-cell',
    'ak-horizontal-hairline',
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
      <div className="ak-cell_header">
        {props.label ? (
          <div className="ak-cell_label">
            {props.label}
            {props.required ? (
              <span className="ak-form-item_required">*</span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="ak-cell_content">{props.children}</div>
      </div>
      {errors.length > 0 ? (
        <ol className="ak-cell_body">{renderErrorItems}</ol>
      ) : (
        <></>
      )}
    </label>
  )
}

export default AkFormItem
