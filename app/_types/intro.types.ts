export interface IIntroDescription {
  name: string
  title: string
  blurb: string
  blurbQuery?: string | string[]
}

export interface IIntroHeadshot {
  src: string
  alt: string
}

export interface IIntro {
  description: IIntroDescription
  headshot: IIntroHeadshot
}
