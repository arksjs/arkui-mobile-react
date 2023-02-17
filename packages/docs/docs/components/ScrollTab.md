# ScrollTab/ScrollTabItem 标签滚动布局

<CodeDemo name="ScrollTab">

<<< @/../../demo/src/components/Navigation/ScrollTab/index.tsx

</CodeDemo>

## Import

```js
import { TaScrollTab, TaScrollTabItem } from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { ScrollTabOnChange, ScrollTabRef } from 'tantalum-ui-mobile-react'
```

## ScrollTab

### ScrollTab Props

| 属性               | 类型             | 默认值 | 必填 | 说明                        |
| ------------------ | ---------------- | ------ | ---- | --------------------------- |
| stickyOffsetTop    | string \| number | 0      | 否   | 数值默认是 px，也支持 vw/vh |
| stickyOffsetBottom | string \| number | 0      | 否   | 数值默认是 px，也支持 vw/vh |

### ScrollTab Events

| 事件     | 描述       | 回调函数参数                        | TypeScript 函数   |
| -------- | ---------- | ----------------------------------- | ----------------- |
| onChange | 切换时触发 | (name: string, activeIndex: number) | ScrollTabOnChange |

### ScrollTab Slots

#### children

注：其中只可放置 [ScrollTabItem](./ScrollTab.md#scrolltabitem) 组件，否则会导致未定义的行为。

```tsx
<TaScrollTab className="exp-scrollTab-boxs">
  <TaScrollTab.Item name="Dust Red">
    <div className="exp-scrollTab-box box-1"></div>
  </TaScrollTab.Item>
  <TaScrollTab.Item name="Volcano">
    <div className="exp-scrollTab-box box-2"></div>
  </TaScrollTab.Item>
</TaScrollTab>
```

### Methods

```ts
interface ScrollTabRef {
  scrollTo: (name: string) => void
  scrollToIndex: (index: number) => void
}
```

| 方法名        | 说明                     |
| ------------- | ------------------------ |
| scrollTo      | 切换到指定 name 的 Item  |
| scrollToIndex | 切换到指定 index 的 Item |

## ScrollTabItem

### ScrollTabItem Props

| 属性  | 类型   | 默认值 | 必填 | 说明                                                             |
| ----- | ------ | ------ | ---- | ---------------------------------------------------------------- |
| name  | string |        | 是   | 唯一标识，设置后配合 ScrollTab 组件的 `value` 和 `onChange` 使用 |
| title | string |        | 否   | 分组名，也应用于吸附，如果没有设置则获取 `name` 的值             |

### ScrollTabItem Slots

#### children

```tsx
<TaScrollTab.Item name="Dust Red">
  <div className="exp-scrollTab-box box-1"></div>
</TaScrollTab.Item>
```
