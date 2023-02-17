import type { VFC } from '../helpers'
import { Image } from '../Image'
import { Icon } from '../Icon'
import { ActivityIndicator } from '../ActivityIndicator'
import DeleteOutlined from '../Icon/icons/DeleteOutlined'
import type { FileItem } from './types'
import type { ImageMode } from '../Image/types'

const TaImageUploaderItem: VFC<{
  item: FileItem
  imageMode?: ImageMode
  onClick: (item: FileItem) => void
}> = ({ item, imageMode, onClick }) => {
  return (
    <div
      className="ta-image-uploader_item"
      onClick={() => onClick(item)}
      onContextMenu={e => e.nativeEvent.preventDefault()}
    >
      <Image src={item.url} draggable={false} mode={imageMode} />
      {item.status !== 'uploaded' && item.status !== 'reading' ? (
        <div className="ta-image-uploader_item-status">
          {item.status === 'uploading' ? (
            <ActivityIndicator size="40" color="#ffffff" />
          ) : item.status === 'failed' ? (
            <Icon icon={DeleteOutlined} />
          ) : (
            <></>
          )}
          <span>{item.message}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default TaImageUploaderItem
