import { ReactElement } from 'react'

export interface IExperienceRole {
  roleTitle: string
  roleTimeline?: string
  roleLocation?: string
  roleBlurb?: string
  roleBullets: string[]
  avatar?: ReactElement
}

export interface IExperienceBlock {
  companyName: string
  timeline: string
  roles: IExperienceRole[]
  avatar?: ReactElement
  connector?: ReactElement
  location?: string
}

export interface IExperience {
  title: string
  experienceBlocks: IExperienceBlock[]
}
