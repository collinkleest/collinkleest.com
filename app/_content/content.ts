import { IContent } from '@_types'
import { experience } from './experience'
import { header } from './header'
import { intro } from './intro'
import { links } from './links'
import { resume } from './resume'

const content: IContent = {
  header: header,
  experience: experience,
  intro: intro,
  linkList: links,
  resume: resume
}

export default content
