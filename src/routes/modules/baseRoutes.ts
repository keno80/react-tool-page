import { IRoutes } from '@/types/router'
import { lazy } from 'react'

export const BaseRoutes: IRoutes[] = [
  {
    path: '/',
    name: 'Home',
    element: lazy(() => import('@/pages')),
    meta: {
      title: '首页',
    },
  },
]
