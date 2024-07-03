import { IContent } from '../_types'

const content: IContent = {
  header: {
    logoText: 'Collin Kleest',
    logoHref: '/',
    navLinks: [
      {
        text: 'About',
        href: '/about'
      },
      {
        text: 'Experience',
        href: '/experience'
      },
      {
        text: 'Projects',
        href: '/projects'
      },
      {
        text: 'Resume',
        href: '/resume'
      }
    ]
  },
  experience: {
    title: 'Experience',
    experienceBlocks: [
      {
        companyName: 'Vanguard',
        timeline: 'Aug 2021 - Present',
        roles: [
          { roleTitle: 'Tech Lead', roleBullets: ['Leading Software Team'] }
        ]
      }
    ]
  }
}

export default content
