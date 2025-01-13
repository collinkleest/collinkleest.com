import { ReactElement } from 'react'
import { IconType } from 'react-icons'

export interface ILinkButton {
  text: string
  url: string
  variant?: string
  size?: string
  icon?: ReactElement<IconType>
}

export interface ILinkList {
  links: ILinkButton[]
}
