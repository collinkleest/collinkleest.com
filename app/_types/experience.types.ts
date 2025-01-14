import { ReactElement } from 'react'

export interface IExperienceRole {
  roleTitle: string
  roleTimeline?: string
  roleBlurb?: string
  roleBullets: string[]
  avatar?: ReactElement
}

export interface IExperienceBlock {
  companyName: string
  timeline: string
  roles: IExperienceRole[]
  avatar?: ReactElement
}

export interface IExperience {
  title: string
  experienceBlocks: IExperienceBlock[]
}
