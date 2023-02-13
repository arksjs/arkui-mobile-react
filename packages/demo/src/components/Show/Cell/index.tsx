import { TaCell, TaIcon, TaGroup } from '@/index'

export default function ExpCell() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="单元格" content="内容"></TaCell>
        <TaCell label="单元格" content="内容" description="描述信息"></TaCell>
      </TaGroup>
      <TaGroup title="包含图标">
        <TaCell label="单元格" content="内容" icon="EditOutlined"></TaCell>
        <TaCell
          label="单元格"
          content="内容"
          description="描述信息"
          icon="EditOutlined"
        ></TaCell>
      </TaGroup>
      <TaGroup title="展示箭头">
        <TaCell label="单元格" isLink></TaCell>
        <TaCell
          label="单元格"
          content="内容"
          isLink
          arrowDirection="down"
        ></TaCell>
        <TaCell
          label="单元格"
          content="内容"
          isLink
          arrowDirection="left"
        ></TaCell>
        <TaCell
          label="单元格"
          description="描述信息"
          isLink
          arrowDirection="up"
        ></TaCell>
        <TaCell
          label="单元格"
          content="内容"
          description="描述信息"
          isLink
        ></TaCell>
      </TaGroup>
      <TaGroup title="其他">
        <TaCell
          label="必填"
          content="内容"
          isLink
          arrowDirection="down"
          required
        ></TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell
          label="单元格"
          content="内容"
          description="描述信息"
          isLink
          onClick={() => console.log('点击事件')}
        ></TaCell>
      </TaGroup>
      <TaGroup title="Slot default">
        <TaCell label="右侧图标" content="内容">
          <TaIcon icon="CloseOutlined" />
        </TaCell>
        {/* <TaCell checkbox>
          <div className="exp-cell-user-item">
            <TaImage
              className="exp-cell-user-item-avatar"
              src="https://cdn.fox2.cn/vfox/swiper/center-2.jpg"
              mode="aspectFill"
            />
            <span className="exp-cell-user-item-nickname">小明</span>
          </div>
        </TaCell> */}
      </TaGroup>
      {/* <TaGroup title="Slot icon">
    <TaCell checkbox>
      <div className="exp-cell-user-item">
        <TaImage
          className="exp-cell-user-item-avatar"
          src="https://cdn.fox2.cn/vfox/swiper/center-2.jpg"
          mode="aspectFill"
        />
        <span className="exp-cell-user-item-nickname">小明</span>
      </div>
      <template #icon>
        <TaCheckbox circle @change="onCheckboxChange" />
      </template>
    </TaCell>
  </TaGroup> */}
    </>
  )
}
