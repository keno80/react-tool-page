import { Routes, Route } from 'react-router-dom'
import { IRoutes } from '@/types/router'

const routes: Record<string, any> = import.meta.glob('./modules/*.ts', { eager: true })

console.log(routes)

const allRouter: IRoutes[] = []
Object.keys(routes).forEach((item) => {
  Object.keys(routes[item]).forEach((key) => {
    allRouter.push(...routes[item][key])
  })
})

// 路由处理 - 鉴权，设置title等等
const RouterSet = ({ item }: { item: IRoutes }) => {
  document.title = item.meta.title

  return <item.element />
}

const RouterPage = () => (
  <Routes>
    {allRouter.map((route) => (
      <Route path={route.path} element={<RouterSet item={route} />} key={route.name}></Route>
    ))}
  </Routes>
)
export default RouterPage
