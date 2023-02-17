# Form/FormFooter/FormItem 表单

寄语：表单这块一直没有能深度去思考，之前做过一般跟其他 UI 库一样校验，但是都觉得不满意，现只保留最简单最布局功能。

注：

- 这几个组件主要聚焦于布局。
- 如果想要复杂的表单设计或者校验功能，可以借助 [formilyjs](https://formilyjs.org/zh-CN/guide) 来实现。

## Import

```js
import { TaForm, TaFormFooter, TaFormItem } from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Form Slots

### children

```tsx
<TaForm>
  <TaInput type="text" />
</TaForm>
```

### renderFooter

```tsx
<TaForm renderFooter={() => <TaButton form-type="submit">提交</TaButton>} />
```

## FormFooter Slots

### children

```tsx
<TaForm.Footer>
  <TaButton form-type="submit">提交</TaButton>
</TaForm.Footer>
```

## FormItem Props

| 属性     | 类型               | 默认值 | 必填 | 说明                                         |
| -------- | ------------------ | ------ | ---- | -------------------------------------------- |
| error    | string \| string[] |        | 否   | 错误提示信息                                 |
| label    | string             |        | 否   | 设置该行名称，比如 `昵称`                    |
| required | boolean            | false  | 否   | 是否必填，设置 `true` 后 label 会展示必填`*` |

## FormItem Slots

### default

```tsx
<TaForm.Item>
  <TaInput type="text" />
</TaForm.Item>
```

## 支持表单的组件

- [Input](./Input.md)
- [RadioGroup](./Radio.md#radiogroup)
- [CheckboxGroup](./Checkbox.md#checkboxgroup)
- [Switch](./Switch.md)
- [Stepper](./Stepper.md)
- [Slider](./Slider.md)
- [Range](./Range.md)
- [Rate](./Rate.md)
- [Calendar](./Calendar.md)
- [DatePicker](./DatePicker.md)
- [Cascader](./Cascader.md)
- [Picker](./Picker.md)
- [ImageUploader](./ImageUploader.md)

## 与 **Formily** 配合

关于 **Formily** 的介绍可以查看阿里巴巴的[官网](https://formilyjs.org/zh-CN)。

### 安装

```sh
npm install --save @formily/core @formily/react
```

### 对 `FormItem` 做下适配

`FormilyFormItem.js`:

```js
import { TaFormItem } from 'tantalum-ui-mobile-react'
import { connect, mapProps } from '@formily/react'
import { isVoidField } from '@formily/core'

export default connect(
  TaFormItem,
  mapProps(
    { validateStatus: true, title: 'label', required: true },
    (props, field) => {
      if (isVoidField(field)) return props
      if (!field) return props

      const getMessage = () => {
        if (field.validating) return
        if (props.error) return props.error
        if (field.selfErrors.length) return field.selfErrors
        // if (field.selfWarnings.length) return split(field.selfWarnings)
        // if (field.selfSuccesses.length) return split(field.selfSuccesses)
      }

      return {
        error: getMessage()
      }
    }
  )
)
```

### 设计表单

<CodeDemo name="Form">

<<< @/../../demo/src/components/Form/Form/index.tsx

</CodeDemo>

### 附录：

- [Formily React Library](https://react.formilyjs.org/)
- [更多开发模式](https://react.formilyjs.org/zh-CN/guide/concept)
- [表单校验](https://formilyjs.org/zh-CN/guide/advanced/validate)
