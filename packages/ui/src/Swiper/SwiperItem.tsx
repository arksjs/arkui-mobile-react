import classNames from 'classnames'
import type { FC } from '../helpers/types'
import type { SwiperItemProps } from './types'

const TaSwiperItem: FC<SwiperItemProps> = ({ index = -1, ...props }) => {
  const classes = classNames('ta-swiper-item', props.className)

  return (
    <div className={classes} data-index={index}>
      {props.children}
    </div>
  )
}

export default TaSwiperItem
