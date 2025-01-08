'use client'
import { Menu } from '@mui/icons-material'
import content from '../_content/'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobile = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <nav>
        <a href={content.header.logoHref || '/'}>{content.header.logoText}</a>
        <div>
          <Menu onClick={toggleMobile} />
        </div>
        <div>
          <ul>
            {content.header.navLinks.map((navLink) => (
              <li key={navLink.text}>
                <a href={navLink.href}>{navLink.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
