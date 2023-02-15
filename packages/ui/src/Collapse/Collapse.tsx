import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import type {
  CollapseContextItemRef,
  CollapseContextValue,
  CollapseEmits,
  CollapseProps
} from './types'
import { cloneData, isSameArray, isStringArray, type FC } from '../helpers'
import { useGroup } from '../hooks'
import { CollapseContext } from './context'

const TaCollapse: FC<CollapseProps & CollapseEmits> = ({
  value = [],
  accordion = false,
  ...props
}) => {
  const classes = classNames('ta-collapse', props.className)

  const activeNames = useRef<string[]>([])

  function updateValue(val: string | string[]) {
    let values = cloneData(
      isStringArray(val) ? val : isStringArray(val) ? [val] : []
    )

    if (accordion) {
      // 手风琴模式只保留一个值
      values = values.slice(0, 1)
    }

    if (Array.isArray(values) && isSameArray(values, activeNames.current)) {
      return
    }

    activeNames.current = []

    children.current.forEach(child => {
      const childName = child.getName() as string

      if (childName && values.includes(childName)) {
        activeNames.current.push(childName)
        child.show()
      } else {
        child.hide()
      }
    })
  }

  function onChange(uid: symbol) {
    activeNames.current = []

    if (accordion) {
      children.current.forEach(child => {
        if (child.uid === uid) {
          child.getActive() &&
            child.getName() &&
            activeNames.current.push(child.getName())
        } else {
          child.hide()
        }
      })
    } else {
      children.current.forEach(child => {
        child.getActive() &&
          child.getName() &&
          activeNames.current.push(child.getName())
      })
    }

    props.onChange && props.onChange(cloneData(activeNames.current))
  }

  const { children, GroupProvider } = useGroup<
    CollapseContextValue,
    CollapseContextItemRef
  >(CollapseContext, {
    onChange,
    hasGroup: true
  })

  useEffect(() => {
    updateValue(value)
  }, [value])

  return (
    <div className={classes}>
      <GroupProvider>{props.children}</GroupProvider>
    </div>
  )
}

export default TaCollapse
