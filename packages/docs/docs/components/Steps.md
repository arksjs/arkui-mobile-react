# Steps 步骤条

<CodeDemo name="Steps">

<<< @/../../demo/src/components/Show/Steps/index.tsx

</CodeDemo>

## Import

```js
import { TaSteps, TaStep } from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Steps

### Steps Props

| 属性        | 类型    | 默认值 | 必填 | 说明                 |
| ----------- | ------- | ------ | ---- | -------------------- |
| activeIndex | number  | 0      | 否   | 当前步骤对应的索引值 |
| dot         | boolean | false  | 否   | 是否开启小点样式     |

### Steps Slots

#### children

注：其中只可放置 [Step](./Steps.md#step-props) 组件，否则会导致未定义的行为。

```tsx
<TaSteps>
  <TaSteps.Step title="标题">自定义内容</TaSteps.Step>
</TaSteps>
```

## Step

### Step Props

| 属性  | 类型   | 默认值 | 必填 | 说明         |
| ----- | ------ | ------ | ---- | ------------ |
| title | string |        | 否   | 步骤子项标题 |

### Step Slots

#### 内容（children）

```tsx
<TaSteps.Step title="标题">自定义内容</TaSteps.Step>
```

#### 标题（renderTitle）

```tsx
<TaSteps.Step
  renderTitle={() => (
    <>
      【珠海市】【珠海一部】快递小哥正在派件（
      <a href="tel:10000">10000</a>）
    </>
  )}
>
  2021-04-13 11:22:16
</TaSteps.Step>
```

注：优先级高于 Props `title`。

#### 步骤标（renderStep）

```tsx
<TaSteps.Step
  key={index}
  title={item.title}
  renderStep={({ finish, active }) => (
    <>
      {finish ? (
        <TaIcon icon="CheckOutlined"></TaIcon>
      ) : active ? (
        <TaIcon icon="LoadingOutlined" spin></TaIcon>
      ) : (
        <></>
      )}
    </>
  )}
>
  {item.content}
</TaSteps.Step>
```

注：只推荐写入 text 和 [Icon](./Icon.md) 组件，其他元素或组件可能会导致未定义的行为。
