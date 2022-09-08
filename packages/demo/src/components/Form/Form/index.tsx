import {
  AkForm,
  AkGroup,
  AkInput,
  AkPicker,
  AkCalendar,
  AkCascader,
  AkSwitch,
  AkRate,
  AkSlider,
  AkStepper,
  AkRadioGroup,
  AkCheckboxGroup,
  AkImageUploader,
  AkButton,
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
      <AkGroup title="Formily">
        <FormProvider form={form}>
          <Field
            name="nickname"
            title="昵称"
            required
            component={[
              AkInput,
              { placeholder: '请输入昵称', showClear: true }
            ]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="avatar"
            title="头像"
            required
            component={[
              AkImageUploader,
              { uploadReady: hookUpload, columnNumber: 1, maxCount: 1 }
            ]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="gender"
            title="性别"
            required
            component={[
              AkRadioGroup,
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
            component={[AkSlider, { showValue: true, min: 35, max: 120 }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="season"
            title="季节"
            required
            component={[
              AkPicker,
              { options: multiOptions, placeholder: '选择季节' }
            ]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="birthday"
            title="生日"
            required
            component={[AkCalendar, { placeholder: '选择生日' }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="character"
            title="性格"
            required
            component={[AkCheckboxGroup, { options: characters }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="region"
            title="地区"
            required
            component={[
              AkCascader,
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
            component={[AkRate, { allowHalf: true }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="stepper"
            title="步进器"
            required
            component={[AkStepper, { max: 10, step: 0.2, decimalLength: 1 }]}
            decorator={[FormilyFormItem]}
          />
          <Field
            name="agree"
            title="认可"
            required
            component={[AkSwitch]}
            decorator={[FormilyFormItem]}
          />
          <FormConsumer>
            {form => (
              <>
                <pre className="exp-form-json">
                  {JSON.stringify(form.values, null, 2)}
                </pre>
                <AkForm.Footer>
                  <AkButton
                    type="primary"
                    onClick={() => {
                      form.submit(onSubmit)
                    }}
                  >
                    提交
                  </AkButton>
                </AkForm.Footer>
              </>
            )}
          </FormConsumer>
        </FormProvider>
      </AkGroup>
    </>
  )
}
