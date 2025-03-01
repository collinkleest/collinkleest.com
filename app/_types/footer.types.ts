import { IconType } from 'react-icons'

export interface IFooterLink {
  href: string
  title: string
  icon: IconType
  target?: string
}

export interface IFooter {
  footerLinks: string[]
  copyright: string
}
