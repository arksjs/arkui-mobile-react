import { useEffect, useState } from 'react'
import classNames from 'classnames'
import type { PaginationEmits, PaginationProps } from './types'
import {
  isNumeric,
  rangeInteger,
  type CSSProperties,
  type RenderChildren,
  type RenderProp,
  type VFC
} from '../helpers'
import { Icon } from '../Icon'
import LeftOutlined from '../Icon/icons/LeftOutlined'
import RightOutlined from '../Icon/icons/RightOutlined'
import { getTotal } from './util'

const TaPagination: VFC<
  PaginationProps &
    PaginationEmits & {
      children?: RenderChildren<{
        current: number
        total: number
      }>
      renderPrev?: RenderProp
      renderNext?: RenderProp
      style?: CSSProperties
    }
> = ({ value = 1, onChange, ...props }) => {
  const classes = classNames('ta-pagination', props.className)
  const [pageNum, setPageNum] = useState(-1)
  const totalNum = getTotal(props.total)

  function change(newPageNum: number) {
    setPageNum(newPageNum)
    onChange && onChange(newPageNum)
  }

  function onClick(type: string) {
    const newPageNum = rangeInteger(
      type === 'next' ? pageNum + 1 : pageNum - 1,
      1,
      totalNum
    )

    change(newPageNum)
  }

  useEffect(() => {
    if (isNumeric(value)) {
      setPageNum(rangeInteger(value, 1, totalNum))
    } else if (pageNum === -1) {
      // 首次不传值的时候
      setPageNum(1)
    }
  }, [value])

  const children =
    typeof props.children === 'function'
      ? props.children({ current: pageNum, total: totalNum })
      : props.children

  return (
    <div className={classes} style={props.style}>
      <button
        className="ta-pagination_prev"
        disabled={pageNum <= 1}
        onClick={() => onClick('prev')}
      >
        {props.renderPrev ? props.renderPrev() : <Icon icon={LeftOutlined} />}
      </button>
      <div className="ta-pagination_content">
        {children || `${pageNum} / ${totalNum}`}
      </div>
      <button
        className="ta-pagination_next"
        disabled={pageNum >= totalNum}
        onClick={() => onClick('next')}
      >
        {props.renderNext ? props.renderNext() : <Icon icon={RightOutlined} />}
      </button>
    </div>
  )
}

TaPagination.defaultProps = {
  value: 1,
  total: 1
}

export default TaPagination
