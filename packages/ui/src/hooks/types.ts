import type { UnionToIntersection } from '../helpers'

export type UseEmitFn<
  Options,
  Event extends keyof Options = keyof Options
> = UnionToIntersection<
  {
    [key in Event]: Options[key] extends (...args: infer Args) => any
      ? (event: key, ...args: Args) => void
      : (event: key, ...args: any[]) => void
  }[Event]
>

import React from 'react'

export type GroupContextValue = {
  hasGroup: boolean
}

export type GroupContextItemRef = {
  uid: symbol
}

export type GroupContext<T, P extends GroupContextItemRef> = React.Context<
  T & {
    hasGroup?: boolean
    addItem?: (ref: React.MutableRefObject<P>) => void
    removeItem?: (ref: React.MutableRefObject<P>) => void
  }
>
