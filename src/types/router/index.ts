export interface IRoutes {
  path: string
  name: string
  element: React.LazyExoticComponent<() => JSX.Element>
  children?: IRoutes[]
  meta: {
    title: string
  }
}
