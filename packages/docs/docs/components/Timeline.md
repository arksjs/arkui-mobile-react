# Timeline/TimelineItem 步骤条

<CodeDemo name="Timeline">

<<< @/../../demo/src/components/Show/Timeline/index.tsx

</CodeDemo>

## Import

```js
import { TaTimeline, TaTimelineItem } from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Timeline

### Timeline Slots

#### children

注：其中只可放置 [TimelineItem](./Timeline.md#timelineitem-props) 组件，否则会导致未定义的行为。

```tsx
<TaTimeline>
  <TaTimeline.Item title="成功获得0.01元收益">搞半天就这点？</TaTimeline.Item>
  <TaTimeline.Item title="十天后到账">0.01元还要十天到账？</TaTimeline.Item>
  <TaTimeline.Item title="爱要不要">不要了，滚。</TaTimeline.Item>
</TaTimeline>
```

## TimelineItem

### TimelineItem Props

| 属性      | 类型   | 默认值 | 必填 | 说明           |
| --------- | ------ | ------ | ---- | -------------- |
| title     | string |        | 否   | 时间轴子项标题 |
| dot-color | string |        | 否   | 时间轴节点颜色 |

### TimelineItem Slots

#### 内容（children）

```tsx
<TaTimeline.Item title="成功获得 0.01 元收益">搞半天就这点？</TaTimeline.Item>
```

#### 标题（renderTitle）

```tsx
<TaTimeline.Item
  renderTitle={() => (
    <>
      【珠海市】快件已送达【正方云创园】，如有疑问请电联：
      <a href="tel:10000">10000</a>，感谢您使用中通快递
    </>
  )}
>
  2021-04-13 12:42:57
</TaTimeline.Item>
```

注：优先级高于 Props `title`。

#### 节点（renderDot）

```tsx
<TaTimeline.Item
  title="成功获得 0.01 元收益"
  renderDot={() => (
    <div className="exp-timeline-custom-dot">
      <TaIcon icon="HeartOutlined" />
    </div>
  )}
>
  搞半天就这点？
</TaTimeline.Item>
```
