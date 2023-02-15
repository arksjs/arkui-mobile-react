# Pagination 分页

<CodeDemo name="Pagination">

<<< @/../../demo/src/components/Navigation/Pagination/index.tsx

</CodeDemo>

## Import

```js
import { TaPagination } from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性    | 类型   | 默认值 | 必填 | 说明     |
| ------- | ------ | ------ | ---- | -------- |
| current | number | 1      | 否   | 当前页码 |
| total   | number | 1      | 否   | 总页数   |

## Events

| 事件     | 描述               | 回调函数参数        | TypeScript 函数 |
| -------- | ------------------ | ------------------- | --------------- |
| onChange | 点击翻页按钮时触发 | (current: number) } |                 |

## Slots

### children

```tsx
<TaPagination total={total}>
  {({ current }) => <>{`第 ${current} 页`}</>}
</TaPagination>
```

### 翻页按钮（#prev/#next）

```tsx
<TaPagination
  total={total}
  renderPrev={() => <>上一页</>}
  renderNext={() => <>下一页</>}
/>
```
