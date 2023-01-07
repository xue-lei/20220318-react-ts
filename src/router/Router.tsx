import React from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import Home from '@/view/home/Home'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/search',
    element: <div>12312313</div>
  },
]
export const Routers: React.FC = () => {

  const view: any = useRoutes(routes)
  return (
    <>
      {view}
    </>
  )
}
