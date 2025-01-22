import { IExperience } from './experience.types'
import { IHeader } from './header.types'
import { IIntro } from './intro.types'
import { ILinkList } from './links.types'

export interface IContent {
  header: IHeader
  intro: IIntro
  experience: IExperience
  linkList: ILinkList
}
