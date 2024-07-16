export interface INavLink {
  text: string
  href: string
}

export interface IHeader {
  logoText: string
  logoHref?: string
  navLinks?: INavLink[]
}

export interface IExperienceRole {
  roleTitle: string
  roleBlurb?: string
  roleBullets: string[]
}

export interface IExperienceBlock {
  companyName: string
  timeline: string
  roles: IExperienceRole[]
}

export interface IExperience {
  title: string
  experienceBlocks: IExperienceBlock[]
}

export interface IContent {
  header: IHeader
  experience: IExperience
}
