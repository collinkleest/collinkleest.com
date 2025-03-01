import { FaDev, FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { IFooter } from '../_types/footer.types'

export const footer: IFooter = {
  footerLinks: [
    {
      key: 'github',
      href: 'https://github.com/collinkleest',
      title: 'Github profile link',
      icon: <FaGithub />
    },
    {
      key: 'linkedin',
      href: 'https://linkedin.com/in/collinkleest',
      title: 'Linkedin profile link',
      icon: <FaLinkedin />
    },
    {
      key: 'dev.to',
      href: 'https://dev.to/collinkleest',
      title: 'Dev.to profile link',
      icon: <FaDev />
    },
    {
      key: 'spotify',
      href: 'https://open.spotify.com/user/1270362442?si=cc668d077a924196',
      title: 'Spotify profile link',
      icon: <FaSpotify />
    },
    {
      key: 'email',
      href: 'mailto:collinkleest@gmail.com',
      title: 'Collin Kleest email link',
      icon: <TfiEmail />
    }
  ],
  copyright: `Copyright © Collin Kleest ${new Date().getFullYear()} All rights
        Reserved`
}
