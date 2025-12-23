'use client'

import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { useRouter, usePathname } from 'next/navigation'

const { Header, Sider, Content } = Layout

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  // ✅ Sidebar menu items
  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '/admin',
      icon: <UserOutlined />,
      label: 'Dashboard',
    },
  ]

  // 🔴 Logout handler
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/login')
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* ===== SIDEBAR ===== */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="h-10 m-4 text-white text-center font-bold">
          ADMIN
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={({ key }) => router.push(key)}
        />
      </Sider>

      {/* ===== MAIN LAYOUT ===== */}
      <Layout>
        {/* ===== HEADER ===== */}
        <Header
          style={{
            padding: '0 16px',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: sidebar toggle */}
          <Button
            type="text"
            icon={
              collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: 16,
              width: 64,
              height: 64,
            }}
          />

          {/* Right: Logout */}
          <Button
            danger
            type="primary"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Header>

        {/* ===== CONTENT ===== */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
