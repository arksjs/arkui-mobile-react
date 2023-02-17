import type { Context, FC, MutableRefObject } from 'react'

export type GroupContextValue = {
  hasGroup: boolean
}

export type GroupContextItemRef = {
  uid: symbol
}

export type GroupContext<T, P extends GroupContextItemRef> = Context<
  T & {
    hasGroup?: boolean
    addItem?: (ref: MutableRefObject<P>) => void
    removeItem?: (ref: MutableRefObject<P>) => void
  }
>

export function withProvider<T>(WrappedContext: Context<T>, value: T) {
  const Provider: FC = props => {
    return <WrappedContext.Provider value={value} {...props} />
  }

  return Provider
}
