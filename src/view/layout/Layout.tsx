import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Routers } from '@/router/Router'
import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

const Layout: React.FC = () => {
  const [navName, setNavName] = useState("home")
  return (
    <>
      <Routers />
      <Tabbar value={navName} onChange={name => setNavName(name as string)}>
        <Tabbar.Item name='home' icon={<HomeO />}>
          <Link to="/home">主页</Link>
        </Tabbar.Item>
        <Tabbar.Item name='search' icon={<Search />}>
          <Link to="/search">搜索</Link>
        </Tabbar.Item>
        <Tabbar.Item name='firends' icon={<FriendsO />}>
          <Link to="/shopping">用户</Link>
        </Tabbar.Item>
        <Tabbar.Item name='setting' icon={<SettingO />}>
          设置
        </Tabbar.Item>
      </Tabbar>
    </>
  )
}
export default Layout
