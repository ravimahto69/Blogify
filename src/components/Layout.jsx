'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menus = [
  {
    label :'Home',
    href : '/',
    
  
  },
  {
    label :'Blog',
    href : '/blog'
    
  },
  {
    label:'Login',
    href:'/login'
  }
]

const Layout = ({children}) => {
    const pathname = usePathname()
    
    const blacklist = [
      "/login",
      "/sign-up"
    ]
    const isBlacklist = blacklist.includes(pathname)
    if (isBlacklist)
      return(
        <div>
          {children}
        </div>
    )
    
  return (
    <div>
        <nav className="bg-white shadow-lg  px-20  sticky top-0 left-0 w-full py-6 flex justify-between items-center">
      <Link href="/" className="font-extrabold">NextApp</Link>

      <div className="flex items-center gap-10 font-bold ">
        {
          menus.map((items,index)=>(
           <Link href={items.href} key={index} className={pathname === items.href ? 'text-violet-600 font-medium': 'text-black font-normal'}>{items.label}</Link>
          ))
        }
        <Link href='/sign-up' className='bg-violet-600 rounded px-12 py-3 text-white'>Signup</Link>
    
      </div>
      
      </nav>

        <section className="px-[10%] py-16">{children}</section>
        <footer className="bg-gray-950 text-white flex items-center justify-center h-[550] text-3xl">Footer</footer>
    </div>
  )
}

export default Layout