# 快速上手

## 使用 Vite 创建项目

```sh
# npm 6.x
npm create vite@latest my-react-app --template react-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest my-react-app -- --template react-ts

# yarn
yarn create vite my-react-app --template react-ts

# pnpm
pnpm create vite my-react-app -- --template react-ts
```

## 引入 arkui-mobile-react

```sh
# npm
npm i -S arkui-mobile-react

# yarn
yarn add arkui-mobile-react

# pnpm
pnpm add arkui-mobile-react
```

修改 `src/App.tsx`，引入 arkui-mobile-react 的按钮组件。

```tsx
import { FC } from 'react'
import { AkButton } from 'arkui-mobile-react'
import 'arkui-mobile-react/es/style'
// import 'arkui-mobile-react/es/style/sass' // use sass

const App: FC = () => (
  <div className="App">
    <AkButton type="primary">Button</AkButton>
  </div>
)

export default App
```

## API 调用

API 调用需要先引入对应的组件，方可调用，引用方式同上。

```tsx
import { showToast } from 'arkui-mobile-react'
import 'arkui-mobile-react/es/Toast/style'

const App: FC = () => (
  <div className="App">
    <AkButton
      type="primary"
      onClick={() =>
        showToast({
          title: '成功',
          type: 'success',
          duration: 2000
        })
      }
    >
      Button
    </AkButton>
  </div>
)

export default App
```
