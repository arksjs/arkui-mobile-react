import { createContext } from 'react'
import type { GroupContext } from '../hooks'
import type { CheckContextRef, CheckContextValue } from './types'

export const CheckboxContext: GroupContext<CheckContextValue, CheckContextRef> =
  createContext<CheckContextValue>({ hasGroup: false })
