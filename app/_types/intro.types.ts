import { StaticImageData } from 'next/image'

export interface IIntroDescription {
  name: string
  title: string
  blurb: string
  blurbQuery?: string | string[]
}

export interface IIntroHeadshot {
  image: StaticImageData
  src: string
  alt: string
}

export interface IIntro {
  description: IIntroDescription
  headshot: IIntroHeadshot
}
