# arkui-mobile-react

基于 React 移动端组件库。

## 简介

### 前言

1. 该组件库是基于 [ArkUI](https://github.com/arksjs/arkui-mobile-vue) 的 React 实现。
2. 现阶段现学现写的，所以不具备用于生产的条件，组件库会不断完善。
3. 该版本会尽量抽出非框架逻辑，以做到和 arkui-mobile-vue 的共用。
4. 该版本尽量属性参数和接口的设计对齐 arkui-mobile-vue，但是由于框架不同，使用有些许不同：

| 属性           | Vue                                                                | React                                                                                             |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| 事件           | `<AkCell @closeClick="foo" />`                                     | `<AkCell onCloseClick={foo} />`                                                                   |
| 默认插槽       | `<AkCell>插槽内容</AkCell>`                                        | `<AkCell>插槽内容</AkCell>`                                                                       |
| 其他插槽       | `<AkCell><template #icon>插槽内容</template></AkCell>`             | `<AkCell renderIcon={() => (<>{ '插槽内容' }</>)} />`                                             |
| 带参数默认插槽 | `<AkCell><template #default="data">{{ data }}</template></AkCell>` | `<AkCell>{(data) => (<>{ data }</>)}</AkCell>` \| `<AkCell render={(data) => (<>{ data }</>)} />` |
| 带参数其他插槽 | `<AkCell><template #icon="data">{{ data }}</template></AkCell>`    | `<AkCell renderIcon={(data) => (<>{ data }</>)} />`                                               |

### 特性

- 提供 70+ 套组件，覆盖移动端各类场景
- 支持主题定制
- 支持黑暗模式
- 支持国际化
- 支持 TypeScript

## 支持环境

- Android 5.0+
- iOS 10.0+
- Node.js 12.0+

## 框架版本

- react >= 16.9.0 & < 18.0.0
- react-dom >= 16.9.0 & < 18.0.0

## 安装

```sh
# npm
npm i -S arkui-mobile-react

# yarn
yarn add arkui-mobile-react

# pnpm
pnpm add arkui-mobile-react
```

## 参考文档

[Docs](https://arksjs.github.io/arkui-mobile-react/)

[Demo](https://arksjs.github.io/arkui-mobile-react/demo)

## LICENSE

[MIT](https://github.com/arksjs/arkui-mobile-react/blob/main/LICENSE)
