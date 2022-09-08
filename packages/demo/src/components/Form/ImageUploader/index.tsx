import {
  AkImageUploader,
  AkGroup,
  ImageUploaderBeforeUpload,
  ImageUploaderOnDelete,
  ImageUploaderUploadReady,
  showToast
} from '@/index'

const imageList2 = [
  'https://cdn.fox2.cn/vfox/empty/default@2x.png',
  'https://cdn.fox2.cn/vfox/empty/error@2x.png'
]

export default function ExpImageUploader() {
  const hookBeforeUpload: ImageUploaderBeforeUpload = (
    file,
    { formatSize }
  ) => {
    if (file.size > 1024 * 1024) {
      showToast(`上传图片不能大于 ${formatSize(1024 * 1024)}`)
      return false
    }
    showToast(`上传图片大小为 ${formatSize(file.size)}`)
  }

  const hookUploadOrFail: ImageUploaderUploadReady = (file, handlers) => {
    handlers.setUploading('上传中...')

    setTimeout(() => {
      getDataUrl(file).then(url => {
        if (Math.random() > 0.5) {
          handlers.fail('模拟失败')
        } else {
          handlers.success(url)
        }
      })
    }, 2000)
  }

  function getDataUrl(file: File) {
    return new Promise<string>(resolve => {
      const fr = new FileReader()
      fr.onload = function (e) {
        resolve((e.target?.result as string) ?? '')
      }
      fr.readAsDataURL(file)
    })
  }

  const hookUpload: ImageUploaderUploadReady = (file, handlers) => {
    getDataUrl(file).then(url => {
      handlers.success(url)
    })
  }

  const onChange = (res: string[]) => {
    console.log('change', res)
  }

  const onDelete: ImageUploaderOnDelete = res => {
    console.log('delete', res)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkImageUploader
          uploadReady={hookUploadOrFail}
          onChange={onChange}
          onDelete={onDelete}
          accept={['png', 'jpg']}
          maxCount="9"
          multiple
        />
      </AkGroup>
      <AkGroup title="上传前置处理">
        <AkImageUploader
          beforeUpload={hookBeforeUpload}
          uploadReady={hookUpload}
          accept={['png', 'jpg']}
          maxCount="9"
          multiple
        />
      </AkGroup>
      <AkGroup title="禁用删除">
        <AkImageUploader
          value={imageList2}
          deletable={false}
          uploadReady={hookUpload}
        />
      </AkGroup>
      <AkGroup title="禁用上传">
        <AkImageUploader disabled />
      </AkGroup>
    </>
  )
}
