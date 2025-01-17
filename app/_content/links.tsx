import { ILinkList } from '@_types'
import { FaDev, FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa'

export const links: ILinkList = {
  links: [
    {
      text: 'GitHub',
      url: 'https://github.com/collinkleest',
      icon: <FaGithub />
    },
    {
      text: 'LinkedIn',
      url: 'https://linkedin.com/in/collinkleest',
      icon: <FaLinkedin />
    },
    {
      text: 'Dev.to',
      url: 'https://dev.to/collinkleest',
      icon: <FaDev />
    },
    {
      text: 'Spotify',
      url: 'https://open.spotify.com/user/1270362442?si=cc668d077a924196',
      icon: <FaSpotify />
    }
  ]
}
