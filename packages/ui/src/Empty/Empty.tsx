import classNames from 'classnames'
import type { EmptyProps } from './types'
import type { FC, RenderProp } from '../helpers/types'
import { getImageUrl } from './util'

const AkEmpty: FC<
  EmptyProps & {
    renderImage?: RenderProp
  }
> = ({ description = '', ...props }) => {
  const classes = classNames('ak-empty', props.className)
  const imageUrl = getImageUrl(props.type)

  return (
    <div className={classes}>
      {props.renderImage ? (
        props.renderImage()
      ) : (
        <img className="ak-empty_image" src={imageUrl} />
      )}

      {description ? (
        <p className="ak-empty_description">{description}</p>
      ) : (
        <></>
      )}
      {props.children}
    </div>
  )
}

export default AkEmpty
