'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menus = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Login', href: '/login' },
];

const Layout = ({ children }) => {
  const pathname = usePathname();

  const blacklist = ['/login', '/sign-up', '/admin'];

  const isBlacklist = blacklist.some(
    (route) => pathname === route || pathname.startsWith(route + '/')
  );

  if (isBlacklist) {
    return <>{children}</>;
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="z-[2000] bg-white shadow-lg px-20 sticky top-0 left-0 w-full py-6 flex justify-between items-center">
        <Link href="/" className="font-extrabold text-xl">
          NextApp
        </Link>

        <div className="flex items-center gap-10 font-bold">
          {menus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href || pathname.startsWith(item.href + '/')
                  ? 'text-violet-600 font-medium'
                  : 'text-black font-normal'
              }
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/sign-up"
            className="bg-violet-600 rounded px-12 py-3 text-white"
          >
            Signup
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <section className="px-[10%] py-16">{children}</section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white flex items-center justify-center h-55 text-2xl">
         Footer
      </footer>
    </div>
  );
};

export default Layout;
