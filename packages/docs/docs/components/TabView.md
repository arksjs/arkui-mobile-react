# TabView/TabViewItem 标签页

<CodeDemo name="TabView">

<<< @/../../demo/src/components/Navigation/TabView/index.tsx

</CodeDemo>

## Import

```js
import { TaTabView, TaTabViewItem } from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type {
  TabViewOnChange,
  TabViewOnAnimated,
  TabViewRef
} from 'tantalum-ui-mobile-react'
```

## TabView

### TabView Props

| 属性                | 类型    | 默认值 | 必填 | 说明                                            |
| ------------------- | ------- | ------ | ---- | ----------------------------------------------- |
| initialVertical     | boolean | false  | 否   | 初始化是否侧边菜单展示方式                      |
| scrollThreshold     | number  | 4      | 否   | 超过 `scrollThreshold` 个 Tab 使用滚动形式      |
| backUpperWhenChange | boolean | false  | 否   | 切换面板时，如果是旧面板，是否返回顶部/左侧位置 |

### TabView Events

| 事件       | 描述           | 回调函数参数                        | TypeScript 函数   |
| ---------- | -------------- | ----------------------------------- | ----------------- |
| onChange   | 切换时触发     | (name: string, activeIndex: number) | TabViewOnChange   |
| onAnimated | 动画结束时触发 | (activeIndex: number)               | TabViewOnAnimated |

### TabView Slots

#### children

注：其中只可放置 [TabViewItem](./TabView.md#tabviewitem) 组件，否则会导致未定义的行为。

```tsx
<TaTabView className="exp-tabView">
  <TaTabView.Item name="Tab 1">
    <TaScrollView
      className="exp-tabView-scroll-view"
      enablePullDirections={['down']}
      scrollY
      scrollX
      onRefreshing={onRefreshing}
    >
      <TaEmpty
        className="exp-tabView-empty"
        description="Tab 1 下拉刷新"
      ></TaEmpty>
    </TaScrollView>
  </TaTabView.Item>
  <TaTabView.Item name="Tab 2">
    <TaEmpty className="exp-tabView-empty" description="Tab 2"></TaEmpty>
  </TaTabView.Item>
</TaTabView>
```

### Methods

```ts
interface TabViewRef {
  switchTo: (name: string) => void
  switchToIndex: (index: number) => void
}
```

| 方法名        | 说明                   |
| ------------- | ---------------------- |
| switchTo      | 切换到指定 name 的 Tab |
| switchToIndex | 切换到指定索引的 Tab   |

## TabViewItem

### TabViewItem Props

| 属性 | 类型   | 默认值 | 必填 | 说明           |
| ---- | ------ | ------ | ---- | -------------- |
| name | string |        | 是   | 对应的菜单名称 |

### TabViewItem Slots

#### 内容（children）

```tsx
<TaTabView.Item name="Tab 2">
  <TaEmpty description="Tab 2"></TaEmpty>
</TaTabView.Item>
```
