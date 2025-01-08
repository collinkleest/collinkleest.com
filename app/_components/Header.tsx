'use client'
import { Menu } from '@mui/icons-material'
import content from '../_content/'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Component } from 'react'
import { ReactElement } from 'react'

const Header = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobile = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <nav className="bg-slate-950 border-b-2 p-4 flex items-center sticky w-full justify-between flex-wrap t-0 z-10 font-mono">
        <a href={content.header.logoHref || '/'} className="text-slate-300">
          {content.header.logoText}
        </a>
        <div className="lg:hidden">
          <Menu
            onClick={toggleMobile}
            className="text-slate-500 hover:text-slate-300"
          />
        </div>
        <div className={`${isOpen ? '' : 'hidden'}  lg:flex`}>
          <ul className="list-reset flex list-none">
            {content.header.navLinks.map((navLink) => (
              <li className="mr-3" key={navLink.text}>
                <a
                  href={navLink.href}
                  className={`${pathname === navLink.href ? 'text-slate-300' : 'text-slate-500'} hover:text-slate-300`}>
                  {navLink.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
