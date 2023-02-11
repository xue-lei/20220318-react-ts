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
    element: <>12312313</>
  },
]
export const Routers: React.FC = () => {
  const view: React.ReactElement | null = useRoutes(routes)
  console.log(view)
  let isPass = true
  if (view?.props.match.pathname === '/search') {
    isPass = false
  }
  return (
    <>
      {isPass ? view : <div>503</div>}
    </>
  )
}
