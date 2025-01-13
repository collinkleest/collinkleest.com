import { IExperience } from './experience.types'

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
  experience: IExperience
}
