import classNames from 'classnames'
import type { EmptyProps } from './types'
import type { FC, RenderProp } from '../helpers/types'
import { getImageUrl } from './util'

const TaEmpty: FC<
  EmptyProps & {
    renderImage?: RenderProp
  }
> = ({ description = '', ...props }) => {
  const classes = classNames('ta-empty', props.className)
  const imageUrl = getImageUrl(props.type)

  return (
    <div className={classes}>
      {props.renderImage ? (
        props.renderImage()
      ) : (
        <img className="ta-empty_image" src={imageUrl} />
      )}

      {description ? (
        <p className="ta-empty_description">{description}</p>
      ) : (
        <></>
      )}
      {props.children}
    </div>
  )
}

export default TaEmpty
