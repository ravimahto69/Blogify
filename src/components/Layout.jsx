"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Login", href: "/login" },
];

const Layout = ({ children }) => {
  const pathname = usePathname();

  const blacklist = ["/login", "/sign-up", "/admin"];

  const isBlacklist = blacklist.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  if (isBlacklist) {
    return <>{children}</>;
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="z-[2000] bg-white shadow-lg px-20 sticky top-0 left-0 w-full py-6 flex justify-between items-center">
        <Link href="/" className="font-extrabold text-xl">
          Blogify
        </Link>

        <div className="flex items-center gap-10 font-bold">
          {menus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-violet-600 font-medium"
                  : "text-black font-normal"
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
      <footer className="bg-gray-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Blogify</h2>
            <p className="text-sm text-gray-400">
              Learn web development through real-world stories and code.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm text-gray-400">Have questions or feedback?</p>
            <a
              href="/contact-us"
              className="inline-block mt-3 text-blue-500 hover:text-blue-400"
            >
              Get in touch →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Blogify. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
