import { IIntro } from '@_types'
import headshot from '../../public/images/headshot-v2.jpeg'

export const intro: IIntro = {
  description: {
    name: 'Collin Kleest',
    title: 'Software Engineer & Technical Lead',
    blurb:
      'Hello, I’m Collin Kleest, currently a Software Technical Lead at Vanguard located in the Dallas-Fort Worth area. With over four years of experience in software engineering and technical leadership, I specialize in full-stack development and excel at solving challenging problems.',
    blurbQuery: [
      'Software Technical Lead',
      'four',
      'full-stack development',
      'Dallas-Fort Worth'
    ]
  },
  headshot: {
    image: headshot,
    src: 'images/headshot-v2.jpeg',
    alt: 'Collin Kleest Headshot'
  }
}
