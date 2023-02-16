# Sticky/StickyView/StickyViewItem 粘性布局

<CodeDemo name="Sticky">

<<< @/../../demo/src/components/Navigation/Sticky/index.tsx

</CodeDemo>

## Import

```js
import {
  TaSticky,
  TaStickyView,
  TaStickyViewItem
} from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type {
  StickyViewOnChange,
  StickyViewRef
} from 'tantalum-ui-mobile-react'
```

## Sticky

粘性容器。

### Sticky Props

| 属性            | 类型                              | 默认值   | 必填 | 说明                                                                            |
| --------------- | --------------------------------- | -------- | ---- | ------------------------------------------------------------------------------- |
| containSelector | string \| HTMLElement \| Document | document | 否   | 基于哪个容器，如果是 string，则为可以被 document.querySelector(selector) 获取到 |
| offsetTop       | string \| number                  | 0        | 否   | 数值默认是 px，也支持 vw/vh                                                     |
| offsetBottom    | string \| number                  | 0        | 否   | 数值默认是 px，也支持 vw/vh                                                     |

### Sticky Slots

#### children

```tsx
<TaSticky>自定义内容</TaSticky>
```

## StickyView

粘性布局。

### StickyView Props

| 属性            | 类型                              | 默认值   | 必填 | 说明                                                                            |
| --------------- | --------------------------------- | -------- | ---- | ------------------------------------------------------------------------------- |
| value           | string                            | 0        | 否   | 当前布局中展现的子项 name 值                                                    |
| containSelector | string \| HTMLElement \| Document | document | 否   | 基于哪个容器，如果是 string，则为可以被 document.querySelector(selector) 获取到 |
| offsetTop       | string \| number                  | 0        | 否   | 数值默认是 px，也支持 vw/vh                                                     |

### StickyView Events

| 事件     | 描述       | 回调函数参数                        | TypeScript 函数    |
| -------- | ---------- | ----------------------------------- | ------------------ |
| onChange | 切换时触发 | (name: string, activeIndex: number) | StickyViewOnChange |

### StickyView Slots

#### children

注：其中只可放置 [StickyViewItem](./Sticky.md#stickyviewitem) 组件，否则会导致未定义的行为。

```tsx
<TaGroup title="Sticky View">
  <TaStickyView className="exp-sticky-box" onChange={onChange}>
    <TaStickyView.Item name="Sticky 1">
      <div className="exp-sticky-box-1"></div>
    </TaStickyView.Item>
    <TaStickyView.Item name="Sticky 2">
      <div className="exp-sticky-box-2"></div>
    </TaStickyView.Item>
    <TaStickyView.Item name="Sticky 3">
      <div className="exp-sticky-box-3"></div>
    </TaStickyView.Item>
    <TaStickyView.Item name="Sticky 4">
      <div className="exp-sticky-box-4"></div>
    </TaStickyView.Item>
  </TaStickyView>
</TaGroup>
```

### Methods

```ts
interface StickyViewRef {
  scrollTo: (name: string) => void
  scrollToIndex: (index: number) => void
  scrollToOffset: (offset: number) => void
}
```

| 方法名         | 说明                      |
| -------------- | ------------------------- |
| scrollTo       | 切换到指定 name 的 Item   |
| scrollToIndex  | 切换到指定 index 的 Item  |
| scrollToOffset | 切换到指定位置（单位 px） |

## StickyViewItem

### StickyViewItem Props

| 属性  | 类型   | 默认值 | 必填 | 说明                                                             |
| ----- | ------ | ------ | ---- | ---------------------------------------------------------------- |
| name  | string |        | 是   | 唯一标识，设置后配合 ScrollTab 组件的 `value` 和 `onChange` 使用 |
| title | string |        | 否   | 分组名，也应用于吸附，如果没有设置则获取 `name` 的值             |

### StickyViewItem Slots

#### children

```tsx
<TaStickyView.Item name="Sticky 1">
  <div className="exp-sticky-box-1"></div>
</TaStickyView.Item>
```
