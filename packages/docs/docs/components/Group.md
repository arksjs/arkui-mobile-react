# Group 分组

将一组同类别的组件（如 [Cell](./Cell.md) ）放在一起，并加入分组标题。

<CodeDemo name="Group">

<<< @/../../demo/src/components/Show/Group/index.tsx

</CodeDemo>

## Import

```js
import { TaGroup } from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性         | 类型    | 默认值 | 必填 | 说明               |
| ------------ | ------- | ------ | ---- | ------------------ |
| title        | string  |        | 是   | 分组标题           |
| strongHeader | boolean | false  | 否   | 是否强化标题的风格 |

## Slots

### children

```tsx
<TaGroup title="基础风格">
  <TaCell
    label="单元格"
    content="内容"
    description="网站大部分组件都由这个组件进行分组"
  />
  <TaCell label="单元格" content="内容" />
  <TaCell label="单元格" content="内容" />
  <TaCell label="单元格" content="内容" />
</TaGroup>
```

### 右上角（renderHeader）

```tsx
<TaGroup
  title="强化标题栏"
  renderHeader={() => <TaButton size="small"> 查看更多 </TaButton>}
  strongHeader={strongHeader}
>
  <TaCell label="单元格" content="内容" />
  <TaCell label="单元格" content="内容" />
  <TaCell label="单元格" content="内容" />
  <TaCell label="单元格" content="内容" />
</TaGroup>
```
