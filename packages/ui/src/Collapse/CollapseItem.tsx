import { useRef } from 'react'
import classNames from 'classnames'
import type {
  CollapseContextItemRef,
  CollapseContextValue,
  CollapseItemEmits,
  CollapseItemProps
} from './types'
import type { FC } from '../helpers'
import { useGroupItem, useException, useStableState } from '../hooks'
import { CollapseContext } from './context'
import { getItemClasses } from './util'
import { Cell } from '../Cell'

const TaCollapseItem: FC<CollapseItemProps & CollapseItemEmits> = ({
  name,
  ...props
}) => {
  const { printItemIsolationWarn } = useException('collapse')
  const uid = useRef(Symbol())
  const bodyEl = useRef<HTMLDivElement>(null)
  const [getActive, setActive] = useStableState(false)

  const { onChange } = useGroupItem<
    CollapseContextValue,
    CollapseContextItemRef
  >(CollapseContext, {
    uid: uid.current,
    show,
    hide,
    getName: () => name,
    getActive: () => getActive(true)
  })

  function handleChange(uid: symbol) {
    if (onChange) {
      onChange(uid)
    } else {
      printItemIsolationWarn()
    }
  }

  const visibleTimer = useRef<number>()

  function show(isClick = false) {
    if (getActive(true)) {
      return
    }
    setActive(true)

    clearTimeout(visibleTimer.current)
    if (!bodyEl.current) {
      return
    }
    const $body = bodyEl.current

    $body.style.cssText = 'position: absolute; opacity: 0;'
    const contentHeight = $body.getBoundingClientRect().height
    $body.style.cssText = 'height: 0px;'

    visibleTimer.current = window.setTimeout(() => {
      $body.style.cssText = `height: ${contentHeight}px;`

      visibleTimer.current = window.setTimeout(() => {
        $body.style.cssText = ''
      }, 210)
    }, 17)

    emitToggle(true)

    isClick && handleChange(uid.current)
  }

  function hide(isClick = false) {
    if (!getActive(true)) {
      return
    }
    setActive(false)

    if (!bodyEl.current) {
      return
    }
    clearTimeout(visibleTimer.current)
    const $body = bodyEl.current

    $body.style.cssText = `height: ${$body.getBoundingClientRect().height}px;`

    visibleTimer.current = window.setTimeout(() => {
      $body.style.cssText = 'height: 0px;'

      visibleTimer.current = window.setTimeout(() => {
        $body.style.cssText = 'display: none;'
      }, 210)
    }, 17)

    emitToggle(false)

    isClick && handleChange(uid.current)
  }

  function emitToggle(spread: boolean) {
    props.onToggle &&
      props.onToggle({
        name,
        spread
      })
  }

  function onClick() {
    getActive(true) ? hide(true) : show(true)
  }

  const classes = classNames(getItemClasses(getActive()))

  return (
    <div className={classes}>
      <Cell
        className="ta-collapse-item_header"
        label={props.title}
        icon={props.icon}
        disabled={props.disabled}
        isLink
        arrowDirection={getActive() ? 'up' : 'down'}
        onClick={onClick}
      />
      <div
        className="ta-collapse-item_body ta-horizontal-hairline"
        style={{ display: 'none' }}
        ref={bodyEl}
      >
        <div className="ta-collapse-item_content">{props.children}</div>
      </div>
    </div>
  )
}

export default TaCollapseItem
