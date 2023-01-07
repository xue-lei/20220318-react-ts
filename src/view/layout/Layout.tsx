import React, { type ReactElement } from 'react'
import Home from '@/view/home/Home'
import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'
interface LayoutPropsType {
  children?: string
}
const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  // 初始化组件集合
  const components: Map<string, ReactElement> = new Map([
    ['home', <Home />]
  ])
  // 当前组件
  const [name, setName] = React.useState('home')
  return (
    <>
      {components.get(name)}
      <Tabbar value={name} onChange={v => setName(v as string)}>
        <Tabbar.Item name='home' icon={<HomeO />}>
          主页
        </Tabbar.Item>
        <Tabbar.Item name='search' icon={<Search />}>
          搜索
        </Tabbar.Item>
        <Tabbar.Item name='firends' icon={<FriendsO />}>
          用户
        </Tabbar.Item>
        <Tabbar.Item name='setting' icon={<SettingO />}>
          设置
        </Tabbar.Item>
      </Tabbar>
    </>
  )
}
export default Layout
