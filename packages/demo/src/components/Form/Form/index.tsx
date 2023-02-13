import {
  TaForm,
  TaGroup,
  TaInput,
  TaPicker,
  TaCalendar,
  TaCascader,
  TaSwitch,
  TaRate,
  TaSlider,
  TaStepper,
  TaRadioGroup,
  TaCheckboxGroup,
  TaImageUploader,
  TaButton,
  showToast,
  ImageUploaderUploadReady
} from '@/index'
import { multiOptions, regionOptions } from '../Picker/data'
import { createForm, setValidateLanguage } from '@formily/core'
import { FormProvider, Field, FormConsumer } from '@formily/react'
import FormilyFormItem from './FormilyFormItem'

const genderOptions = [
  { label: '男', value: 1 },
  { label: '女', value: 2 }
]
const characters = ['活泼', '内向', '高冷']

setValidateLanguage('zh-CN')

const form = createForm({ validateFirst: true })

export default function ExpForm() {
  function getDataUrl(file: File) {
    return new Promise<string>(resolve => {
      const fr = new FileReader()
      fr.onload = function (e) {
        resolve((e.target?.result as string) ?? '')
      }
      fr.readAsDataURL(file)
    })
  }

  const hookUpload: ImageUploaderUploadReady = (file, handlers) => {
    getDataUrl(file).then(url => {
      handlers.success(url)
    })
  }

  function onSubmit(...args: any[]) {
    console.log(...args)
    showToast('校验通过')
  }

  return (
    <>
      <TaGroup title="Formily">
        <FormProvider form={form}>
          <Field
            name="nickname"
            title="昵称"
            required
            component={[
              TaInput,
              { placeholder: '请输入昵称', showClear: true }
            ]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="avatar"
            title="头像"
            required
            component={[
              TaImageUploader,
              { uploadReady: hookUpload, columnNumber: 1, maxCount: 1 }
            ]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="gender"
            title="性别"
            required
            component={[
              TaRadioGroup,
              {
                options: genderOptions
              }
            ]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="weight"
            title="体重Kg"
            required
            component={[TaSlider, { showValue: true, min: 35, max: 120 }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="season"
            title="季节"
            required
            component={[
              TaPicker,
              { options: multiOptions, placeholder: '选择季节' }
            ]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="birthday"
            title="生日"
            required
            component={[TaCalendar, { placeholder: '选择生日' }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="character"
            title="性格"
            required
            component={[TaCheckboxGroup, { options: characters }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="region"
            title="地区"
            required
            component={[
              TaCascader,
              {
                placeholder: '选择地区',
                fieldNames: { value: 'label' },
                options: regionOptions
              }
            ]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="happinessIndex"
            title="幸福指数"
            required
            component={[TaRate, { allowHalf: true }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="stepper"
            title="步进器"
            required
            component={[TaStepper, { max: 10, step: 0.2, decimalLength: 1 }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="agree"
            title="认可"
            required
            component={[TaSwitch]}
            decorator={[FormilyFormItem]}
          />
          <FormConsumer>
            {form => (
              <>
                <pre className="exp-form-json">
                  {JSON.stringify(form.values, null, 2)}
                </pre>
                <TaForm.Footer>
                  <TaButton
                    type="primary"
                    onClick={() => {
                      form.submit(onSubmit)
                    }}
                  >
                    提交
                  </TaButton>
                </TaForm.Footer>
              </>
            )}
          </FormConsumer>
        </FormProvider>
      </TaGroup>
    </>
  )
}
