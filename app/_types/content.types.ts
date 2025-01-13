import { IIntro } from './intro.types'
import { IExperience } from './experience.types'
import { ILinkList } from './links.types'

export interface INavLink {
  text: string
  href: string
}

export interface IHeader {
  logoText: string
  logoHref?: string
  navLinks?: INavLink[]
}

export interface IContent {
  header: IHeader
  intro: IIntro
  experience: IExperience
  linkList: ILinkList
}
