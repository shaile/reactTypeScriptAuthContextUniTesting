import * as React from 'react'

export function lazyImport<
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I,
>(factory: () => Promise<I>, name: K): I {
  return Object.create({
    [name]: React.lazy(() => factory().then((module) => ({ default: module[name] }))),
  })
}

// https://github.com/facebook/react/issues/14603#issuecomment-726551598
// Usage
// const { About } = lazyImport(() => import("./About"), "About");
