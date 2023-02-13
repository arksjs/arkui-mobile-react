import * as React from 'react'
import { isFragment } from 'react-is'

export type FC<T = Record<string, unknown>> = React.FC<
  T & {
    className?: string
  }
>
export type VFC<T = Record<string, unknown>> = React.VFC<
  T & {
    className?: string
  }
>
export type FRFC<
  T,
  P = Record<string, unknown>
> = React.ForwardRefRenderFunction<
  T,
  P & {
    className?: string
    children?: React.ReactNode | undefined
  }
>
export type FRVFC<
  T,
  P = Record<string, unknown>
> = React.ForwardRefRenderFunction<
  T,
  P & {
    className?: string
  }
>

export type RenderProp<T = void> = T extends void
  ? () => React.ReactNode
  : (data: T) => React.ReactNode
export type RenderChildren<T> =
  | ((payload: T) => React.ReactNode)
  | React.ReactNode

export const getFilteredChildren = (
  children: React.ReactNode | undefined,
  displayName: string
) => {
  const ret: React.ReactElement[] = []

  React.Children.forEach(children, (child: any) => {
    if (child == null) {
      return
    }

    if (Array.isArray(child)) {
      return
    }

    if (child.type?.displayName === displayName) {
      ret.push(child)
    }
  })

  return ret
}

export function toArray(children: React.ReactNode): React.ReactElement[] {
  let ret: React.ReactElement[] = []

  React.Children.forEach(children, (child: any) => {
    if (child === undefined || child === null) {
      return
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child))
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children))
    } else {
      ret.push(child)
    }
  })

  return ret
}
