import type { FormItemCommonProps } from '../Form/types'

export type ModelValue = number | string

export type OptionItem = {
  label: string
  value: ModelValue
}

export type UserOptionItem = ModelValue | OptionItem

export interface CheckGroupCommonProps extends FormItemCommonProps {
  options?: UserOptionItem[]
  inline?: boolean
  activeColor?: string
  value?: ModelValue | ModelValue[]
}

export interface CheckboxGroupProps extends CheckGroupCommonProps {
  value?: ModelValue[]
}

export type OnChange = (value: ModelValue[]) => void

export interface CheckboxGroupEmits {
  onChange?: OnChange
}

export interface CheckCommonProps extends FormItemCommonProps {
  checkedValue?: ModelValue
  checked?: boolean
  activeColor?: string
}

export interface CheckboxProps extends CheckCommonProps {
  circle?: boolean
}

export interface CheckCommonEmits {
  onUpdateChecked?: (checked: boolean) => void
  onCheckedChange?: (checked: boolean) => void
}

export type CheckboxEmits = CheckCommonEmits

export type {
  UserOptionItem as CheckboxOptionItem,
  UserOptionItem as RadioOptionItem
}

import type { GroupContextItemRef, GroupContextValue } from '../hooks'

export interface CheckContextValue extends GroupContextValue {
  value?: ModelValue | ModelValue[]
  activeColor?: string
  name?: string
  disabled?: boolean
  onChange?: (uid: symbol) => void
}

export interface CheckContextRef extends GroupContextItemRef {
  getInputChecked: () => boolean
  getValue: () => ModelValue | undefined
  setChecked: (checked: boolean) => void
}
