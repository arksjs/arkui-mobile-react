import type { OnChange, VFC } from '../helpers/types'
import { Icon } from '../Icon'
import PlusOutlined from '../Icon/icons/PlusOutlined'
import classNames from 'classnames'

const AkImageUploaderAdd: VFC<{
  accept: string
  disabled?: boolean
  multiple?: boolean
  onAddFiles: OnChange
}> = ({ accept, disabled, multiple, onAddFiles }) => {
  const classes = classNames('ak-image-uploader_upload-button', {
    disabled: !!disabled
  })

  return (
    <div
      className={classes}
      onContextMenu={e => e.nativeEvent.preventDefault()}
    >
      <Icon icon={PlusOutlined} />
      <input
        type="file"
        name=""
        accept={accept}
        disabled={disabled}
        multiple={multiple}
        onChange={onAddFiles}
      />
    </div>
  )
}

export default AkImageUploaderAdd
