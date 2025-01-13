export interface IExperienceRole {
  roleTitle: string
  roleTimeline?: string
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
