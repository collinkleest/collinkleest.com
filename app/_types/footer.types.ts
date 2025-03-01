import { ReactElement } from 'react'
import { IconType } from 'react-icons'

export interface IFooterLink {
  key: string
  href: string
  title: string
  icon: ReactElement<IconType>
  target?: string
}

export interface IFooter {
  footerLinks: IFooterLink[]
  copyright: string
}
