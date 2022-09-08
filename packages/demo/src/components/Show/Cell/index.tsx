import { AkCell, AkIcon, AkGroup } from '@/index'

export default function ExpCell() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="单元格" content="内容"></AkCell>
        <AkCell label="单元格" content="内容" description="描述信息"></AkCell>
      </AkGroup>
      <AkGroup title="包含图标">
        <AkCell label="单元格" content="内容" icon="EditOutlined"></AkCell>
        <AkCell
          label="单元格"
          content="内容"
          description="描述信息"
          icon="EditOutlined"
        ></AkCell>
      </AkGroup>
      <AkGroup title="展示箭头">
        <AkCell label="单元格" isLink></AkCell>
        <AkCell
          label="单元格"
          content="内容"
          isLink
          arrowDirection="down"
        ></AkCell>
        <AkCell
          label="单元格"
          content="内容"
          isLink
          arrowDirection="left"
        ></AkCell>
        <AkCell
          label="单元格"
          description="描述信息"
          isLink
          arrowDirection="up"
        ></AkCell>
        <AkCell
          label="单元格"
          content="内容"
          description="描述信息"
          isLink
        ></AkCell>
      </AkGroup>
      <AkGroup title="其他">
        <AkCell
          label="必填"
          content="内容"
          isLink
          arrowDirection="down"
          required
        ></AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell
          label="单元格"
          content="内容"
          description="描述信息"
          isLink
          onClick={() => console.log('点击事件')}
        ></AkCell>
      </AkGroup>
      <AkGroup title="Slot default">
        <AkCell label="右侧图标" content="内容">
          <AkIcon icon="CloseOutlined" />
        </AkCell>
        {/* <AkCell checkbox>
          <div className="exp-cell-user-item">
            <AkImage
              className="exp-cell-user-item-avatar"
              src="https://cdn.fox2.cn/vfox/swiper/center-2.jpg"
              mode="aspectFill"
            />
            <span className="exp-cell-user-item-nickname">小明</span>
          </div>
        </AkCell> */}
      </AkGroup>
      {/* <AkGroup title="Slot icon">
    <AkCell checkbox>
      <div className="exp-cell-user-item">
        <AkImage
          className="exp-cell-user-item-avatar"
          src="https://cdn.fox2.cn/vfox/swiper/center-2.jpg"
          mode="aspectFill"
        />
        <span className="exp-cell-user-item-nickname">小明</span>
      </div>
      <template #icon>
        <AkCheckbox circle @change="onCheckboxChange" />
      </template>
    </AkCell>
  </AkGroup> */}
    </>
  )
}
