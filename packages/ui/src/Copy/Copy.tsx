import classNames from 'classnames'
import type { CopyEmits, CopyProps } from './types'
import type { FC } from '../helpers/types'
import { copy } from './util'
import { useRef } from 'react'
import Exception from '../helpers/exception'
import { useLocale } from '../ConfigProvider/context'

const AkCopy: FC<CopyProps & CopyEmits> = props => {
  const inputEl = useRef<HTMLInputElement>(null)

  const { locale } = useLocale()
  const classes = classNames('ak-copy', props.className)

  function onCopy() {
    try {
      copy(inputEl.current as HTMLInputElement)

      props.onSuccess && props.onSuccess(inputEl.current?.value ?? '')
    } catch (error) {
      props.onError && props.onError(new Exception(error))
    }
  }

  return (
    <div className={classes} onClick={onCopy}>
      <input
        type="text"
        value={props.text}
        className="ak-copy_input"
        readOnly
        ref={inputEl}
      />
      <div className="ak-copy_box">{props.children || locale.copyText}</div>
    </div>
  )
}

AkCopy.defaultProps = {
  text: ''
}

export default AkCopy
