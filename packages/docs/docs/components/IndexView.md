# IndexView/IndexViewItem 索引栏

<CodeDemo name="IndexView">

<<< @/../../demo/src/components/Navigation/IndexView/index.tsx

</CodeDemo>

## Import

```js
import { AkIndexView, AkIndexViewItem } from 'arkui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { IndexViewOnChange } from 'arkui-mobile-react'
```

## IndexView Props

| 属性            | 类型             | 默认值 | 必填 | 说明                        |
| --------------- | ---------------- | ------ | ---- | --------------------------- |
| stickyOffsetTop | string \| number | 0      | 否   | 数值默认是 px，也支持 vw/vh |

## IndexView Events

| 事件     | 描述       | 回调函数参数                       | TypeScript 函数   |
| -------- | ---------- | ---------------------------------- | ----------------- |
| onChange | 切换时触发 | ( activeIndex: number ) 当前项索引 | IndexViewOnChange |

## Methods

| 方法名        | 说明                                                    | 参数                         |
| ------------- | ------------------------------------------------------- | ---------------------------- |
| scrollToIndex | 将位于指定位置的 `IndexViewItem` 滚动到可视区的指定位置 | ({ index: number }) => void  |
| scrollTo      | 滚动列表到指定的偏移，单位 px                           | ({ offset: number }) => void |

## IndexView Slots

### children

注：其中只可放置 [IndexViewItem](./IndexView.md#indexviewitem-索引子项) 组件，否则会导致未定义的行为。

```tsx
<AkIndexView>
  <AkIndexView.Item name="A">
    <AkCell label="单元格" />
    <AkCell label="单元格" />
    <AkCell label="单元格" />
  </AkIndexView.Item>
</AkIndexView>
```

## IndexViewItem Props

| 属性 | 类型   | 默认值 | 必填 | 说明                       |
| ---- | ------ | ------ | ---- | -------------------------- |
| name | string |        | 是   | 分组名，也应用于吸附和菜单 |

## IndexViewItem Slots

### children

```tsx
<AkIndexView.Item name="A">
  <AkCell label="单元格" />
  <AkCell label="单元格" />
  <AkCell label="单元格" />
</AkIndexView.Item>
```
