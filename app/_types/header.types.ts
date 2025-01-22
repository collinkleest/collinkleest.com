import { ReactElement } from 'react'

export interface INavLink {
  text: string
  href: string
  icon: ReactElement
}

export interface IHeader {
  logoText?: string
  logoHref?: string
  navLinks?: INavLink[]
}
