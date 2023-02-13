import classNames from 'classnames'
import type { LoadMoreProps } from './types'
import type { FC } from '../helpers/types'
import { getClasses } from './util'
import { ActivityIndicator } from '../ActivityIndicator'

const TaLoadMore: FC<LoadMoreProps> = ({
  loading = false,
  vertical = false,
  ...props
}) => {
  const classes = classNames(
    getClasses({
      vertical,
      loading
    }),
    props.className
  )

  return (
    <div className={classes}>
      {loading ? (
        <ActivityIndicator className="ta-load-more_icon" size="18" />
      ) : (
        <></>
      )}
      <span className="ta-load-more_content">
        {props.children || <i className="ta-load-more_dot"></i>}
      </span>
    </div>
  )
}

TaLoadMore.defaultProps = {
  loading: false,
  vertical: false
}

export default TaLoadMore
