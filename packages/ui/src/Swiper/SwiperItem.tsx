import classNames from 'classnames'
import type { FC } from '../helpers/types'
import type { SwiperItemProps } from './types'

const AkSwiperItem: FC<SwiperItemProps> = ({ index = -1, ...props }) => {
  const classes = classNames('ak-swiper-item', props.className)

  return (
    <div className={classes} data-index={index}>
      {props.children}
    </div>
  )
}

export default AkSwiperItem
